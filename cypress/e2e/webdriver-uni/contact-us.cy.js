

describe("Test contact us from via WebdriverUniversity", ()=>{

    it("Should be able to submit successfull submission via contact us form", () =>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us > .thumbnail > .section-title > h1').click()

        cy.get("#contact-us > .thumbnail >a").then((e) =>{
            let newUrl = e.prop('href')
            cy.visit(newUrl)
        })
            cy.url().should('include','http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.wait(5000)    
        cy.get('[name="first_name"]').type("TestAutomation")
        cy.get('[name="last_name"]').type("Lasun")
        cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('contain','Thank You')
    })

    it("Should not be able to submit successfull submission via contact us form all fields required", () =>{
        //cypress code
    })

})