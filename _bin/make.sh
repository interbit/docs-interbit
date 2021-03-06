#!/bin/bash

echo -e "\033[34mBuilding documentation, please wait...\033[0m"

# Make sure Ruby dependencies installed
bundle install || echo -e "\033[31mRuby dependencies failed to install; make sure Bundler is installed!\033[0m"

# Make sure that `gitbook` command is installed
if ! [[ -x "node_modules/.bin/gitbook" && -x "node_modules/.bin/jsdoc" ]]; then
  echo -e "\033[34mInstalling GitBook (and other node dependencies)...\033[0m"
  npm i
fi

# Install GitBook plugins, themes, etc.
echo -e "\033[34mInstalling GitBook plugins, themes, etc...\033[0m"
node_modules/.bin/gitbook install

# Capture source comments for select packages
echo -e "\033[34mCollecting API details...\033[0m"

rm -rf _interbit
git clone https://github.com/interbit/interbit.git _interbit
_bin/api.sh

# Build the book's HTML
echo -e "\033[34mBuilding the documentation...\033[0m"
node_modules/.bin/gitbook build

# Post-build cleanup
_bin/cleanup.sh

echo -e "\033[1m\033[34mDone!\033[0m"
