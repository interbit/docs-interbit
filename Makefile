# The default target.
all: book clean

# Declare our phony targets.
.PHONY: book clean cleanup test spell includes debug

book: _book

_book:
	_bin/make.sh

clean:
	rm -rf _book

cleanup:
	node run clean

test: _book
	npm run test

spell:
	npm run spell

includes:
	npm run includes

debug:
	./node_modules/.bin/gitbook build --log=debug --debug
