import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I access the Webdriver Universtiy login page', () => {
    cy.visit('http://www.webdriveruniversity.com/Login-Portal/index.html?')

})

When('I enter a username {string}', (username) => {
    cy.get('#text').type(username)

})

And('I enter password {string}',(password)=>{
    cy.get('#password').type(password)
})

And('I click on login button',()=>{
    cy.get('#login-button').click()
})

Then('I check for validation successful message',()=>{

    cy.on('window:alert', (str) => {
        expect(str).to.contain('validation succeeded')

    })
})
