# A Simple Interbit Platform 

Before we dive into our Interbit platform example, let's take a step back and define the ecosystem of Interbit applications. We are concerned with two types of apps: Interbit platform apps and apps built on the platform. 

By platform apps, we mean apps intended to make Interbit app development easier by solving common problems such as user identity management, payment processing, and hosting. These apps make up the Interbit platform. They may not provide much value to the user on their own - after all, how useful is a payment processing app if there is nothing to pay for? However, they allow developers to concentrate their efforts on solving app-specific problems instead of reinventing the wheel. Apps of the second type of are those built by developers that use the functionality provided by the platform.

This example has one platform app, `packages/app-account`, which provides user authentication and identity management functionality. We also have a [template app](../template.adoc), `packages/interbit-template`. The app doesn't do much but is a starting point for creating your own Interbit applications. 

The goal of this exmaple is to demonstrate how to request and share user profile information from outside the accounts app. We configure the platform and template app so that a user grants read access to their private accounts chain from the template app. To get there, we also create a user account that is authenticated via GitHub. Specifically, we go over:

- the platform structure: configuration of the apps' chain joins and peers
- chain hosting for our apps and the GitHub OAuth loop with `packages/platform-deploy` and `packages/web-auth-endpoint`
- how to run the example locally
- a walk-through of the accounts and templates apps' user interface to create an account and authorize profile information sharing

The example is divided into the following documents:

- [Platform Structure](platform-structure.md)
- [Running the Example Locally](run-example.md)
- [User Walk-Through](user-walk-through.md)
