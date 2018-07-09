#!/bin/bash

echo 'Building documentation, please wait... '

# Install and build gitbook
gitbook install
gitbook build
