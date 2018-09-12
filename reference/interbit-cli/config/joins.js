staticChains: {
  hub: {
    covenant: 'hub',
    childChains: ['spoke1']
    config: {
      validators: [process.env.PUBKEY_1, process.env.PUBKEY_2],
      joins: {
        consume: [],
        provide: [],
        receiveActionFrom: [
          {
            alias: 'spoke',
            authorizedActions: ['DO_A_HUB_THING']
          }
        ],
        sendActionTo: [
          { alias: 'spoke1' }
        ]
      }
    },
  },
  spoke1: {
    covenant: 'spoke',
    parentChain: 'hub',
    config: {
      validators: [process.env.PUBKEY_3, process.env.PUBKEY_4],
      joins: {
        consume: [],
        provide: [],
        receiveActionFrom: [
          {
            alias: 'hub',
            authorizedActions: ['DO_A_SPOKE_THING']
          }
        ],
        sendActionTo: [
          { alias: 'hub' }
        ]
      }
    }
  }
},
