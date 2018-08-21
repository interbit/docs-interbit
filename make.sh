#!/bin/bash

echo 'Building documentation, please wait... '

# Make sure Ruby dependencies installed
bundle install || echo "Ruby dependencies failed to install; make sure Bundler is installed!"

# Clone the Interbit repo, so we can collect source comments.
rm -rf _interbit
git clone https://github.com/interbit/interbit.git _interbit

# Install and build gitbook
gitbook install
gitbook build

# Post-build cleanup
cd _book
rm Gemfile Gemfile.lock Makefile make.sh Rakefile
rm -f npm-debug.log package.json package-lock.json
rm index.js local.js app.json README.md .gitignore
rm -rf vendor _interbit
