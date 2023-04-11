class resultfound {
    elements={
        jobfound : () => cy.get('a.href').contains("GTF - Quality Assurance Engineer - Insurance - 8183")
    }
   clickresult() {
    this.elements.jobfound().click();
   }
}

module.exports = new resultfound();