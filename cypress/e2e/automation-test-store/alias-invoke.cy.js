describe("Alias and invoke", ()=>{

    it("Validate a specific hair product", () =>{
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path"]').contains("Hair Care").click()
        cy.get('.fixed .prdocutname').eq(1).invoke('text').as('productName')
        cy.get('@productName').its('length').should('be.gt',5)
        cy.get('@productName').should('include','Eau Parfumee au The Vert Shampoo')
        
    })

})