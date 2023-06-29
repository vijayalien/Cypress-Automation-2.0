const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    defaultCommandTimeout: 3000,
    pageLoadTimeout : 30000,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
      
    // },
  },
  env:{
    webdriver_uniurl:"http://www.webdriveruniversity.com/Contact-Us/contactus.html",
    first_name: "Cypress",
    last_name:"Automation",
    email:"cypressauto@test.com"
  }
});
