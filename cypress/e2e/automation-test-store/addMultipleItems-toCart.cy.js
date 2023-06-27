///<reference types="Cypress" />

describe("Add multiple products to cart", ()=>{

    before(()=>{
        cy.fixture("products").then(function(data){
            //this.data= data
            globalThis.data=data
        })
    })

    beforeEach(()=>{
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path"]').contains("Hair Care").click()
    })

    it("Adding specific items to basket", () =>{
        globalThis.data.productName.forEach(function(element){
            cy.addProductsToCart(element)
        })
      
        cy.get('.dropdown-toggle > .fa').click()
    })

})