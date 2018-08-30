# `interbit-template` Private Covenant 

> Status: incomplete
>
> Dependencies: [`interbit-covenant-tools`](#)

## Purpose
This covenant is the _Private_ part of the _Public/Private/Control (PPC)_ pattern. It has some sample actions that serve as a starting point for how a developer might create their own Interbit application. 

## Interface

### State slices
| State slice    | Usage |
|:-              |:-     |
| `memo`         | Memos are pushed to the `memo` array |
| `runningTotal` | A running total of numbers |


### Selectors
| Selector         | Purpose                                                   |
|:-                |:-                                                         |
| None             |                                                           |
### Joins

#### provide

#### consume

### Actions
- [`MEMO`](#a-memo)
- [`ADD`](#b-add)

### a. `MEMO`
Called from the `interbit-template` app to add a memo to the user's private chain.

#### payload
- `text` The memo text to add to the private chain

#### state change
- `memo` array has `text` pushed to it

#### side effect calls
None

#### errors
None

#### tests
1. Only non-empty memos are added to the private chain

### b. `ADD`
Called from the `interbit-template` app to keep a running total on the user's private chain. 

#### payload
- `number` 

#### state change
- `runningTotal` is summed with `number`

#### side effect calls
None

#### errors
None

#### tests
1. Only finite numbers are added to `runningTotal`


## Phase 1
> Status: ?
Description

## Phase 2
> Status: ?
Description


# Questions
List of anything that the Platform team had trouble deciding or understanding on its own.
