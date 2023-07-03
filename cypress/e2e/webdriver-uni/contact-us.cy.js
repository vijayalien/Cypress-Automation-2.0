import homePage_PO from "../../support/pageObjects/webdrier-uni/homePage_PO"

describe("Test contact us from via WebdriverUniversity", ()=>{

    beforeEach(()=>{
        const homepage_PO = new homePage_PO()
        homepage_PO.visitHomePage()
        homepage_PO.validateHomePage()
        homepage_PO.clickOnCertainPage('#contact-us')

    })

    it("Should be able to submit successfull submission via contact us form", () =>{
        cy.get('[name="first_name"]').type("TestAutomation")
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type("Lasun")
        cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!2')
    })

    it("Should not be able to submit successfull submission via contact us form all fields required", () =>{
        cy.get('[name="first_name"]').type("TestAutomation")
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type("Lasun")
        // cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain','Error')
    })

})