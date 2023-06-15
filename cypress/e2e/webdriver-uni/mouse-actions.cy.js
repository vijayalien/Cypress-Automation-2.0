

describe("Test Mouse Actions", () => {

    it("Scroll into an element view", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
    })

    it("Able to drag and drop a draggable element", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').should('contain.text','Dropped!')
    })

    it("Able to double click an element", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#double-click').dblclick().should('have.class','div-double-click double')
    })

    it.only("Able to hold left mouse click button", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#click-box').trigger('mousedown',{which:1}).then($el =>{
            expect($el).to.have.css('background-color','rgb(0, 255, 0)')
        })
    })

})
