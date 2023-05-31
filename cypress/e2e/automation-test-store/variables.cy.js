

describe("Verifying varibales, cypress commands and jquery commands", ()=>{

    it("Navigating to specific product pages", () =>{
        cy.visit("https://automationteststore.com/")

        ////Method 1 to using variable and click on element 
        // const makeupLink= cy.get('a[href*="product/category&path"]').contains("Makeup") 
        // const skincareLink = cy.get('a[href*="product/category&path"]').contains("Skincare")
        // makeupLink.click()
        // skincareLink.click()

        /////Method 2 to using varibale and click on element 
        // const makeupLink= cy.get('a[href*="product/category&path"]').contains("Makeup")
        // makeupLink.click() 
        // const skincareLink = cy.get('a[href*="product/category&path"]').contains("Skincare")
        // skincareLink.click()


    })

    it("Second Approach to navigate ",()=>{
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path"]').contains("Makeup").click()

        //Approach 1  -- code will fail
        // const headerText= cy.get("h1 .maintext")
        // cy.log("Header text is : "+headerText.text())


        cy.get("h1 .maintext").then(function(headText){
            const headerText=headText.text()
            cy.log("Header text is : "+headerText)
            expect(headerText).to.equal('Makeup')
        })

    })

    it.only("Validate properties of the contact us page ",()=>{
        cy.visit("https://automationteststore.com/")
        cy.get("a[href$='contact']").click()
        
        //Uses cypress command and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')

        //Jquery approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(firstNameText=>{
            const first_name = firstNameText.find("#field_11").text()
            expect(first_name).to.contain('First name')

        //Embedded approach (Closure)
            cy.get('#field_11').then(fName=>{
                cy.log(fName.text())
                cy.log(fName)
            })

        })

        })

    })
