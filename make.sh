#!/bin/bash

echo 'Building documentation, please wait... '

# Make sure Ruby dependencies installed
bundle install || echo "Ruby dependencies failed to install; make sure Bundler is installed!"

# Make sure that `gitbook` command is installed
if ! [ -x "$(command -v gitbook)" ]; then
  echo "Installing GitBook (and other node dependencies)..."
  npm i
fi

# Install GitBook plugins, themes, etc.
echo "Installing GitBook plugins, themes, etc..."
gitbook install

# Build the book's HTML
echo "Building the documentation..."
gitbook build

# Post-build cleanup
if [ -d "_book" ]; then
  echo "Performing post-build cleanup..."
  cd _book
  rm Gemfile Gemfile.lock Makefile make.sh Rakefile
  rm -f npm-debug.log package.json package-lock.json
  rm index.js local.js app.json README.md .gitignore
  rm -rf vendor
else
  echo "*** Looks like the doc build failed!"
fi

echo "Done!"
