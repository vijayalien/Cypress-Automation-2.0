

describe("Test contact us from via Automation Test Store", ()=>{

    it("Should be able to submit successfull submission via contact us form", () =>{
        cy.visit("https://automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        
    })


})