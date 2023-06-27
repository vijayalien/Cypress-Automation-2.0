// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("selectProduct", productNameNew =>{
    cy.get('.fixed .prdocutname').each(($el, index)=>{
        const productName= $el.text()
        if(productName == productNameNew){
            cy.wrap($el).click()
            cy.log("Clicked on : " +productName+" and index is : "+index)
        }else{
            cy.log("Finding product")
        }
        
    })
})

Cypress.Commands.add("addProductsToCart", productNameNew =>{
    cy.get('.fixed .prdocutname').each(($el, index)=>{
        const productName= $el.text()
        if(productName === productNameNew){
           cy.get('.productcart').eq(index).click()
        }else{
            cy.log("Finding product")
        }
        
    })
})


Cypress.Commands.add("webdriverUni_contactUsForm", (firstname,lastname,email,feedback,$selector,finalText) =>{
    cy.get('[name="first_name"]').type(firstname)
    cy.get('[name="first_name"]').should('have.attr','name','first_name')
    cy.get('[name="last_name"]').type(lastname)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(feedback)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(finalText)
})

///<reference types="Cypress" />
import 'cypress-file-upload';