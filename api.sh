#!/bin/bash

# Capture source comments for select packages
APIDIR=_interbit/_API
rm -rf ${APIDIR}

PKGDIR=_interbit/packages
JSONDIR=${APIDIR}/json
ADOCDIR=apiadoc
rm -rf ${ADOCDIR}
mkdir -p ${JSONDIR}
mkdir ${ADOCDIR}

packages=(
  'interbit'
  'interbit-covenant-tools'
  'interbit-platform-tools'
  'interbit-ui-components'
  'interbit-ui-tools'
)
for pkg in ${packages[@]}; do
  echo "Processing package ${pkg}..."
  jsdoc -r -X -c conf.jsdoc ${PKGDIR}/${pkg} > ${JSONDIR}/${pkg}.json
  node_modules/gitbook-plugin-interbit/scripts/apijson2adoc.js -j ${JSONDIR}/${pkg}.json -d ${ADOCDIR} -p ${pkg}
done
