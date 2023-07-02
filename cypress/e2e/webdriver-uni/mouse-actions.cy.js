import homePage_PO from "../../support/pageObjects/webdrier-uni/homePage_PO"

describe("Test Mouse Actions", () => {

    const homepage_PO = new homePage_PO()

    beforeEach(()=>{
        homepage_PO.visitHomePage()
        homepage_PO.validateHomePage()
        homepage_PO.scrollIntoView('#actions')
        
    })

    it("Scroll into an element view", () => {
        homepage_PO.scrollIntoView('#actions')
    })

    it("Able to drag and drop a draggable element", () => {
        homepage_PO.clickOnCertainPage('#actions')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').should('contain.text','Dropped!')
    })

    it("Able to double click an element", () => {
        homepage_PO.clickOnCertainPage('#actions')
        cy.get('#double-click').dblclick().should('have.class','div-double-click double')
    })

    it("Able to hold left mouse click button", () => {
        homepage_PO.clickOnCertainPage('#actions')
        cy.get('#click-box').trigger('mousedown',{which:1}).then($el =>{
            expect($el).to.have.css('background-color','rgb(0, 255, 0)')
        })
    })

})
