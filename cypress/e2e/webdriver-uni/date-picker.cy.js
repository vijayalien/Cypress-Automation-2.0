/// <reference types="Cypress" />
describe("Date picker via webdriver uni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    })

    //method 1
    it("Test Datepicker via webdriver Uni page", () => {
        //feb 23 -2023
        cy.get('.input-group-addon').click()
        cy.get('.datepicker-days thead tr:nth-child(1) th:nth-child(2)').click()
        cy.get('.datepicker-months span').each(($el, index, $list) => {
            let month = $el.text()
            if (month == "Feb") {
                $el.click()
                cy.get("[class='day']").contains('23').click()
            }

        })
    })

    //method 2
    it.only("Test Datepicker via webdriver Uni page method 2", () => {
        cy.get('.input-group-addon').click()
        var date = new Date()
        date.setDate(date.getDate() + 300)

        var futureDate = date.getDate()
        var futureMonth = date.toLocaleDateString("default", { month: "long" })
        var futureYear = date.getFullYear()

        cy.log("future date = " + futureDate)
        cy.log("future month = " + futureMonth)
        cy.log("future date = " + futureYear)

        function selectMonthAndYear() {
            cy.get('.datepicker-days').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }

            }).then(() => {
                cy.get('.datepicker-days').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })

        }

        function selectFutureDay(){
            cy.get("[class='day']").contains(futureDate).click()
        }

        selectMonthAndYear()
        selectFutureDay()

    })
})