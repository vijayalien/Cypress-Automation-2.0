

describe("Handling checkboxes and radiobutton in webdriver uni page", ()=>{

    beforeEach("Before Each function",()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true}) 

    })

    it("Able to handle checkbox", () =>{
        cy.get('#checkboxes > :nth-child(1) > input').as('option1')

        cy.get('@option1').check().should('be.checked')

        cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')
        
    })

    it("Select multiple checkboxes", () =>{        
        cy.get('input[type="checkbox"]').check().should('be.checked')
        
    })


})