# User Authentication with GitHub (web-auth-endpoint) 

The `packages/web-auth-endpoint` package provides an example of how to 
authenticate a user via GitHub in the accounts application 
(`packages/app-account`). This example works in concert with 
[Platform Deploy](platform-deploy.md) and the accounts app.


## Running `web-auth-endpoint` locally

1. Set up and run the [Platform Deploy](platform-deploy.md) package locally. 
Leave this process running. 

### Set up a secrets file with GitHub tokens and node keys

1. Create a `/secrets/web-auth-endpoint.sh` file with the following content. 
Note that the `/secrets` directory is ignored by .git. 
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
1. The `PUBLIC_KEY` and `PRIVATE_KEY` values make up the Interbit key pair for 
`web-auth-endpoint`. A new key pair can be generated with the 
`interbit keys --filename my-web-auth-keys.json` command.  

### Run `web-auth-endpoint` locally

1. Open a new terminal shell and source your secrets file
```
. /secrets/web-auth-endpoint.sh
```
1. Run the package
```
cd packages/web-auth-endpoint
npm start
```

### Start the accounts app

1. Open another terminal shell and start the application.
```
cd packages/app-account
npm start
```

Your browser should open the accounts app in a new tab at 
`http://localhost:3025`. Here you can create a new Interbit account connected to 
your GitHub profile. 