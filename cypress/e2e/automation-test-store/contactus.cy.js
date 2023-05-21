

describe("Test contact us from via Automation Test Store", ()=>{

    it("Should be able to submit successfull submission via contact us form", () =>{
        cy.visit("https://automationteststore.com/")
        cy.get("a[href$='contact']").click()
        cy.get("input[name='first_name']").type("malanchalan")
        cy.get("input[id='ContactUsFrm_email']").type("fakeemail@test.com")
        cy.get("textarea[id='ContactUsFrm_enquiry']").type("Enquiring about new automation course")
        cy.get("button[title='Submit']").click()
        
        cy.get("section[class='mb40'] ").should('contain','Your enquiry has been successfully')
    })


})