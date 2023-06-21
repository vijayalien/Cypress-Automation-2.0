/// <reference types="Cypress" />
describe("Handling data via web driver uni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })


    it("Caluclate and assert the total age of all users", () => {
        var userDetails = []
        let num = 0
        cy.get('#thumbnail-1  td').each(($el,index,$list)=>{
            userDetails[index] = $el.text()
            
        }).then(()=>{
            var i
            for(i=0;i<userDetails.length;i++){
                if(Number(userDetails[i])){
                    num += Number(userDetails[i])
                    cy.log(num)
                }
                //cy.log(userDetails[i])
              
            }
            expect(num).to.eq(322)
        })
    })

    it.only("Caluclate and assert the age of the given user based on last name", () => {
        //method 1
        // cy.get("#thumbnail-1  tr td:nth-child(2)").each(($el,index,$list)=>{
        //     let lastname = $el.text()
        //     if(lastname == "Woods"){
        //         cy.get("#thumbnail-1  tr td:nth-child(2)").siblings().should('contain','80')
        //     }

        // })

        //method 2
           cy.get("#thumbnail-1  tr td:nth-child(2)").each(($el,index,$list)=>{
            let lastname = $el.text()
            if(lastname == "Woods"){
                cy.get("#thumbnail-1  tr td:nth-child(2)").eq(index).next().then(function(age){
                    const woodAge =age.text()
                    expect(woodAge).to.be.contain(80)

                })

            }

        })
    })
})