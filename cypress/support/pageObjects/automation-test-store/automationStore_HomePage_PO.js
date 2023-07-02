class automationStore_HomePage_PO{
    accessToUrl(){
        cy.visit("https://automationteststore.com/")
    }


    clickOnHairCare(){
        cy.get('a[href*="product/category&path"]').contains("Hair Care").click()
    }

}

export default automationStore_HomePage_PO