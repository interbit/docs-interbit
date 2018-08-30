# my-account

> Status: incomplete
>
> Dependencies: [`interbit-covenant-tools`](#)

## Purpose
This covenant manages users' personal information on their private accounts chain.

It implements functionality for:
* updating personal profile information
* resetting personal profile information back to the initial state
* chain authorization, for secure profile information sharing with other chains
* authenticating with a third party provider


## Interface

### State slices

| State slice                                  | Usage |
|:-                                            |:-     |
| `profile`                                    | User's private profile information |
| `profile`/`alias`                            | User's alias |
| `profile`/`email`                            | User's email address |
| `profile`/`name`                             | User's full name, initial value is `anonymous user` |
| `shared`/_[consumerChainId]_/`sharedProfile` | Profile tokens shared via read join with _[consumerChainId]_  |
| `authenticationRequests`/_[requestId]_       | Current OAuth requests initiated by the Accounts app to a third party OAuth provider  |


### Selectors
None

### Joins

#### consume

| Name               | Provider | Mount path | Description |
|:-                  |:-        |:-          |:-           |
| _[uniqueJoinName]_ | _[providerChainId]_, e.g. `accountsGithubAuth` | `profile`/_[tokenName]_ |Consumes third party OAuth profile information from the provider |

#### provide

| Name | Consumer | Shared Path | Description |
|:-    |:-        |:-           |:-           |
| _[uniqueJoinName]_ | _[consumerChainId]_ | `shared`/_[consumerChainId]_/`sharedProfile` | Provides shared profile information to a third party application |


### Actions
- [`UPDATE_PROFILE`](#a-update_profile)
- [`SHARE_PROFILE_TOKENS`](#b-share_profile_tokens)
- [`STOP_SHARING`](#c-stop_sharing)
- [`RESET_PROFILE`](#d-reset_profile)
- [`START_AUTHENTICATION`](#e-start_authentication)
- [`CANCEL_AUTHENTICATION`](#f-cancel_authentication)
- [`COMPLETE_AUTHENTICATION`](#g-complete_authentication)

### a. `UPDATE_PROFILE`
Called from the Accounts app to persist property changes made by the user.

#### payload
* `alias` (optional) User alias
* `name` (optional) Real name
* `email` (optional) User provided email address

#### state change
`profile` Merge payload properties with existing profile
`sharedProfiles` If profile properites are shared, updates values

#### side effect calls
none

### errors
none

### tests
1. Profile properties specified in payload are updated
1. Properties not specified in the payload are not removed
1. Only properties `alias`, `name` and `email` are updated


### b. `SHARE_PROFILE_TOKENS`
Called from the accounts application when a third party app requests profile tokens.

#### payload
* `consumerChainId` The `chainId` of the chain that is requesting the profile tokens
* `joinName` A unique identifier for the chain join
* `sharedTokens` The profile tokens that the consumer chain is requesting

#### state change
* `consumerChainId` is added to `shared` with the `sharedTokens`, `sharedProfile`, and `joinName`

#### side effect calls
`@@interbit/START_PROVIDE_STATE`

#### errors
None

#### tests
1. `sharedProfile` is created with the `sharedTokens` and their values
2. The provider end of the join is set up


### c. `STOP_SHARING`
Called from the Accounts application to revoke profile information sharing. The shared profile information is removed from the requesting chain.

#### payload
* `consumerChainId` The `chainId` of the chain that profile tokens are being shared with

#### state change
* Removes `consumerChainId` from `sharedProfile`

#### side effect calls
None

#### errors
None

#### tests
1. `sharedProfile` is removed from the requesting chain


### d. `RESET_PROFILE`
Called from the Accounts application to reset profile information to initial values.

#### payload
* none

#### state change
* `profile` is reset to the initial state, except for any KYC properties which remains
* `shared` is reset to the initial state

#### side effect calls
None

#### errors
None

#### tests
1. Resets the `profile` fields `alias`, `name`, and `email` to their initial values.
1. Resets `shared` to empty object.
1. Leaves any KYC joined data unchanged in `profile`.
1. Resets the KYC joined data to an empty object in `shared`.


### e. `START_AUTHENTICATION`
Called from the Accounts app to start an authentication flow with a third party OAuth provider.

#### payload
* `oAuthProvider` The name of the OAuth provider, e.g. GitHub
* `requestId` A unique identifier for the OAuth request
* `timestamp` The time when the `startAuthentication` action is dispatched

#### state change
* Adds `[requestId]: {oAuthProvider, timeStamp}` to `authenticationRequests`

#### side effect calls
None

#### errors
None

#### tests
None


### f. `CANCEL_AUTHENTICATION`
Called from the Accounts app to remove an authentication request

#### payload
* `requestId` A unique identifier for the OAuth request

#### state change
* Removes `[requestId]` from `authenticationRequests`

#### side effect calls
None

#### errors
None

#### tests
None


### g. `COMPLETE_AUTHENTICATION`

#### payload
* `oAuthProvider` The name of the OAuth provider, e.g. GitHub
* `providerChainId` The chainId of the chain requesting the OAuth
* `tokenName` The token to be added to the `profile`, e.g. `gitHub-identity`
* `joinName` The name of the chain join with the oAuthProvider chain
* `requestId` A unique identifier for the OAuth request
* `timeStamp` The time when the `completeAuthentication` action creator is called

#### state change
* Read joins to the oAuthProvider chain and adds `tokenName` to the `profile` with the shared OAuth identity information
* Removes the `authenticationRequest` with the payload's `requestId`

#### side effect calls
None

#### errors
None

#### tests
None


## Tests
Enumerate different happy path/error paths that the covenant is expected to implement.
Each test can be described with:
* preconditions (state of the covenant or system)
* sequence of input actions
* expected changes in covenant's state
* expected response
* expected error condition

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
