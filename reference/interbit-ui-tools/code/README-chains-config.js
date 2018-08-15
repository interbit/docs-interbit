const config = {
  // ... other configuration ...
  apps: {
    myApp: {
      peers: [], // If no peers are specified then the middleware will use the default of localhost:5000
      chains: ['myChain'], // the chains that need to load in the browser
      indexLocation: path.join(__dirname, 'public/index.html'), // the index.html to update with the app info
      buildLocation: path.join(__dirname, 'build/') // the location of the finished build to update
    }
  }
}
