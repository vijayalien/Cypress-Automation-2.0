class homePage_PO{

    visitHomePage(){
        cy.visit(Cypress.env("webdriver_uniurl"))
    }

    validateHomePage(){
        cy.get('#nav-title').should('contain','WebdriverUniversity.com (New Approach To Learning)')
    }

    clickOnCertainPage($selector){
        cy.navigateToWebdriverUniCertainPage($selector)
    }

}

export default homePage_PO