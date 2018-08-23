# Covenant-Name

> Status: incomplete|approved <br>
> Dependencies: [`${Name} covenant`](link-to-spec), [`${Name} covenant`](link-to-spec), ...

## Purpose
A high level description of what this covenant is supposed to do in order to support megachain applications.

## Interface
List of actions(stories) that can be sent from applications or sent in by other covenants (without mentioning the actual sender). Document them like public methods on a class.

For each action, specify:
 * what the input is supposed to look like
 * what is the general expected behavior
 * how to to fulfill this contract? More specifically, what interfaces from other covenants are we relying on? Reference the other covenants by their capitalized name like `${Name} covenant`.
 * what is the expected output
 * error conditions

## Tests
Enumerate different happy path/error paths that the covenant is expected to implement.
Each test can be described with:
* preconditions (state of the covenant or system)
* sequence of input actions
* expected changes in covenant's state
* expected response
* expected error condition

## Selectors
A set of named selectors that the covenant might expose, to allow inspections into its state.
This would decouple the exact implementation of covenant's state from the information that it is required to provide.

## Stress tests
Identify potential bottlenecks on the covenant and explain how it can be load tested.
In other words, what steps would you take to break the covenant under the pressure.

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
