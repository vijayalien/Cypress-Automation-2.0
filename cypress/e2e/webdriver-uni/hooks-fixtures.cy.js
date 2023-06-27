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
        cy.webdriverUni_contactUsForm(data.first_name,data.last_name,data.email,"Testing new automation course",'h1','Thank You for your Message!')
    })

    it("Should not be able to submit successfull submission via contact us form all fields required", () =>{ 
        cy.webdriverUni_contactUsForm(data.first_name,data.last_name," ","Testing new automation course",'body','Error')
    })

    it("Should be able to submit successfull submission using fixture - alias", () =>{
        cy.get('@user').then((user)=>{
        cy.webdriverUni_contactUsForm(user.first_name,user.last_name,user.email,"Testing new automation course",'h1','Thank You for your Message!')

        })
    })

})