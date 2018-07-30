# Platform structure

Our platform has two server nodes. One runs the `platform-deploy` hypervisor 
and the other runs the `web-auth-endpoint` hypervisor. We also have two 
browser nodes - one for the accounts app and another for the template app. 
These nodes run the React apps in the browser.

The `platform-deploy` node hosts the accounts and template chains, acting as 
the server for the two apps. It is the blockmaster and thus is responsible for 
adding new blocks to the application chains. Note that there is no requirement 
for the accounts and template chains to be hosted on the same node. They could 
be hosted on separate nodes and moreover each app's chains could be hosted on 
multiple nodes for redundancy. (FIXME: Should we mention that this has not 
been implemented yet?) 

The `web-auth-endpoint` node hosts the accounts app chains, which includes a 
GitHub chain. It also runs an Express instance that fields the http requests 
coming from GitHub during an OAuth loop. 

These two server nodes are peers. During the GitHub OAuth loop, OAuth requests 
from  GitHub are received by the Express instance. An action is dispatched to 
the GitHub chain on the `web-auth-endpoint` hypervisor which then passes it 
along to the `platform-deploy` hypervisor. The `app-account` control chain 
sees the new action and makes a new block on the user's private account chain. 
This new block is then propagated throughout the network and is updated on the 
`web-auth-endpoint` node. 

When the `platform-deploy` package is built, it:
- generates a config file by merging the config files at 
`packages/app-account/interbit.config.js` and 
`packages/interbit-template/interbit.config.js`. These files specify peer 
nodes, static chains, and chain join configurations. See the [Template App 
Walk-through](../template.adoc) for a detailed explanation of the template app's 
chain architecture and 
- generates a manifest file at 
`packages/platform-deploy/platform/interbit.manifest.json`. See 
[Interbit CLI Manifest](../../reference/interbit-cli/manifest.adoc).
- creates hashed covenant files for the accounts and template app covenants. 
See [Covenants](../../key-concepts/covenants.adoc).

The `web-auth-endpoint` config file is the same as the `app-account` config 
file. 

Both apps and their chains specify `platform-deploy` as a peer node. The 
accounts app and its chains also specify `web-auth-endpoint` as a peer. 