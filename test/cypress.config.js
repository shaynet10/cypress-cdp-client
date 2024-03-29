const { defineConfig } = require('cypress');
const { install } = require('../src/index');

module.exports = defineConfig({
  host: 'google.com',
  e2e: {
    testIsolation: false,

    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      install(on);
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
