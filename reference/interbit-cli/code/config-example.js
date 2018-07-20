const path = require('path')

const config = {
  peers: ['localhost:5000', 'localhost:5050'], // First peers to connect to
  adminValidators: [process.env.ADMIN_KEY_1, process.env.ADMIN_KEY_2], // Deployment pubkeys for the root node
  staticChains: { // Chain configuration
    hub: {
      covenant: 'hub',
      childChains: ['spoke1']
      config: {
        // The first validator listed is the blockMaster
        validators: [process.env.PUBKEY_1, process.env.PUBKEY_2],
        joins: {
          consume: [],
          provide: [],
          receiveActionFrom: [
            {
              alias: 'spoke',
              authorizedActions: ['DO_A_THING']
            }
          ],
          sendActionTo: [{ alias: 'spoke1' }]
        }
      },
    },
    spoke1: {
      covenant: 'spoke',
      parentChain: 'hub',
      config: {
        validators: [process.env.PUBKEY_3, process.env.PUBKEY_4, process.env.PUBKEY_5],
        joins: {
          consume: [],
          provide: [],
          receiveActionFrom: [
            {
              alias: 'hub',
              authorizedActions: ['DO_A_THING']
            }
          ],
          sendActionTo: [{ alias: 'hub' }]
        }
      }
    }
  },
  covenants: {
    hub: {
      location: path.join(__dirname, 'hub')
    },
    spoke: {
      location: path.join(__dirname, 'spoke')
    }
  },
  // Which index.html files to upgrade with chain information during start/build/deploy
  // One molecule may have several websites that it serves
  apps: {
    example: {
      peers: [], // the peers the browser should connect to
      chains: ['hub', 'spoke1'], // the chains that need to load in the browser
      indexLocation: path.join(__dirname, 'public/index.html'), // the index.html to update with the app info
    }
  }
}

module.exports = config
