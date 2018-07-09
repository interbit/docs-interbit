#!/bin/bash

echo 'Building documentation, please wait... '

# Install Asciidoctor and dependencies
sudo gem install bundler
bundle install

# Install and build gitbook
gitbook install
gitbook build
