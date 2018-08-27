#!/bin/bash

echo -e "\033[34mBuilding documentation, please wait...\033[0m"

# Make sure Ruby dependencies installed
bundle install || echo -e "\033[31mRuby dependencies failed to install; make sure Bundler is installed!\033[0m"

# Make sure that `gitbook` command is installed
if ! [ -x "$(command -v gitbook)" ]; then
  echo -e "\033[34mInstalling GitBook (and other node dependencies)...\033[0m"
  npm i
fi

# Install GitBook plugins, themes, etc.
echo -e "\033[34mInstalling GitBook plugins, themes, etc...\033[0m"
gitbook install

# Capture source comments for select packages
echo -e "\033[34mCollecting API details...\033[0m"

rm -rf _interbit
git clone https://github.com/interbit/interbit.git _interbit
./api.sh

# Build the book's HTML
echo -e "\033[34mBuilding the documentation...\033[0m"
gitbook build

# Post-build cleanup
if [ -d "_book" ]; then
  echo -e "\033[34mPerforming post-build cleanup...\033[0m"
  cd _book
  rm Gemfile Gemfile.lock Makefile make.sh Rakefile
  rm -f npm-debug.log package.json package-lock.json conf.jsdoc
  rm index.js local.js app.json README.md .gitignore
  rm -rf vendor _interbit apiadoc
else
  echo -e "\033[1m\033[31m*** Looks like the doc build failed!\033[0m"
fi

echo -e "\033[1m\033[34mDone!\033[0m"
