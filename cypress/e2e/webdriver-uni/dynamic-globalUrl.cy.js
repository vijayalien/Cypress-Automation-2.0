

describe("Test contact us from via WebdriverUniversity", ()=>{

    beforeEach(()=>{
        cy.visit(Cypress.env("webdriver_uniurl"))  
        cy.get('[name="first_name"]').type("TestAutomation")
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type("Lasun")
    })

    it("Should be able to submit successfull submission via contact us form", () =>{
        cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it.only("Should not be able to submit successfull submission via contact us form all fields required", () =>{
        // cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain','Error')
    })

})