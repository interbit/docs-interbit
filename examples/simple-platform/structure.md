# Platform structure

Our example has two React applications: `app-account` and `interbit-template`.
These apps are served in the user's browser, as any other React app would be.
Either there is a static bundle served in a production environment, or they
are served from their own webpack servers in development mode. Each React app
starts an Interbit node locally, in the browser. The platform also runs an
Interbit node each for the `platform-deploy` and `web-auth-endpoint`
hypervisors.

The `platform-deploy` node hosts the accounts and template chains. (See
[Chain Sponsorship](/reference/interbit-middleware/chainSponsorship.adoc)
for more information on hosting chains.)  It is the block master and thus is
responsible for adding new blocks to the application chains. There is no
requirement for the accounts and template chains to be hosted on the same node.
They could be hosted on separate nodes and each app's chains could be hosted on
multiple nodes for redundancy.

The `web-auth-endpoint` node hosts the Accounts app chains and a GitHub chain.
It also runs an Express instance that fields the HTTP requests coming from
GitHub during an OAuth flow.

These two nodes are peers. During the GitHub OAuth flow, OAuth requests from
GitHub are received by the Express instance. The Express instance uses the
Interbit CLI to dispatch an action to all peer nodes on the network, and each
node processes the action deterministically, thereby guaranteeing that the
chain state is the same on all nodes. The connection between nodes is managed
by both hypervisors.

When the `platform-deploy` package is built, it:
- Uses a config file that is a union of the config files at
`packages/app-account/interbit.config.js` and
`packages/interbit-template/interbit.config.js`. These files specify peer
nodes, static chains, and chain join configurations. See the [Template App
Walk-through](../template.adoc) for a detailed explanation of the template
app's chain architecture.
- Generates a manifest file at
`packages/platform-deploy/platform/interbit.manifest.json`. See
[Interbit CLI Manifest](../../reference/interbit-cli/manifest.adoc).
- Creates hashed covenant files for the Accounts and Template app covenants.
See [Covenants](../../key-concepts/covenants.adoc).

The `web-auth-endpoint` config file is the same as the `app-account` config
file.