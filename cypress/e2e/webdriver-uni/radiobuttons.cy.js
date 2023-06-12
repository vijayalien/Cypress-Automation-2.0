

describe("Handling checkboxes and radiobutton in webdriver uni page", ()=>{

    it("Able to handle checkbox", () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true}) 
        
        //to select first radio button
        cy.get('input[type="radio"]').first().check().should('be.checked')

        //to select any radio button use the index with eq command
        cy.get('input[type="radio"]').eq(2).check().should('be.checked')
    })

})