# User Walk-through of the Platform Example

## Create an account and complete the OAuth flow with GitHub

1. Open the accounts app in your browser at `http://localhost:3025`.

1. Open the browser's developer tools to the console tab and verify that you
see the `interbit-middleware/CHAIN_BLOCKING` status logged to the console for
the `accountsPrivate` chain.

   The Interbit middleware prints a number of messages to the console so you
can see, for instance, when chains have loaded and actions have been
dispatched. The account app is fully up and running when you see the above
message. At this point, you can dispatch actions to your
private account chain.

1. Navigate to the `create-account` page by clicking on the **Create Account
/ Sign in** link in the header.

1. Create an authenticated user account by clicking the **Create Account**
button, checking that you have read the disclaimer, and clicking the
**Continue** button in the modal dialog.

1. Sign in to your GitHub account. If you're already logged into your GitHub
account, your personal account page is displayed. Otherwise, the GitHub
sign-in page appears. Enter your GitHub credentials and sign in to your
account. You should then be redirected back to the accounts app's personal
account page.

   You should see a number of chain actions being dispatched in the browser
console on the accounts app tab. Specifically, after the action type
`app-account-my-account/COMPLETE_AUTHENTICATION` is dispatched, the
`chainState.profile` property is updated with your GitHub identity
information. You can also verify that the OAuth flow was successful if you see
your GitHub username appear in the header.

   You have now created an Interbit account. You can make changes to your
personal account information and see how the new blocks are added to your
private account chain with each change.

1. Verify that your user account information is on the private chain. Navigate
to the **Block Explorer** page and expand the `profile` object property in the
`accountsPrivate` chain. If you have not made any changes to your user profile
information, you should see the that the `name` and `gitHub-identity`
properties have values and that your GitHub profile information is stored in
`gitHub-identity`.

1. Verify that your user account information is not yet shared with any other
apps by checking that the `shared` property in the `accountsPrivate` chain
state is empty.


## Allow the template app to connect to your private account chain

Now that we have created a user account on the accounts app, we can authorize
the `interbit-template` app to read your name and email from your private
accounts chain.

1. Open the template app in your browser at `http://localhost:3000`.

1. Open the browser console and verify that the `templatePrivate` chain is
blocking by looking for the `interbit-middleware/CHAIN_BLOCKING` message.

1. Verify that no data is shared on the `templatePrivate` chain. Navigate to
the **Block Explorer** page and check that the `sharedProfile` property in the
`templatePrivate` chain state is empty.

1. Make a chain authorization request from the template app to the account
app. Click the **Connect to Profile** link in the header to navigate to the
`/cauth/request` page and click the **Request cAuth** button. The browser
redirects you to the accounts app and you should see a the following message:
Service templatePrivate wants to access the following identity information.

   The `templatePrivate` chain is requesting a read join with the
`accountsPrivate` chain for the `name` and `email` profile fields. Joins can
be configured so only specific fields are shared.

1. Add any missing profile information that the template app is requesting. If
you haven't added an email address to your user profile, you will be prompted
to add one. Click the **Add email** link, enter your email address, and save.

   At this point, you can verify that the `accountsPrivate` chain has a new
block, and that the email address has been added to the profile.

1. Authorize the request for information by clicking the **Accept** button.
You will be redirected back to the template app and should see a message
stating "Complete the cAuth loop" with a profile identifier of the form
`PROFILE-****`.

1. Complete the chain authorization loop by clicking the **Complete cAuth**
button.

   Clicking the button dispatches an action to the `templatePrivate` chain and
updates the state with the shared profile information.

1. Verify that the `templatePrivate` chain state has the newly shared profile
information. Navigate to the **Block Explorer** and expand the `sharedProfile`
property. The `name` and `email` fields are populated with the values entered
from the accounts app.

   The `accountsPrivate` and `templatePrivate` chains are now joined. Any
updates to the user's name or email from the accounts app will be reflected in
the `templatePrivate` chain.

1. Verify the chain join on the `accountsPrivate` chain. From the
**Block Explorer** in the accounts app, expand the `shared` property and see
that there is an entry with the same profile identifier as in step 6.
