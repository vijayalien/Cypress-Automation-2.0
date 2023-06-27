describe("Iteration over elements", ()=>{

    beforeEach(function(){
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path"]').contains("Hair Care").click()

    })

    it("Logging all the elements using iteration", () =>{
        
        cy.get('.fixed .prdocutname').each(($el, index)=>{
            const productName= $el.text()
            cy.log("Product name is : " +productName+" and index is : "+index)
        })
        
    })

    it("Click and adding products to cart using iteration",()=>{
       cy.selectProduct('Eau Parfumee au The Vert Shampoo')

    })

    it("Click and adding another products to cart using iteration",()=>{
      cy.selectProduct('Seaweed Conditioner')
    })

    it("Click and adding Curls to straight Shampoo to cart using iteration",()=>{
        cy.selectProduct('Curls to straight Shampoo')
      })
    
})