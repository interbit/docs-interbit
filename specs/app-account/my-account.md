# my-account

> Status: incomplete <br>
> Dependencies: [`${Name} covenant`](link-to-spec), [`${Name} covenant`](link-to-spec), ...

## Purpose
This covenant manages users' personal information.

It implements functionality for:

* updating personal profile information
* chain authorization, for secure information sharing with other chains

## Interface
List of actions(stories) that can be sent from applications or sent in by other covenants (without mentioning the actual sender). Document them like public methods on a class.

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
