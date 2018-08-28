# my-account

> Status: incomplete
>
> Dependencies: [`${Name} covenant`](link-to-spec), [`${Name} covenant`](link-to-spec), ...

## Purpose
This covenant manages users' personal information.

It implements functionality for:

* updating personal profile information
* chain authorization, for secure information sharing with other chains

## Interface
List of actios(stories) that can be sent from applications or sent in by other covenants (without mentioning the actual sender). Document them like public methods on a class.

### Selectors
| Selector         | Purpose                                                   |
|:-                |:-                                                         |
| none             |                                                           |

### Actions
- [`UPDATE_PROFILE`](#a-update_profile)
- [`SHARE_PROFILE_TOKENS`](#b-generate_key_pair)
- [`STOP_SHARING`](#c-generate_secret)
- [`RESET_PROFILE`](#d-decrypt_value)
- [`START_AUTHENTICATION`](#e-sign_value)
- [`CANCEL_AUTHENTICATION`](#f-verify_signature)
- [`COMPLETE_AUTHENTICATION`](#f-verify_signature)

### a. `UPDATE_PROFILE`
Called from the accounts application to persist property changes made by the user.

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
