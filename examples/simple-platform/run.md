# Running the Platform Example Locally

## Setup

### Create a GitHub development application for the `account-app` OAuth process

At this time, the accounts app supports account creation and authentication 
via GitHub only. In order to run a user authentication loop, you need to 
create a new GitHub OAuth app and configure it to connect to the 
`web-auth-endpoint` node.

1. Log into [github.com](https://github.com) and navigate to Settings > 
Developer settings. 
1. Under OAuth Apps, create a new OAuth App and give it any application name, 
e.g. Interbit Test App.
1. The Authorization callback URL is `http://localhost:8888/oauth/github`.
1. Click the Register Application button. Leave this browser tab open as we 
will copy values from here in the steps below.

### Generate a set of private and public keys for `platform-deploy` and `web-auth-endpoint`

1. Open a terminal and install `interbit-cli` with
```
npm i -g interbit-cli
```
1. Generate an Interbit key pair for `platform-deploy` and `web-auth-endpoint`, 
respectively, with
```
interbit keys --filename platform-deploy-keys.json
interbit keys --filename web-auth-endpoint-keys.json
```
This will create two new files at the root of the Interbit repository with 
your public and private key pairs. 

### Set up environment variables for `platform deploy`

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
1. The `PUBLIC_KEY` and `PRIVATE_KEY` values come from 
`platform-deploy-keys.json`. 

### Set up environment variables for `web-auth-endpoint`

1. Create a `/secrets/web-auth-endpoint.sh` file with the following content. 
```bash
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
1. The `PUBLIC_KEY` and `PRIVATE_KEY` values come from 
`web-auth-endpoint-key.json`.

## Spinning up the platform 

### Build and start the `platform-deploy` node

1. Delete the existing manifest file, 
`packages/platform-deploy/platform/interbit.manifest.json`. This file must be 
deleted when new Interbit key pairs are generated (as we did in our setup). If 
there is a pre-existing manifest, the genesis blocks will not be overwritten 
and our new keys will not work. Note that when we generate a new manifest, we 
create new genesis blocks which results in new chain IDs (which are hashes of 
the genesis blocks). 

1. Open a terminal shell and run the following commands from the `interbit`
repo's root:
```
npm i
. platform-deploy.sh
cd packages/platform-deploy
npm start
```

Our package script runs a post-install step which builds all the modules in 
the Interbit repo. The build step for `platform-deploy` creates a new manifest 
file using the newly generated keys and hashed covenant files. The build step 
also updates the chain IDs for the other modules, including `app-account` and 
`interbit-template`. 

The `start` command spins up the `platform-deploy` node, which listens for 
incoming connections from the `web-auth-endpoint` node and the 
`app-account` and `interbit-template` browser nodes. 

Leave this terminal shell open. 

### Start the `web-auth-endpoint` hypervisor on a node

Open a new terminal shell and run the following commands from the `interbit` 
repo's root: 
```
. /secrets/web-auth-endpoint.sh
cd packages/web-auth-endpoint
npm start
```
Again, leave this shell open. 

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

We've now started the webpack development servers which serve our React apps. 
Your browser should open a tab at `http://localhost:3025` with the accounts 
app and at `http://localhost:3000` with the template app. When these tabs
open, the React apps will boot Interbit nodes to connect to the 
`platform-deploy` and `web-auth-endpoint` peer nodes running in the other 
terminal windows. 

In the [next section](user-walk-through.md),  we go over the user flow for 
creating an account by authenticating with GitHub, and how to authorize 
another app to connect to your account chain.
