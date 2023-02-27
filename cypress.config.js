const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight:1080,
    viewportWidth:1920,
    specPattern: 'cypress/e2e/**/*.js',
    excludeSpecPattern:['**/1-getting-started/*','**/2-advanced-examples/*'],
    setupNodeEvents(on, config) {
      
    },
  },
});

