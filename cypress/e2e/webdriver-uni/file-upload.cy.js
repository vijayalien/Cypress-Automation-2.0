

describe("Test file upload via webdriver uni", ()=>{

    it("Upload a file in webdriver uni", () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#file-upload").invoke('removeAttr','target').click({force:true}) 
      
        cy.get('#myFile').attachFile('Desktop.jpg')
        cy.get('#submit-button').click()
    })

    it.only("Upload NO file in webdriver uni", () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#file-upload").invoke('removeAttr','target').click({force:true}) 
      
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.contain('You need to select a file to upload!')
    
        })
    })
})