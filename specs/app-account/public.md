# PPC Public

> Status: incomplete <br>

## Purpose

This covenant is the **Public** part of the **Public/Private/Control (PPC)** pattern. It is read-only and provides publicly visible state to all users and applications that need to authenticate and interact with other chains in the PPC pattern.

## Interface

### State slices

| State slice | Source (joins) | Usage |
|:-           |:-                  |:-     |
|`privateChainHosting`|`PPC Control`|configuration required to create a genesis block for a new private chain, including `blockMaster`, `sponsorChainId` and `covenantHash`
|`identityProviders`||public configuration for all identity providers, including OAuth and email providers
|`identityProviders`/`oauth`||configuration applications need for OAuth authentication
|`identityProviders`/`oauth`/_`provider`_|`OAuth Provider`|specific configuration for _`OAuth Provider`_ authentication

### Selectors

| Selector | Purpose |
|:-        |:-       |
|`getOAuthConfig`|all public OAuth configuration from all providers
|`getOAuthProviderConfig`|public configuration for a specific OAuth provider

### Joins

#### consume

| Name | Provider | Mount path |
|:-    |:-        |:-          |
| `HOSTING_SPONSOR` | `PPC Control` | `privateChainHosting` |
| `OAUTH-CONFIG-GITHUB` | `gitHub Provider` | `identityProviders`/`oauth`/`gitHub` |
| `OAUTH-CONFIG-`_`PROVIDER`_ | _`OAuth Provider`_ | `identityProviders`/`oauth`/_`oAuthProvider`_ |
