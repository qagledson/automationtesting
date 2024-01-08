const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
      // implemente os ouvintes de eventos do Node aqui
    },
    baseUrl: "https://demo.automationtesting.in/",
    video: true
  },
});
