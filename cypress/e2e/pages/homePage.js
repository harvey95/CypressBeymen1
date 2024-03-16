import { clickCY, urlAssertionWithEq } from "../../support/baseSteps"
import LoginPage from "../pages/loginPage"
import { invokeTargetBlankCy } from "../../support/baseSteps"


class HomePage{

    get facebookButton(){
      return 'a[class="bwi-facebook"]'
    }
    get twitterButton(){
      return 'a[class="bwi-twitter"]'
    }
    get linkedinButton(){
      return 'a[class="bwi-linkedin"]'
    }

        sosyalMedyaButonKontroluFacebook(){
        cy.visit(Cypress.env('URL'))
        cy.wait(2000)
        clickCY(LoginPage.accepsCookies) 
        clickCY(LoginPage.erkekButton) 
        cy.viewport(1920, 1080)
        invokeTargetBlankCy(this.facebookButton)
        cy.origin('https://www.facebook.com',()=>{
          cy.url().should('include','beymen')
        })
        
    }
    sosyalMedyaButonKontroluTwitter(){
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });

        cy.visit(Cypress.env('URL'))
        cy.wait(2000)
        clickCY(LoginPage.accepsCookies) 
        clickCY(LoginPage.erkekButton) 
        cy.viewport(1920, 1080)
        invokeTargetBlankCy(this.twitterButton)        
        cy.origin('https://twitter.com', () => {
        cy.url().should('include','beymen')});
    }
    
    sosyalMedyaButonKontroluLinkedin(){

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
        cy.visit(Cypress.env('URL'))
        cy.wait(2000)
        clickCY(LoginPage.accepsCookies) 
        clickCY(LoginPage.erkekButton) 
        cy.viewport(1920, 1080)
        invokeTargetBlankCy(this.linkedinButton)
        cy.origin('https://tr.linkedin.com/company/beymengroup',()=>{
          cy.wait(3000)
         // cy.get('#text').eq(0).should('have.text','beymen')
          cy.url().should('include','beymengroup')
        })
    }


}

export default new HomePage