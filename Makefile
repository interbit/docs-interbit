ASCIIDOCTOR := $(shell command -v asciidoctor 2> /dev/null)

# The default target.
all: setup book

# Declare our phony targets.
.PHONY: book clean test spell proof css js tidy debug _debug setup \
	setup_npm setup_gitbook setup_asciidoctor setup_javascript

# Install everything needed to start authoring in GitBook
setup: setup_npm setup_gitbook setup_asciidoctor

# NPM setup
setup_npm:
	npm i

# GitBook setup
setup_gitbook:
	./node_modules/.bin/gitbook install

# Asciidoctor setup
setup_asciidoctor:
	@echo "Checking for asciidoctor..."
ifndef ASCIIDOCTOR
	echo "Asciidoctor is required to build this documentation. Installing..."
	bundle install
endif
# Build the main artifacts.
book: clean _book tidy

_book:
	./node_modules/.bin/gitbook build

# Remove all built artifacts.
clean:
	rm -rf _book

# Remove artifacts that shouldn't be published.
tidy:
	rm -rf _book/Gemfile _book/Gemfile.lock _book/Makefile _book/_common _book/npm-debug.log _book/package.json _book/package-lock.json _book/index.js _book/local.js

# 'test' the artifacts
test: setup missed

# Check for unconverted topics in output folder; means they're missing
# from the TOC.
missed: _book
	@echo "Checking for topics missing from the TOC..."
	@find _book -name '*.adoc' | grep . && exit 1 || exit 0;

# Build the main artifacts with debugging output enabled.
debug: clean _debug tidy

_debug:
	./node_modules/.bin/gitbook build --log=debug --debug
