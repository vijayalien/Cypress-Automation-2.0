

describe("Test contact us from via WebdriverUniversity", () => {

    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    })

    it("Should be able to submit successfull submission via contact us form", () => {
        cy.get('[name="first_name"]').type(Cypress.env("first_name"))
        cy.get('[name="first_name"]').should('have.attr', 'name', 'first_name')
        cy.get('[name="last_name"]').type(Cypress.env("last_name"))
        cy.get('[name="email"]').type(Cypress.env("email"))
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it("Should not be able to submit successfull submission via contact us form all fields required", () => {
        cy.get('[name="first_name"]').type(Cypress.env("first_name"))
        cy.get('[name="first_name"]').should('have.attr', 'name', 'first_name')
        cy.get('[name="last_name"]').type(Cypress.env("last_name"))
        //cy.get('[name="email"]').type(Cypress.env("email"))
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain', 'Error')
    })

})