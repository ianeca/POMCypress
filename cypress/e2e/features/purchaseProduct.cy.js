import homeMenuPage from "../pages/home/homeMenuPage"

describe('Purchase Products', () =>{
    it('Purchase first product', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    const home = new homeMenuPage()
    home.selectCart()
    home.selectPlaceOrder()
    home.typeForm("Janeth","Peru", "Lima","989283792857438","Julio","2024")
    home.selectPurchase()
    home.assertText()
    })
})