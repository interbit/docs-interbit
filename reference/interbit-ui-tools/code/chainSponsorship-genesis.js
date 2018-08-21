const genesisConfig = interbit.createDefaultSponsoredChainConfig({
  // The public key of the block master
  blockMaster,
  // The user's public key for adding to the ACL
  myPublicKey: publicKey,
  // The chain ID of the parent chain
  sponsorChainId
})

const genesisBlock = interbit.createGenesisBlock({
  config: genesisConfig,
  // Passing the covenant hash in config changes means
  // the covenant will be applied after chain creation
  configChanges: { covenantHash }
})

const chainId = genesisBlock.blockHash

await cli.sendChainToSponsor, {
  parentChainId: sponsorChainId,
  // These keys will be in the ACL of the new chain
  publicKeys: [publicKey, blockMaster],
  genesisBlock
})
