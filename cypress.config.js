const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    defaultCommandTimeout: 3000,
    pageLoadTimeout: 30000,
    videoUploadOnPasses: false,
    // projectId: "7r1w25",
    reporter: 'cypress-mochawesome-reporter',
    retries:2,
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Test Mochawesome Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    specPattern:['cypress/e2e/**/*.feature', 'cypress/e2e/**/*.cy.js'],
    setupNodeEvents(on, config) {

      //for cucumber 
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber())

      //for mochawesome reports
      require('cypress-mochawesome-reporter/plugin')(on);
    
      //for handling multiple config files
      const fs = require('fs-extra')
      const path = require('path')

      function getConfigurationByFile(file) {
        const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

        if (!fs.existsSync(pathToConfigFile)) {
          console.log("No config file found")
          return {}
        }
        return fs.readJson(pathToConfigFile)
      }
      const file = config.env.configFile 
      return getConfigurationByFile(file)

    },
    // reporter: 'cypress-multi-reporters',
    // reporterOptions: {
    //   configFile: 'reporter-config.json',
    // },
    // reporter: 'mochawesome',
    // reporterOptions: {
    //   reportDir: 'cypress/results/mochawesome',
    //   overwrite: false,
    //   html: false,
    //   json: true,
    // },
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here

    // },
  },
  env: {
    webdriver_uniurl: "http://www.webdriveruniversity.com",
    first_name: "Cypress",
    last_name: "Automation",
    email: "cypressauto@test.com"
  }

});
