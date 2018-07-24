# Deploying an Interbit Platform

In the `packages/platform-deploy` directory, we demonstrate how to run 
multiple Interbit applications connected to a single back-end node. This 
example generates an Interbit manifest file and covenant files for the 
`packages/app-account` and `packages/interbit-template` applications. 
This is one part of getting a working authentication loop happening 
between Interbit applications. 

## Running `platform-deploy` locally

### Create a GitHub development application for the `account-app` OAuth process

1. Log into [github.com](https://github.com) and navigate to Settings > 
Developer settings. 
1. Under OAuth Apps, create a new OAuth App and give it any application name, 
e.g. Interbit Test App
1. The Authorization callback URL is http://localhost:8888/oauth/github
1. Click the Register Application button.

### Set up a secrets file with GitHub tokens and node keys

1. Create a `/secrets` directory at the root of the Interbit repository. This 
directory is ignored by .git. 
1. Create a `/secrets/platform-deploy.sh` file with the following content
```
#!/bin/bash
# Secrets for Accounts App GitHub OAuth chain
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
1. The `PUBLIC_KEY` and `PRIVATE_KEY` values make up the Interbit keypair for 
`platform-deploy`. A new keypair can be generated with the 
`interbit key --filename my-platform-keys.json` command.  

### Running `platform-deploy` locally, in dev-mode

1. Open a terminal shell and build the Interbit modules
```
npm i
npm run build:modules
```
1. Source the secretes file and generate the Interbit manifest file
```
. platform-deploy.sh
cd packages/platform-deploy
npm run build:dev
```
1. Deploy the platform with `npm start`
