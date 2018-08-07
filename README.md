# Interbit SDK Documentation

This repo contains documentation for the Interbit SDK.

It is implemented with GitBook, and has source files in Markdown and
Asciidoc formats.


## Installation

Run the following commands in a terminal window to install the Interbit
documentation, and the dependencies required to generate HTML:

1.  **Clone the repository**

    ```sh
    git clone git@github.com:interbit/docs-interbit.git
    ```

1.  **Change the current directory**

    ```sh
    cd docs-interbit
    ```

1.  **Install Node.js dependencies**

    ```sh
    npm install
    ```

1.  **Install Ruby dependencies**

    ```sh
    bundle install
    ```

    > Note: If you do not have Ruby's Bundler gem installed, `bundle
    > install` will fail. To install Bundler, run `sudo gem install
    > bundler`, then re-run `bundle install`.


## Generate HTML

To generate the HTML, run:

```sh
./make.sh
```

GitBook, by default, generates a static website for the book. Generation
depends on fresh copies of several plugins and theme packages, and there
is some minor post-generation cleanup required. The `make.sh` script
performs all of that work for you.
