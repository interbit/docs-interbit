# OAuth Covenant

> Status: incomplete <br>
> Dependencies: [`interbit covenant tools`](link-to-spec)
> Callers: [`web-auth-endpoint`](link-to-spec)
> Join consumers: [`control`](./control.md)

## Purpose

This covenant manages the oAuth handshake and implements features required for:

* creating new private chains
* configuring private chains
* managing access to private chains
* destroying private chains
* providing the Public chain with the information `interbit` applications need to create new private chains

Private chains are created using chain sponsorship and are child chains of the Control chain. Using child chains automatically provides the Control chain with root access for chain management.

## Interface

### Selectors

| Selector         | Purpose                                                   |
|:-                |:-                                                         |
| `oAuthConfig`
| `tokenUrl`
| `profileUrl`
| `callbackUrl`
| `clientId`
| `params`
| `redirectUrl`
| `scope`
| `allowSignup`
| `joinProviders`


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
* [`UPDATE_PROFILE`](#c-update_profile)
* [`REGISTER_PRIVATE_CHAIN`](#d-register_private_chain)
* [`UPDATE_PRIVATE_CHAIN_ACL`](#e-update_private_chain_acl)
* [`REMOVE_PROFILE`](#f-remove_profile)
* [`AUTH_REQUESTED`](#g-auth_requested)
* [`AUTH_SUCEEDED`](#h-auth_suceeded)
* [`AUTH_FAILED`](#i-auth_failed)
* [`SIGN_OUT`](#j-sign_out)

### a. `CONFIGURE_OAUTH_APP`

### b. `OAUTH_CALLBACK`
Called by web server listening to redirects from the oAuth provider (`web-auth-endpoint`) to complete oAuth authentication and to obtain user profile information from the oAuth provider. During authentication, oAuth providers generate a temporary, single-use code that has to be exchanged for an access token.



#### payload

* `requestId`: a unique request id
* `publicKey`: the public key for the user's device
* `browserChainId`: ID of the user's private chain running in the browser
* `temporaryToken`: temporary code from the oAuth provider
* `error`, `errorDescription`: an error from the oAuth provider if the user denies access to the application

#### state changes

`authenticationRequests`/_`[requestId]`_: contains value of `temporaryToken`

#### side effect calls

1. `AUTH_FAILED` with payload `{requestId, browserChainId, error}`: if an error is returned by the oAuth provider
1. `OAUTH_CALLBACK_SAGA` with payload `{requestId, publicKey, browserChainId, temporaryToken}`

#### errors

#### tests

### c. `UPDATE_PROFILE`

### d. `REGISTER_PRIVATE_CHAIN`

### e. `UPDATE_PRIVATE_CHAIN_ACL`

### f. `REMOVE_PROFILE`

### g. `AUTH_REQUESTED`

### h. `AUTH_SUCEEDED`

Clean-up after successful authentication

#### payload

* `requestId`: Authentication request Id

#### state change

`authenticationRequests`: no longer contains `requestId`

#### side effect calls

none

#### errors

none

#### tests

1. Authentication request `requestId` is removed.
1. Missing authentication requests are ignored.

### i. `AUTH_FAILED`
Clean-up after authentication fails.

#### payload

* `requestId`: The ID of an ongoing authentication attempt
* `browserChainId`: The chain ID of the private user chain

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

### j. `SIGN_OUT`
Remove user's profile data obtained from the authentication provider.

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
