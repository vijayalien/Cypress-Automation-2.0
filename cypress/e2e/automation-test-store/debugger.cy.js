///<reference types="Cypress" />

import automationStore_HomePage_PO from "../../support/pageObjects/automation-test-store/automationStore_HomePage_PO"


describe("How to debug in Cypress ", ()=>{
    const auomtationTestHomePage_PO = new automationStore_HomePage_PO()

    before(()=>{
        cy.fixture("products").then(function(data){
            //this.data= data
            globalThis.data=data
        })
    })

    beforeEach(()=>{
        auomtationTestHomePage_PO.accessToUrl()
        auomtationTestHomePage_PO.clickOnHairCare()
    })

    it("Debugging items", () =>{
        globalThis.data.productName.forEach(function(element){
            cy.addProductsToCart(element).then(()=>{
                //debugger
            })
        })
      
        cy.get('.dropdown-toggle > .fa').click().debug()
    })

})