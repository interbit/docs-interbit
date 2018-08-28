# PPC Control

> Status: incomplete
>
> Dependencies: [`interbit covenant tools`](link-to-spec), [`root covenant`](link-to-spec), [`manifest selectors`](link-to-spec)
> Callers: [`OAuth Provider`](./github-kyc.md)
> Join consumers: [`PPC Public`](./public.md), [`OAuth Provider`](./github-kyc.md)

## Purpose

This covenant is the **Control** part of the **Public/Private/Control (PPC)** pattern. It extends the `root covenant` and implements additional features required for:

* creating new private chains
* configuring private chains
* managing access to private chains
* destroying private chains
* providing the Public chain with the information `interbit` applications need to create new private chains

Private chains are created using chain sponsorship and are child chains of the Control chain. Using child chains automatically provides the Control chain with root access for chain management.

## Interface

### State slices

| State slice | Usage |
|:-           |:-     |
|`privateChainHosting`/`shared`/_`privateChainAlias`_|configuration required to create a genesis block for a new private chain, including `blockMaster`, `sponsorChainId` and `covenantHash`

### Selectors

| Selector         | Purpose                                                   |
|:-                |:-                                                         |
| none             |                                                           |

### Joins

#### provide

| Name | consumer | Path |
|:-    |:-        |:-    |
| `HOSTING_SPONSOR`  | _`PPC Public`_ | `privateChainHosting`/`shared`/_`privateChainAlias`_ |
| `CONTROL_CHAIN_ID` | _`OAuth Provider`_ | `interbit`/`chainId` |

#### receive actions from

| Sender | Authorized action |
|:-      |:-                 |
| _`OAuth Provider`_ | `ADD_KEY_TO_SPONSORED_CHAIN` |

### Actions

* [`SET_MANIFEST`](#a-set_manifest)
* [`ADD_KEY_TO_SPONSORED_CHAIN`](#b-add_key_to_sponsored_chain)

### a. `SET_MANIFEST`

The `root covenant` `SET_MANIFEST` action is called after system startup and to deploy covenant updates. This action provides the current covenant hash and is used to set-up the chain sponsorship configuration required to create new user profile chains.

#### payload

* `manifest` Fully resolved system manifest including mapping of covenent aliases to covenenant hashes. Manifest selector provides covenant hash for _`privateCovenantAlias`_.

#### state change

At `privateChainHosting`/`shared`/_`privateChainAlias`_:

* `blockMaster` The block master public key for new user profile chains
* `sponsorChainId` This chain's ID
* `covenantHash` Covenant hash for _`privateCovenantAlias`_

#### side effect calls

none

### errors

* `no such covenant`: _`privateCovenantAlias`_ is not defined as a manifest covenent.

### tests

1. `privateChainHosting` is updated
1. Value of `blockmaster` is this chain's `blockmaster`
1. Value of `sponsorChainId` is this chain's `chainId`
1. Value of `covenentHash` is the covenent hash for _`privateCovenantAlias`_
1. `privateChainHosting` is updated in _`publicChainAlias`_

### b. `ADD_KEY_TO_SPONSORED_CHAIN`

Called from `OAuth Provider` when user completes authentication from a 2nd device or regenerates their public key, to add the new public key to the private chain ACL.

#### payload

* `sponsoredChainId` The chain ID of a private child chain
* `role` The ACL role to authorize. For oAuth the role will be _`Provider`_-_`userId`_ and is unique for each provider / user combination.
* `authorizedActions` The action to authorize or `*` for all.
* `publicKey` The public key to authorize

#### state change

none

#### side effect calls

Remote redispatch `ADD_TO_ACL` to child chain

### errors

* `not sponsored`: when `sponsoredChainId` is not a child of this chain
* `unauthorized`: when Control chain does not have `root` access to `sponsoredChainId`
* `unauthorized`: when sender not authorized to dispatch `ADD_KEY_TO_SPONSORED_CHAIN`

### tests

1. `publicKey` is added to ACL of chain `sponsoredChainId`
1. No duplicate public keys in ACL of `sponsoredChainId`

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
