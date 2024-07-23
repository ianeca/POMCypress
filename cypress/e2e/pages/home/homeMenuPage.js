class homeMenuPage {
    selectCart(){
        return cy.get("#cartur").click()
    }
    selectPlaceOrder(){
        return cy.get("button[data-toggle='modal']").click()
    }
    typeForm(name,country, city, credit_card, month, year){
        return cy.get("#name").type(name),
                cy.get("#country").type(country),
                cy.get("#city").type(city),
                cy.get("#card").type(credit_card),
                cy.get("#month").type(month),
                cy.get("#year").type(year)
    }
    selectPurchase(){
        return cy.get('button[onclick="purchaseOrder()"]').click()
        
    }
    assertText(){
        cy.contains('h2', 'Thank you for your purchase!').and('be.visible')
    }
}
export default homeMenuPage