const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '996iie',
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,
  pageLoadTimeout: 15000, //Tiempo máximo de espera de carga de cada página (global) → 9s
  defaultCommandTimeout:10000, //Tiempo máximo de espera de carga de cada elemento (global) → 10s
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
