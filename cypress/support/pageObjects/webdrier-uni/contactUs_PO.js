class contactUs_PO{

    submitContactUsFormBasic(){
        cy.get('[name="first_name"]').type("TestAutomation")
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type("Lasun")
        cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    }

    notsubmitContactUsFormBasic(){
        cy.get('[name="first_name"]').type("TestAutomation")
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type("Lasun")
        // cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain','Error')
    }  

}

export default contactUs_PO