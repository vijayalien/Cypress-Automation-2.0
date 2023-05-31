describe("Iteration over elements", ()=>{

    it("Logging all the elements using iteration", () =>{
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path"]').contains("Hair Care").click()
        cy.get('.fixed .prdocutname').each(($el, index)=>{
            const productName= $el.text()
            cy.log("Product name is : " +productName+" and index is : "+index)
        })
        
    })

    it.only("Click and adding products to cart using iteration",()=>{
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path"]').contains("Hair Care").click()

        cy.get('.fixed .prdocutname').each(($el, index)=>{
            const productName= $el.text()
            if(productName == "Eau Parfumee au The Vert Shampoo"){
                cy.wrap($el).click()
                cy.log("Clicked on : " +productName+" and index is : "+index)
            }else{
                cy.log("Finding product")
            }
            
        })
    })

})