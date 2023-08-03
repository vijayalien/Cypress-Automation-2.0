const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    defaultCommandTimeout: 3000,
    pageLoadTimeout: 30000,
    videoUploadOnPasses: false,
    projectId: "7r1w25",
    reporterEnabled: 'spec, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/results/junit/results-[hash].xml',
    },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
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
