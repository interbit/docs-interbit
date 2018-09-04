const { deploy} = require('interbit')

const cli = deploy({
  manifest: require('./manifestLocation/interbit.manifest.json'),
  port: 8888
})
