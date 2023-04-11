class karirpage{
    elements= {
        searchform : () => cy.get('input.form-control.form__input-text'),
        buttonlowongan : () => cy.get('button.btn.btn-solid').contains("Cari lowongan")
    }
    inputlowongan(){
        this.elememts.searchform().type("Quality Assurance");
    }
    clickbtnlowongan(){
        this.elements.buttonlowongan.click();
    }
}

module.exports = new karirpage();