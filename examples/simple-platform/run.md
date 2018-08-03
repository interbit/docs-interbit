# Run the Platform Example Locally

## Setup

### Create a GitHub development application for the Accounts app OAuth process

The Accounts app supports account creation and authentication via GitHub only.
In order to complete an OAuth flow with GitHub as the identity provider, you
need to create a new GitHub OAuth app and configure it to connect to the
`web-auth-endpoint` node.

1. Go to [github.com](https://github.com/) and log into your account.

1. Navigate to Settings > Developer Settings > OAuth Apps.

1. Click the **New OAuth App** button to create a new OAuth app and configure
it.

1. In the **Application name** field, give the app a name of your choosing,
e.g. `Interbit Test App`.

1. Fill in the **Homepage URL** field with any URL. Any URL will do since we
are running the example locally.

1. Fill in the **Authorization callback URL** field with
`http://localhost:8888/oauth/github`.

   Note: The callback URL is case sensitive and the port specified is for
running the `web-auth-endpoint` node locally.

1.  Click the **Register application** to finish creating the OAuth app.

1. Leave this browser tab open as we are going to copy values from this tab in
subsequent steps.


### Generate a set of private and public keys for the `platform-deploy` and `web-auth-endpoint` hypervisors

1. Open a terminal and install `interbit-cli` with:

    ```sh
    npm i -g interbit-cli
    ```

1. From the root of the `interbit` repository, generate an Interbit key pair
for `platform-deploy` and `web-auth-endpoint`, respectively, with:

    ```sh
    interbit keys --filename platform-deploy-keys.json
    interbit keys --filename web-auth-endpoint-keys.json
    ```

  This creates two new files at the root of the Interbit repository with your
  public and private key pairs.


### Set up environment variables for `platform deploy`

1. Create a `secrets` directory at the root of the Interbit repository.

   The `secrets` directory is included in this repository's `.gitignore` file
and is not tracked by git. We don't want to commit the files we are going to
add here because they include private keys for our Interbit nodes.

1. Change the current working directory to the `secrets` directory:

    ```sh
    cd secrets
    ```

1. Create the file `platform-deploy.sh` with the following content:

    ```bash
    #!/bin/bash
    # Secrets for Accounts app GitHub OAuth chain
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

1. Copy the values for the `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, and
`GITHUB_REDIRECT_URL` fields from the GitHub OAuth app you just created (in the
open browser tab), and paste them into the respective fields in the
`platform-deploy.sh` file.

1. Copy the values for the `PUBLIC_KEY` and `PRIVATE_KEY` fields from the
`platform-deploy-keys.json` file, and paste them into the respective fields in
the `platform-deploy.sh` file.


### Set up environment variables for `web-auth-endpoint`

1. Create the file `web-auth-endpoint.sh` with the following content:

    ```bash
    #!/bin/bash
    # Secrets for Accounts app GitHub OAuth chain
    export GITHUB_CLIENT_ID=""
    export GITHUB_CLIENT_SECRET=""
    # Key pair for the web auth node
    export PUBLIC_KEY=""
    export PRIVATE_KEY=""
    # Peer list override
    export PORT=8888
    export CONNECT_TO_PEERS="localhost:5025"
    ```

1. Copy the values for the `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` fields
from the GitHub OAuth app you just created. These values are the same as in
your `platform-deploy.sh` file.

1. Copy the values for the `PUBLIC_KEY` and `PRIVATE_KEY` fields from the
`web-auth-endpoint-keys.json` file, and paste them into the respective fields
in the `web-auth-endpoint.sh` file.


## Start the platform

### Build and start the `platform-deploy` node

1. Delete the existing manifest file,
`packages/platform-deploy/platform/interbit.manifest.json`.

   This file must be deleted when new Interbit key pairs are generated (as we
did in our setup). If there is a pre-existing manifest, the genesis blocks
will not be overwritten and our new keys will not work. Note that when we
generate a new manifest, we create new genesis blocks which results in new
chain IDs (which are hashes of the genesis blocks).

1. Open a terminal and run the following commands from the `interbit`
repo's root:

    ```sh
    npm i
    source secrets/platform-deploy.sh
    cd packages/platform-deploy
    npm start
    ```

    Our package script runs a post-install step which builds all of the
modules in the Interbit repo. The build step for `platform-deploy` creates a
new manifest file using the newly-generated keys and hashed covenant files.
The build step also updates the chain IDs for the other modules, including
`app-account` and `interbit-template`.

    The `start` command spins up the `platform-deploy` node, which listens for
incoming connections from the `web-auth-endpoint` node and the `app-account`
and `interbit-template` browser nodes.

    Leave this terminal open.


### Start the Web Auth Endpoint hypervisor on a node

1. Open a new terminal and run the following commands from the `interbit`
repo's root:

    ```sh
    source secrets/web-auth-endpoint.sh
    cd packages/web-auth-endpoint
    npm start
    ```

    Leave this terminal open.


### Start the Accounts and Template apps

1. In a new terminal (the third), run the following commands from the
`interbit` repo root:

    ```sh
    cd packages/app-account
    npm start
    ```

    Leave this terminal open.

1. In a new terminal (the fourth), run the following commands from the
`interbit` repo root:

    ```sh
    cd packages/interbit-template
    npm start
    ```

    Leave this terminal open.

We have now started the webpack development servers which serve our React apps.
Your browser should open a tab at `http://localhost:3025` with the Accounts
app and at `http://localhost:3000` with the Template app. When these tabs
open, the React apps boot Interbit nodes to connect to the
`platform-deploy` and `web-auth-endpoint` peer nodes running in the
terminals.

In the [next section](user-walk-through.md), we describe the user flow for
creating an account by authenticating with GitHub, and how to authorize
another app to connect to your account chain.
