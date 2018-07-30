# User Walk-through of the Platform Example

## Creating an account and going through the GitHub OAuth loop

Open the accounts app in your browser at `http://localhost:3025`. If you open 
your browser's developer tools to the Console tab, you can see some 
`interbit-middleware` commands being printed. The accounts app is fully up and 
running once you see the `interbit-middleware/CHAIN_BLOCKING` status for the 
`accountsPrivate` chain. This may take up to a minute. 

From the main accounts app page, click on the "Create Account / Sign in" link 
in the header, which navigates you to the `create-account` page. Click the 
"Create Account" button, check that you have read the disclaimer and click 
"Continue" in the modal.

If you're already signed into your GitHub account, you will be directed to the 
your personal account page. Otherwise, you will be redirected to GitHub and 
prompted to enter your GitHub credentials. Enter your credentials and sign in. 
You should be redirected back to the accounts app. 

You will see a number of chain actions being dispatched in the console. 
Specifically, after the action type 
`app-account-my-account/COMPLETE_AUTHENTICATION` is dispatched, the 
`chainState.profile` property is updated with your GitHub identity 
information. You can also verify that the OAuth loop was successful if you see 
your GitHub username appear in the header. 

Congratulations, you have now created an Interbit account. You can make 
changes to your personal account information and see how the chain blocks with 
every change. The Block Explorer page has a handy user interface for viewing 
the blocks and the private account chain's state. 

## Allowing another application to connect to your private account chain

Now that we've created a user account on the accounts app, we'll authorize the 
`interbit-template` app.

Open the template app in your browser at `http://localhost:3000`. You should 
see the console print out `interbit-middleware/CHAIN_BLOCKING` for the 
`templatePrivate` chain. You'll also see a printout of the chain state on the 
template app's `/chains` page. 

We'll now make a chain authorization request from the template app to the 
account app. Click the "Connect to Profile" link in the header to navigate to 
the `/cauth/request` page and click on the "Request cAuth" button. You will be 
redirected to the accounts app

FIXME: Add the rest of the walk-through here after the c-auth loop is fixed