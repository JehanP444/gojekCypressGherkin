class homepage{
    elements = {
        toolbar : () => cy.get("/html/body/header/div/ul/li[3]/a"),
    burger : () => cy.get('div.o-burger')
    }
    clickburger(){
        this.elements.burger().click();
    }
    clickkarir() {
        this.elements.toolbar().click({force: true});}

    open(){
        cy.visit('https://www.gojek.com/id-id/')

    }
}
module.exports = new homepage();