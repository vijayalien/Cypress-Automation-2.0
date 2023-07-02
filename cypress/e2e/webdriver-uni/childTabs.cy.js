import contactUs_PO from "../../support/pageObjects/webdrier-uni/contactUs_PO"
import homePage_PO from "../../support/pageObjects/webdrier-uni/homePage_PO"

describe("Test contact us from via WebdriverUniversity", ()=>{

    beforeEach("Before Each function",()=>{
        const homepage_PO = new homePage_PO()
             
        homepage_PO.visitHomePage()
        homepage_PO.validateHomePage()
        homepage_PO.clickOnCertainPage('#contact-us')

    })

    it("Should be able to submit successfull submission via contact us form", () =>{
        var contactus_PO =new contactUs_PO()
        contactus_PO.submitContactUsFormBasic()
    })

    it("Should not be able to submit successfull submission via contact us form all fields required", () =>{
        var contactus_PO =new contactUs_PO()
        contactus_PO.notsubmitContactUsFormBasic()
    })

})