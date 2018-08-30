const { validateConfig } = require('interbit')
const config = require('./interbit.config.js')

try {
  if (validateConfig(config)) {
    // It's valid! :D
  }
} catch (e) {
  // It is not valid :(
  console.warn(e)
}
