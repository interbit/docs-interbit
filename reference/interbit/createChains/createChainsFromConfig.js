const { createChains: { createChainsFromConfig } } = require('interbit')

const { chainManifest, covenantHashes } = await createChainsFromConfig(cli, manifest)
