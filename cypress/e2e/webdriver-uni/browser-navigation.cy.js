

describe("Test contact us from via WebdriverUniversity", ()=>{

    it("Should be able to submit successfull submission via contact us form", () =>{
        cy.visit("http://www.webdriveruniversity.com")  
        cy.get("#contact-us").invoke('removeAttr','target').click({force:true})
        cy.url().should('include','contactus')

        cy.go('back')
        cy.reload()
        cy.url().should('include','http://www.webdriveruniversity.com/')

        cy.go('forward')
        cy.url().should('include','contactus')

        cy.go('back')
        cy.get("#login-portal").invoke('removeAttr','target').click({force:true})
        cy.url().should('include','Login-Portal')
        cy.go('back')

        //Challenge

        cy.get("#to-do-list").invoke('removeAttr','target').click({force:true})
        cy.url().should('include','To-Do-List')

        cy.go('back')
    })


})