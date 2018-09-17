# Run your new application

> To complete this section, make sure that you have already [created a
> new Interbit application](create.md).

In this section, we run both the Interbit blockchain node, and the
your application that connects to the node. This requires two terminal
windows.

1.  **Start the Interbit blockchain node:**

    In the first terminal window, run the following commands:

    ```sh
    cd interbit/packages/app-first
    npm run interbit:start
    ```

    > This command continues to run until interrupted. Your application
    > cannot run unless this command is running.

1.  **Start your application:**

    In the second terminal window, run the following commands:

    ```sh
    cd interbit/packages/app-first
    npm run start
    ```

    A new browser window opens to `http://localhost:3000/` and displays
    your application. Any updates made to the application while it is
    running automatically refreshes the browser view.

Congratulations! Your first Interbit application is now running.

For more details, see the [Template App
Walk-through](/examples/template.adoc).
