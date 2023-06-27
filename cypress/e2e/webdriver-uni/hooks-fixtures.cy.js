describe("Test contact us from via WebdriverUniversity", ()=>{

    before(function(){
        cy.fixture("example").then(function(data){
            //this.data= data
            globalThis.data=data
        })

      
    })

    beforeEach(function(){
        
        cy.fixture('userDetails').as('user')
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    })


    it("Should be able to submit successfull submission via contact us form", () =>{
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it("Should not be able to submit successfull submission via contact us form all fields required", () =>{ 
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type("testemail@email.com")
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain','Error')
    })

    it("Should be able to submit successfull submission using fixture - alias", () =>{
        cy.get('@user').then((user)=>{
            cy.get('[name="first_name"]').type(user.first_name)
            cy.get('[name="first_name"]').should('have.attr','name','first_name')
            cy.get('[name="last_name"]').type(user.last_name)
            cy.get('[name="email"]').type(user.email)

        })
        cy.get('textarea.feedback-input').type("Testing new automation course")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

})