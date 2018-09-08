const path = require('path')

const config = {
  peers: ['localhost:5000', 'localhost:5050'],
  adminValidators: [process.env.ADMIN_KEY_1, process.env.ADMIN_KEY_2],
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
        validators: [process.env.PUBKEY_3, process.env.PUBKEY_4],
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
    hub: { location: path.join(__dirname, 'hub') },
    spoke: { location: path.join(__dirname, 'spoke') }
  },
  apps: {
    appName: {
      peers: ['someotherhost'],
      chains: ['hub', 'spoke1'],
      indexLocation: path.join(__dirname, 'public/index.html'),
    }
  }
}

module.exports = config
