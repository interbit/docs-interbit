# PPC Control

> Status: incomplete <br>
> Dependencies: [`interbit covenant tools`](link-to-spec), [`root covenant`](link-to-spec), [`manifest selectors`](link-to-spec)
> Callers: [`oAuth covenant`](./github-kyc.md)
> Join consumers: [`public`](./public.md)

## Purpose

This covenant is the Control part of the Public/Private/Control pattern. It extends the `root covenant` and implements additional features required for:

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
| none             |                                                           |

### Joins

#### providing

| Path                                                  | consumer             |
|:-                                                     |:-                    |
| `privateChainHosting`/`shared`/_[privateChainAlias]_  | _[publicChainAlias]_ |

### Actions

* [`SET_MANIFEST`](#a-set_manifest)
* [`ADD_KEY_TO_SPONSORED_CHAIN`](#b-add_key_to_sponsored_chain)

### a. `SET_MANIFEST`

The `root covenant` `SET_MANIFEST` action is called after system startup and to deploy covenant updates. This action provides the current covenant hash and is used to set-up the chain sponsorship configuration required to create new user profile chains.

#### payload

* `manifest` Fully resolved system manifest including mapping of covenent aliases to covenenant hashes. Manifest selector provides covenant hash for _[PrivateChainCovenantAlias]_.

#### state change

`privateChainHosting`/`shared`/_[privateChainAlias]_: Object containing

* `blockMaster` The block master public key for new user profile chains
* `sponsorChainId` This chain's ID
* `covenantHash` Covenant hash for _[privateChainCovenantAlias]_

#### side effect calls

none

### errors

none

### tests

1. `privateChainHosting` is updated
1. Value of `blockmaster` is the current chain's `blockmaster`
1. Value of `sponsorChainId` is the current chain's `chainId`
1. Value of `covenentHash` is the covenent hash associated with the private chain alias
1. `privateChainHosting` is updated in the corresponding public chain

### b. `ADD_KEY_TO_SPONSORED_CHAIN`

Called from `oAuth covenent` when user completes authentication from a 2nd device, to add the public key for the new device to the private chain ACL.

#### payload

* `sponsoredChainId` The chainId of a private child chain
* `role` The ACL role to authorize. For oAuth the role will be _[oAuth provider]_-_[user Id]_ and is unique for each provider / user combination.
* `authorizedActions` The action to authorize or `*` for all.
* `publicKey` The public key to authorize

#### state change

none

#### side effect calls

Remote redispatch `ADD_TO_ACL` to child chain

### errors

* `not sponsored`: when `sponsoredChainId` is not a child of this chain
* `unauthorized`: when Control chain does not have `root` access to `sponsoredChainId`

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
