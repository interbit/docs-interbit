# OAuth Covenant

> Status: incomplete <br>
> Dependencies: [`interbit covenant tools`](link-to-spec)
> Callers: [`web-auth-endpoint`](link-to-spec)
> Join consumers: [`control`](./control.md)

## Purpose

This manages OAuth authentication and authorization and implements features required for:

* managing the OAuth handshake
* associating private chains with user identities
* loading users private chains at logon
* enabling access to users private chains from multiple devices

The first time a user authenticates using OAuth, the current private chain is registered to the OAuth user id along with basic user profile information. Subsequent OAuth logins refresh the user profile information and direct the application to load the registered private chain. Successful authentication from a second device adds the device's public key to the private chain's ACL.

## Interface

### Selectors

| Selector         | Purpose                                                   |
|:-                |:-                                                         |
|`callbackUrl`|OAuth application callback URL to the `web-auth-endpoint` web service that dispatches the `OAUTH_CALLBACK` action
|`tokenUrl`|OAuth provider URL for exchanging the temporary `code` from the OAuth redirect with a permanent access token
|`profileUrl`|OAuth provider URL for retrieving user profile information after authentication
|`redirectUrl`|`interbit` application URL where users are sent after authorization
|`clientId`|OAuth application client ID. The corresponding `clientSecret` is not exposed.
|`scope`|access permissions the user will be requested to grant the application
|`allowSignup`|if unauthenticated users will be given the option to sign-up during the authentication flow
|`params`|gets the URL parameters `interbit` applications need to pass to the OAuth provider to initiate OAuth
|`oAuthConfig`|gets the complete OAuth configuration

### Joins

#### consume

| Name | Provider | Mount path |
|:-    |:-        |:-          |
| `CONTROL_CHAIN_ID` | _[controlChainAlias]_ | `controlChainId` |

#### provide

| Name | Consumer | Shared Path |
|:-    |:-        |:-           |
| `OAUTH-CONFIG-GITHUB` | _[publicChainAlias]_ | `oAuth`/`shared` |

#### send action to

| Receiver | Actions authorized by receiver |
|:-        |:-                              |
| _[controlChainAlias]_ | `ADD_KEY_TO_SPONSORED_CHAIN` |

### Actions

* [`CONFIGURE_OAUTH_APP`](#a-configure_oauth_app)
* [`OAUTH_CALLBACK`](#b-oauth_callback)
* [`OAUTH_CALLBACK_SAGA`](#c-oauth_callback_saga)
* [`UPDATE_PROFILE`](#d-update_profile)
* [`REGISTER_PRIVATE_CHAIN`](#e-register_private_chain)
* [`UPDATE_PRIVATE_CHAIN_ACL`](#f-update_private_chain_acl)
* [`REMOVE_PROFILE`](#g-remove_profile)
* [`AUTH_REQUESTED`](#h-auth_requested)
* [`AUTH_SUCEEDED`](#i-auth_suceeded)
* [`AUTH_FAILED`](#j-auth_failed)
* [`SIGN_OUT`](#k-sign_out)

### a. `CONFIGURE_OAUTH_APP`

### b. `OAUTH_CALLBACK`
Called by the `web-auth-endpoint` web server that listens to redirects from the OAuth provider. Triggers side-effects that complete OAuth authentication and obtain user profile information from the OAuth provider.

#### payload

* `requestId`: a unique request id
* `publicKey`: the public key for the user's device
* `browserChainId`: ID of the user's private chain running in the browser
* `temporaryToken`: temporary `code` from the OAuth provider needed to retrieve a permanent authorization token
* `error`, `errorDescription`: an error from the OAuth provider if the user denies access

#### state changes

`authenticationRequests`/_`[requestId]`_: contains value of `temporaryToken`

#### side effect calls

1. `AUTH_FAILED` with payload `{requestId, browserChainId, error}`: when an error is returned by the OAuth provider
1. `OAUTH_CALLBACK_SAGA` with payload `{requestId, publicKey, browserChainId, temporaryToken}`

#### errors

#### tests

### c. `OAUTH_CALLBACK_SAGA`
Manages side-effects that complete OAuth authentication and obtain user profile information from the OAuth provider.

#### payload

* `requestId`: a unique request id
* `publicKey`: the public key for the user's device
* `browserChainId`: ID of the user's private chain running in the browser
* `temporaryToken`: temporary `code` from the OAuth provider needed to retrieve a permanent authorization token

#### state changes

none

#### side effect calls

1. HTTP POST to `tokenUrl`: to exchange the temporary `code` with a permanent access token
1. HTTP GET to `profileUrl`: to retrieve the user profile data from the OAuth provider
1. `REGISTER_PRIVATE_CHAIN`: when `userId` does not have a registered private chain
1. `UPDATE_PRIVATE_CHAIN_ACL`: when a private chain is already registered for `userId`
1. `UPDATE_PROFILE`: when authorization completes to refresh the profile data
1. `@@interbit/START_PROVIDE_STATE`: when `userId`'s private chain is first registered to configure a read join sharing `userId`'s profile data with their private chain
1. `AUTH_SUCEEDED`: when authorization is complete and the profile data has been refreshed
1. `AUTH_FAILED`: when an error occurs or is returned by the OAuth provider

#### errors

1. `AUTH_FAILED` with payload `{requestId, browserChainId, error}`: `error` contains specific error details.

#### tests

### d. `UPDATE_PROFILE`

Dispatched by `OAUTH_CALLBACK_SAGA` to refresh the user profile data

#### payload

* `privateChainId`: User's private chain ID.
* `profile`: User's profile information obtained from the OAuth provider. Includes a unique user ID, user name and other profile properties.

#### state change

`profiles`/_`[privateChainId]`_/`sharedProfile`: contains `profile`.

### e. `REGISTER_PRIVATE_CHAIN`

#### payload

* `privateChainId`: User's private chain ID.
* `userId`: Unique user identifier from the profile.
* `publicKey`: the public key for the user's device

#### state change

`users`/_`[userId]`_: contains the `privateChainId` and an array of associated public keys initially conytaining just `publicKey`.

### f. `UPDATE_PRIVATE_CHAIN_ACL`

Dispatched by `OAUTH_CALLBACK_SAGA` to add 2nd device public key to private chain ACL

#### payload

* `privateChainId`: User's private chain ID.
* `userId`: Unique user identifier from the profile.
* `publicKey`: the public key for the user's device

#### state change

#### side effect calls

#### errors

#### tests

### g. `REMOVE_PROFILE`

Remove user's profile data obtained from the authentication provider.

* `privateChainId`: chain ID of the user's private chain hosted on `interbit` infrastructure

#### state change

`profiles`: no longer contains `privateChainId`

#### side effect calls

none

#### errors

none

#### tests

1. Profile `privateChainId` is removed.
1. Missing profiles are ignored.
1. `users` maintains record of the private chain ID and public keys associated with the user.

## Stress tests

### h. `AUTH_REQUESTED`

#### payload

* `requestId`: a unique request id
* `temporaryToken`: temporary `code` from the OAuth provider needed to retrieve a permanent authorization token

#### state change

`authenticationRequests`/_`[requestId]`_: contains value of `temporaryToken`

### i. `AUTH_SUCEEDED`

Dispatched by `OAUTH_CALLBACK_SAGA` to clean-up after successful authentication

`web-auth-endpoint` listens for this action to redirect back to the `interbit` application when OAuth completes successfully.

#### payload

* `requestId`: The request ID of an ongoing authentication attempt
* `browserChainId`: chain ID of the user's private chain running in the browser
* `privateChainId`: chain ID of the user's private chain hosted on `interbit` infrastructure. For the user's initial login, this will be `browserChainId`
* `providerChainId`: chain ID of this chain, for completing authorization by configuring the join consumer on the user's private chain.
* `joinName`: join name for completing authorization

#### state change

`authenticationRequests`: no longer contains `requestId`

#### side effect calls

none

#### errors

none

#### tests

1. Authentication request `requestId` is removed.
1. Missing authentication requests are ignored.

### j. `AUTH_FAILED`

Dispatched by `OAUTH_CALLBACK_SAGA` to clean-up after authentication fails.

`web-auth-endpoint` listens for this action to redirect back to the `interbit` application when OAuth fails.

#### payload

* `requestId`: request ID of an ongoing authentication attempt
* `browserChainId`: chain ID of the user's private chain running in the browser
* `error`: error details

#### state change

`authenticationRequests`: no longer contains `requestId`
`profiles`: no longer contains `browserChainId`

#### side effect calls

none

#### errors

none

#### tests

1. Authentication request `requestId` is removed.
1. Profile `browserChainId` is removed.
1. Missing authentication requests and profiles are ignored.

### k. `SIGN_OUT`

Remove user's profile data obtained from the authentication provider. [Currently this is the same as `REMOVE_PROFILE` - need to reconsider what sign-out actually means]

* `privateChainId`: chain ID of the user's private chain hosted on `interbit` infrastructure

#### state change

`profiles`: no longer contains `privateChainId`

#### side effect calls

none

#### errors

none

#### tests

1. Profile `privateChainId` is removed.
1. Missing profiles are ignored.
1. `users` maintains record of the private chain ID and public keys associated with the user.

## Stress tests

# Implementation

Imagine implementing this covenant from scratch, breaking the interface down into vertical (functional) phases.

For each phase, define:

* which contracts from the [interface section](#interface), and
* which tests from the [tests section](#tests)

must be implemented to bring that phase to completion.

## Phase 1

> Status: COMPLETED
Description

## Phase 2

> Status: REQUESTED
Description

# Questions

List of anything that the Platform team had trouble deciding or understanding on its own.
