#!/bin/bash

# Post-build cleanup
if [[ -d "_book" ]]; then
  echo -e "\033[34mPerforming post-build cleanup...\033[0m"
  cd _book
  rm -f Gemfile Gemfile.lock Makefile Rakefile
  rm -f npm-debug.log package.json package-lock.json
  rm -f index.js local.js app.json README.md .gitignore
  rm -rf vendor _bin _interbit apiadoc
else
  echo -e "\033[1m\033[31m*** Looks like the doc build failed!\033[0m"
fi
