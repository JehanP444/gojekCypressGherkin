import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import homepage from "./POM/homepage"
import karirpage from "./POM/karirpage"
import applydetails from "./POM/applypage";
import resultfound from "./POM/resultfound";


Given(/^Jehan sudah mengakses web gojek$/, () => {
      homepage.open()
      cy.wait(1000)
      homepage.clickburger()
      cy.wait(2000)
      homepage.clickkarir()
      cy.wait(1000)
});

When(/^Jehan sudah memilih lowongan karir$/, () => {
	karirpage.inputlowongan()
      karirpage.clickbtnlowongan()

      resultfound.jobfound()
      resultfound.clickresult()
});

Then(/^Jehan sukses mengapply karir pilihannya$/, () => {
	applydetails.verivyjobtitle()
      applydetails.verivyapplybutton()
});
