# The default target.
all: clean book cleanup

# Declare our phony targets.
.PHONY: api book clean cleanup debug includes spell test

book: _book

_book:
	_bin/make.sh

api:
	_bin/api.sh

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
