#!/bin/bash

echo 'Building documentation, please wait... '

# Make sure that node dependencies installed
npm i

# Make sure Ruby dependencies installed
bundle install || echo "Ruby dependencies failed to install; make sure Bundler is installed!"

# Install and build gitbook
gitbook install
gitbook build

# Post-build cleanup
cd _book
rm Gemfile Gemfile.lock Makefile make.sh Rakefile
rm -f npm-debug.log package.json package-lock.json
rm index.js local.js app.json README.md .gitignore
rm -rf vendor
