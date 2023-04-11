class applydetails {
    elements = {
        jobtitle : () => cy.get('h1.c-content-header'),
        applybutton : () => cy.get('button.btn-gocareer')
        }
    verivyjobtitle() {
        this.elements.jobtitle().contains("GTF - Quality Assurance Engineer - Insurance - 8183")
    }
    verivyapplybutton() {
        this.elements.applybutton().contains("Apply")
    }
}

module.exports = new applydetails();
