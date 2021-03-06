# Initializing a Node

There are two ways to initialize a node: by command line and by code.

If you are using the CLI or code it is recommended that you configure
your network using an [Interbit configuration
file](/reference/interbit-cli/config/README.adoc). This file enables you
to configure apps, peers, covenants, and chain joins all in one place.


## Version Requirements

To develop Interbit applications, your development environment will need
the following software:

* [Node.js](https://nodejs.org/) 8.6 or higher
* [NPM](https://nodejs.org/) 5.8 or higher


## Using the CLI

Once you have setup your configuration file to your liking you can use
the [`start`](/reference/interbit-cli/start.adoc) or
[`build`](/reference/interbit-cli/build.adoc) and
[`deploy`](/reference/interbit-cli/deploy.adoc) commands to start your
node.

First, install the CLI in your project if you have not already. If you
have followed the [Getting Started](/getting-started/README.md) guide
and used the template this package and the following scripts are already
configured with a corresponding `interbit.config.js` file.


### Install the package

```sh
npm i --save interbit-cli
```

This adds `interbit-cli` to your npm project's `package.json` file.

Once you have added the dependency, you need to setup the start, or
build and deploy scripts in your `package.json` scripts.


### Using the package

Inside of `package.json`:

```json
{
  "scripts": {
    "start": "interbit start --config interbit.config.js",
    "build": "interbit build --config interbit.config.js --manifest interbit.manifest.json",
    "deploy": "interbit deploy --manifest interbit.manifest.json"\
  }
}
```


## Using Interbit with Code

You can also run a node using the `interbit` package, which the cli uses
under the hood to make everything run. The `interbit` package contains
more granular functionality and can be more customized.


### Installing the package

You will need to install `interbit` in your dependencies list. If you
have forked and are using the template it is already included as a
dependency of `interbit-cli`

```sh
npm i --save interbit
```

### Using the Package

The package comes with a set of granular functions for starting a node
as well as a handy dandy [deploy](/reference/interbit-cli/deploy.adoc)
function that does all of the work of applying covenants, starting and
loading chains, and creating an interbit instance and cli to interact
with.

```js
const {
  startInterbit,
  createChains: {
    createChainsFromConfig,
    createChainsFromManifest
  }
} = require('interbit')

const { cli, hypervisor } = startInterbit()

// You can use the cli to create chains, deploy covenants, and configure them from here

// ... or, you can create a set of chains using a config or manifest file

const config = require('interbit.config.js')
const { chainManifest, covenantHashes } = await createChainsFromConfig(cli, config)

const manifest = require('interbit.manifest.json')
await createChainsFromManifest(process.cwd(), cli, manifest)

```

Please check out the
[`web-auth-endpoint`](https://github.com/interbit/interbit/blob/master/packages/web-auth-endpoint/src/node.js)
package for an example of deploying a node in code. Please note that
this package has used an
[`interbit.config.js`](/reference/interbit-cli/config/README.adoc)
configuration file to build a
[manifest](/reference/interbit-cli/manifest/README.adoc) file prior to
deploying the Interbit node.


Further Documentation:
- [start](/reference/interbit-cli/start.adoc)
- [build](/reference/interbit-cli/build.adoc)
- [deploy](/reference/interbit-cli/deploy.adoc)
- [interbit.config.js](/reference/interbit-cli/config/README.adoc)
- [interbit.manifest.json](/reference/interbit-cli/manifest/README.adoc)
- [deploy function](/reference/interbit/deploy.adoc)
- [createChains](/reference/interbit/createChains/README.adoc)
