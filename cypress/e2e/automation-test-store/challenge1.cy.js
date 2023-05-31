describe("Challenge 1 : Then command promise", ()=>{

    it("Get the output text using promise/then command ", () =>{
        cy.visit("https://automationteststore.com/")
        cy.get("a[href$='contact']").click().then(function(itemHeaderText){
            cy.log("The header text is: "+itemHeaderText.text())
        
        })    
    })

})