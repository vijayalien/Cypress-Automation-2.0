

describe("Handling autocomplete dropdown via webdriver uni", () => {

    it("Select specific dropdown via autocomplete list", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({ force: true })

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