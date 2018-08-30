# `interbit-template` Public Covenant
> Status: incomplete

## Purpose

This covenant is the _Public_ part of the _Public/Private/Control (PPC)_ pattern. It is read-only and provides publicly visible state to all users and applications that need to authenticate and interact with other chains in the PPC pattern.

## Interface

### State slices

| State slice            | Source (joins)                    | Usage |
|:-                      |:-                                 |:-     |
| `interbitServices`/`shared`/`accounts`     | `interbit-template` control chain | | Configuration for cAuth flow |
| `privateChainhosting`  | `interbit-template` control chain | Configuration required to create a genesis block for a new private chain, including `blockMaster`, `sponsorChainId` and `covenantHash` |


### Selectors
None

### Joins

#### Consume

| Name                | Provider                          | Mount path |
|:-                   |:-                                 |:-          |
| `INTERBIT_SERVICES` | `interbit-template` control chain | `interbitServices` |
| `HOSTING_SPONSOR`   | `interbit-template` control chain | `privateChainHosting`/`shared` |

### Actions
None