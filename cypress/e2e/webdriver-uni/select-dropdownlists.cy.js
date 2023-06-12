

describe("Handling dropdown lists in webdriver uni page", ()=>{

    it("Able to select dropdown lists", () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true}) 
        
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('maven')
        cy.get('#dropdowm-menu-3').select('javascript')
    })

    it.only("Challenge - able to select dropdown using text", () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true}) 
        
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value','maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    })

})