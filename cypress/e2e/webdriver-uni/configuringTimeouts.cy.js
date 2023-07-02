///<reference types="Cypress" />
import contactUs_PO from "../../support/pageObjects/webdrier-uni/contactUs_PO"
import homePage_PO from "../../support/pageObjects/webdrier-uni/homePage_PO"

describe("Test contact us from via WebdriverUniversity", () => {
    const homepage_PO = new homePage_PO()
    const contactus_PO = new contactUs_PO()

    beforeEach(() => {
        Cypress.config('defaultCommandTimeout',20000)
        homepage_PO.visitHomePage()
        homepage_PO.validateHomePage()
        cy.wait(5000)
        homepage_PO.clickOnCertainPage('#contact-us')
    })

    it("URL Timeouts",()=>{
        cy.visit(Cypress.env("webdriver_uniurl"),{timeout:50000})
    })

    it("Should be able to submit successfull submission via contact us form", () => {

        contactus_PO.submitFormUsingCustomVariables(Cypress.env("first_name"), Cypress.env("last_name"), Cypress.env("email"), "Testing new automation course", 'h1', 'Thank You for your Message!')
    })

    it("Should not be able to submit successfull submission via contact us form all fields required", () => {
        contactus_PO.submitFormUsingCustomVariables(Cypress.env("first_name"), Cypress.env("last_name"), " ", "Testing new automation course", 'body', 'Error')
    })

})