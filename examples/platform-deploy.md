Table of contents:
- What we're doing 
  - creating an Interbit "platform" with user account creation and one other app that joins to the user account
  - aka github oauth and chain-auth
  - architecture map
    - platform-deploy hypervisor hosts account and template public and control chains, and user private accounts chains
    - web-auth-endpoint hosts github oauth chain and account private chain
    - platform-deploy and web-auth-endpoint are peers
    - interbit configuration files and generated manifest
- set up and running the apps locally
  - creating github app
  - generating keys
  - building interbit modules, running the nodes, and starting the apps 
- walk through of the apps and demonstration of how it works (from the browser UI)
  - creating an account on the account app
  - cauth loop from the template app
    - see that the account app chain and template chain are joined


# A Simple Interbit Platform 

This example demonstrates how one might create a simple Interbit platform. Our platform has an accounts app (`packages/app-account`) which manages user identities, and a second app (`packages/interbit-template`) that connects with the accounts app. The [template app](template.md) is a starting point to create your own Interbit applications. We also use `packages/platform-deploy` and `packages/web-auth-endpoint` to run nodes that host our accounts, templates, and GitHub authentication chains.

We go over our platform architecture, describe how each package is configured, and demonstrate how to set up and run this example locally. We also give a walk-through of the accounts and template apps by showing how users create an Interbit account by authenticating via GitHub, and how they can authorize the template app chain to join their accoutns chain. 

TODO: add links to the sub pages here


# Platform structure

Our platform has two server nodes. One runs the `platform-deploy` hypervisor and the other runs the `web-auth-endpoint` hypervisor. We also have two browser nodes - one for the accounts app and another for the template app. These nodes run the React apps in the browser.

The `platform-deploy` node hosts the accounts and template chains, acting as the server for the two apps. It is the blockmaster and thus is responsible for adding new blocks to the application chains. Note that there is no requirement for the accounts and template chains to be hosted on the same node. They could be hosted on separate nodes and moreover each app's chains could be hosted on multiple nodes for redundancy. (FIXME: Should we mention that this hasn't been implemented yet?) (TODO: add link to template doc and chain sponsorship doc, if there is one)

The `web-auth-endpoint` node hosts the accounts app chains, which includes a GitHub chain. It also hosts an Express instance that fields the http requests coming from GitHub during an OAuth loop. 

These two server nodes are peers. During the GitHub OAuth loop, OAuth requests from the GitHub are received by the Express instance. An action is dispatched to the GitHub chain on the `web-auth-endpoint` hypervisor which then passes it along to the `platform-deploy` hypervisor. The `app-account` control chain sees the new action and makes a new block on the user's private account chain. This new block is then propagated throughout the network and is updated on the `web-auth-endpoint` node. 


## Server nodes' configuration 

When the `platform-deploy` package is built, it:
- generates a config file by merging the config files at `packages/app-account/interbit.config.js` and `packages/interbit-template/interbit.config.js`. These files specifiy peer nodes, static chains, and chain join configurations. See the [Template App Walk-through](template.adoc) for a detailed explanation of the template app's chain architecture and 
- generates a manifest file at `packages/platform-deploy/platform/interbit.manifest.json`. See [Interbit CLI Manifest](../reference/interbit-cli/manifest.adoc).
- creates hashed covenant files for the accounts and template app covenants. See [Covenants](../key-concepts/covenants.adoc).

The `web-auth-endpoint` config file is the same as the `app-account` config file. 

Both apps and their chains specifiy `platform-deploy` as a peer node. The accounts app and its chains also specificy `web-auth-endpoint` as a peer. 


# Running the platform example locally

## Setup

### Create a GitHub development application for the `account-app` OAuth process

At this time, the accounts app supports account creation and authentication via GitHub only. In order to demonstrate the GitHub OAuth loop, you need to create a new OAuth app and configure it to connect to the `web-auth-endpoint` node.

1. Log into [github.com](https://github.com) and navigate to Settings > 
Developer settings. 
1. Under OAuth Apps, create a new OAuth App and give it any application name, 
e.g. Interbit Test App
1. The Authorization callback URL is `http://localhost:8888/oauth/github`
1. Click the Register Application button. Leave this browser tab open as we will copy values from here in the steps below.

### Generate a set of private and public keys for `platform-deploy` and `web-auth-endpoint`

1. Open a terminal and install `interbit-cli` with
```
npm i -g interbit-cli
```
1. Generate an Interbit key pair for `platform-deploy` and `web-auth-endpoint`, respectively, with
```
interbit keys --filename platform-deploy-keys.json
interbit keys --filename web-auth-endpoint-keys.json
```
This will create two new files at the root of the Interbit repository with your public and private key pairs. 
TODO: verify that this works. Right now, this command throws an error

### Set up environment variables for `platform deploy`
- setting up environment variables to connect to the server nodes and github oauth app

1. Create a `/secrets` directory at the root of the Interbit repository. This 
directory is ignored by .git. 
1. Create a `/secrets/platform-deploy.sh` file with the following content
```bash
#!/bin/bash
# Secrets for accounts app GitHub OAuth chain
export GITHUB_CLIENT_ID=""
export GITHUB_CLIENT_SECRET=""
export GITHUB_REDIRECT_URL=""
export OAUTH_CALLBACK_URL="http://localhost:3025/account/oauth/gitHub"
# Key pair for the platform node
export PUBLIC_KEY=""
export PRIVATE_KEY=""
# Peer list override
export PORT=5025
export CONNECT_TO_PEERS="localhost:8888"
```
1. Copy the `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, and 
`GITHUB_REDIRECT_URL` 
values from the GitHub OAuth app you just created. 
1. The `PUBLIC_KEY` and `PRIVATE_KEY` values come from `platform-deploy-keys.json`. 

### Set up environment variables for `web-auth-endpoint`

1. Create a `/secrets/web-auth-endpoint.sh` file with the following content. 
```
#!/bin/bash
# Secrets for Accounts App GitHub OAuth chain
export GITHUB_CLIENT_ID=""
export GITHUB_CLIENT_SECRET=""
# Key pair for the web auth node
export PUBLIC_KEY=""
export PRIVATE_KEY=""
# Peer list override
export PORT=8888
export CONNECT_TO_PEERS="localhost:5025"
```
1. The `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` are the same as in your 
`secrets/platform-deploy.sh` file.
1. The `PUBLIC_KEY` and `PRIVATE_KEY` values come from `web-auth-endpoint-key.json`.


## Spinning up the platform 

### Build and start the `platform-deploy` node

1. Delete the existing manifest file, `packages/platform-deploy/platform/interbit.manifest.json`. This file must be deleted when new Interbit key pairs are generated. If there is a pre-existing manifest, the genesis blocks will not be overwritten and our new keys will not work. Note that when we generate a new manifest, we create new genesis blocks which results in new chain IDs (which are hashes of the genesis blocks). 

1. Open a terminal shell and run the following commands from the `interbit`
repo's root:
```
npm i
npm run build:modules
. platform-deploy.sh
cd packages/platform-deploy
npm start
```

We have created a new manifest file with the newly generated keys and started a server node. The node is now listening for incoming connections from the `web-auth-endpoint` server node and the `app-account` and `interbit-template` browser nodes. Leave this terminal shell open. 


### Start the `web-auth-endpoint` hypervisor on a node

Open a new terminal shell and run the following commands from the `interbit` repo's root: 
```
. /secrets/web-auth-endpoint.sh
cd packages/web-auth-endpoint
npm start
```

### Start the app-account and interbit-template apps

In a third terminal, run the following from the `interbit` repo root
```
cd packages/app-account
npm start
```

And, in a fourth terminal 
```
cd packages/interbit-template
npm start
```

We've now started the browser nodes for the accounts and template apps. Your browser should open a tab at `http://localhost:3025` with the accounts app and at `http://localhost:3000` with the template app. 

In the following section, we go over the user flow for creating an account by authenticating with GitHub, and how to authorize another app to connect to to your account chain.


## Creating an account and going through the GitHub OAuth loop




