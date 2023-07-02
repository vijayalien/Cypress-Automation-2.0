

describe("Test contact us from via WebdriverUniversity", ()=>{

    beforeEach(()=>{
        cy.navigateToWebdriverUniUrl()
        cy.navigateToWebdriverUniCertainPage('#contact-us')

    })

    it("Should be able to submit successfull submission via contact us form", () =>{
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