# A Simple Interbit Platform 

This example demonstrates how one might create a simple Interbit platform. Our
platform has an accounts app (`packages/app-account`) which manages user 
identities, and a second app (`packages/interbit-template`) that connects with 
the accounts app. The [template app](template.md) is a starting point to 
create your own Interbit applications. We also use `packages/platform-deploy` 
and `packages/web-auth-endpoint` to run nodes that host our accounts, 
templates, and GitHub authentication chains.

We go over our platform architecture, describe how each package is 
configured, and demonstrate how to set up and run this example locally. We 
also give a walk-through of the accounts and template apps by showing how 
users create an Interbit account by authenticating via GitHub, and how they 
can authorize the template app chain to join their accounts chain. 

- [Platform Structure](platform-structure.md)
- [Running the Example Locally](run-example.md)
- [User Walk-Through](user-walk-through.md)
