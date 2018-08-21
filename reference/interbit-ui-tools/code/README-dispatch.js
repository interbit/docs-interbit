const { chainDispatch } = require('interbit-ui-tools')
const blockchainAction = {
  type: '@@blockchain/ACT',
  payload: {
    data: 'meowmeowmeow'
  }
}

const reduxAction = chainDispatch('myChain', blockchainAction)

const blockchainPromise = store.dispatch(reduxAction)
