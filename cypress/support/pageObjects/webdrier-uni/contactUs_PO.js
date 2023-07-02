class contactUs_PO {

    submitContactUsFormBasic() {
        cy.get('[name="first_name"]').type("TestAutomation")
        cy.get('[name="first_name"]').should('have.attr', 'name', 'first_name')
        cy.get('[name="last_name"]').type("Lasun")
        cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    }

    notsubmitContactUsFormBasic() {
        cy.get('[name="first_name"]').type("TestAutomation")
        cy.get('[name="first_name"]').should('have.attr', 'name', 'first_name')
        cy.get('[name="last_name"]').type("Lasun")
        // cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain', 'Error')
    }


    submitFormUsingCustomVariables(firstname,lastname,email,feedback,$selector,finalText) {
        cy.get('[name="first_name"]').type(firstname)
        cy.get('[name="first_name"]').should('have.attr', 'name', 'first_name')
        cy.get('[name="last_name"]').type(lastname)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(feedback)
        cy.get('[type="submit"]').click()
        cy.get($selector).contains(finalText,{timeout:70000})
    }

}

export default contactUs_PO