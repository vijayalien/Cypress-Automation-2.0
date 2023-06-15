

describe("Handling iFrames & modal in webdriver uni page", ()=>{

    it("Able to handle iFrame and modal in webdriver uni page", () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#iframe").invoke('removeAttr','target').click({force:true}) 
        
        cy.get('#frame').then($iframe=>{
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iFrame')
        })
       
        cy.get('@iFrame').find('#button-find-out-more').click()
        
        cy.get('@iFrame').find('#myModal').as('modal')
        cy.get('@modal').then($text=>{
            const text = $text.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
        })

        cy.get('@modal').contains('Close').click()
        
    })


})