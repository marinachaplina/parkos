const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "projectId": "x8ku6z",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
});
