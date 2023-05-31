describe("Challenge 2 : Alias and invoke", ()=>{

    it.only("Validate total number of products in home page", () =>{
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length',16)
       
    })

    it("Validate total add to cart title in home page", () =>{
        cy.visit("https://automationteststore.com/")
        cy.get('.productcart').invoke('attr','title').as('addToCart')
        cy.get('@addToCart').should('contain','Add to Cart')
    })

})