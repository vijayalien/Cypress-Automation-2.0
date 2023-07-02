describe("To check if document have specific property", ()=>{

    it("Check if document have utf-8 property", () =>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")  
        cy.document().should('have.property','charset').and('eq','UTF-8')    
        
    })

    it("Check if the title of the page", () =>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")  
        cy.title().should('include','WebDriver | Contact Us')
        
    })

    
    it("Check if the url of the page", () =>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")  
        cy.url().should('include',"Contact-Us/contactus.html")
        
    })

})