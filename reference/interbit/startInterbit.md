# `startInterbit()`

Starts a [hypervisor](/key-concepts/hypervisor.adoc) and CLI for hosting
Interbit blockchains then returns both.


## Arguments

None.


## Returns

An *(Object)* containing:

- cli: *(Object)*

  A CLI object, which can be used to interact with the Interbit node.

- hypervisor: *(Object)*

  A hypervisor object, which is used for hosting chains.


## Example

```js
const { startInterbit } = require('interbit')
const { cli, hypervisor } = await startInterbit()
```
