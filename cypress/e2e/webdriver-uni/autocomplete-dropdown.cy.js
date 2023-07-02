import homePage_PO from "../../support/pageObjects/webdrier-uni/homePage_PO"

describe("Handling autocomplete dropdown via webdriver uni", () => {

    beforeEach(()=>{
        const homepage_PO = new homePage_PO()
        homepage_PO.visitHomePage()
        homepage_PO.validateHomePage()
        homepage_PO.clickOnCertainPage('#autocomplete-textfield')

    })

    it("Select specific dropdown via autocomplete list", () => {
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index) => {
            const product = $el.text()
            const actualProductName = "Avacado"
            if (product == actualProductName) {
                $el.click()
                cy.get('#submit-button').click()
                cy.url().should('include', actualProductName)
            }
           
        }).then(() => {
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > *').each(($el, index) => {
                const product = $el.text()
                const actualProductName = "Grapes"
                if (product == actualProductName) {
                    $el.click()
                    cy.get('#submit-button').click()
                    cy.url().should('include', actualProductName)
                }
             
            })

        })
    })
})