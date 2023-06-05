describe("Handling Js Alerts", ()=>{

    it("Confirms Js alerts contains the correct texts", () =>{
        cy.visit("http://www.webdriveruniversity.com")  
        cy.get("#popup-alerts").invoke('removeAttr','target').click({force:true})
        cy.get('#button1').click()

        cy.on('window:alert',(str) =>{
            expect(str).to.contain('I am an alert box!')
            
        })
    })


})