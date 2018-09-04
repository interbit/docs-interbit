#!/bin/bash

# Post-build cleanup
if [ -d "_book" ]; then
  echo -e "\033[34mPerforming post-build cleanup...\033[0m"
  cd _book
  rm Gemfile Gemfile.lock Makefile Rakefile  make.sh api.sh cleanup.sh
  rm -f npm-debug.log package.json package-lock.json conf.jsdoc
  rm index.js local.js app.json README.md .gitignore
  rm -rf vendor _interbit apiadoc
else
  echo -e "\033[1m\033[31m*** Looks like the doc build failed!\033[0m"
fi
