

describe("Test contact us from via WebdriverUniversity", ()=>{

    it("Should be able to submit successfull submission via contact us form", () =>{
        cy.visit("http://www.webdriveruniversity.com")  
        cy.get("#contact-us").invoke('removeAttr','target').click({force:true})
        cy.get('[name="first_name"]').type("TestAutomation")
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type("Lasun")
        cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it("Should not be able to submit successfull submission via contact us form all fields required", () =>{
        cy.visit("http://www.webdriveruniversity.com")  
        cy.get("#contact-us").invoke('removeAttr','target').click({force:true})
        cy.get('[name="first_name"]').type("TestAutomation")
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type("Lasun")
        // cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain','Error')
    })

})