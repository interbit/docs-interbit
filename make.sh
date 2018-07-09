#!/bin/bash

echo 'Building documentation, please wait... '

# Install Asciidoctor and dependencies
bundle install

# Install and build gitbook
gitbook install
gitbook build
