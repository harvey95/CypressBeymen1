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
    get youTubeButton(){
      return 'a[class="bwi-twitter"]'
    }

        sosyalMedyaButonKontroluFacebook(){
        cy.visit(Cypress.env('URL'))
        cy.wait(2000)
        clickCY(LoginPage.accepsCookies) 
        clickCY(LoginPage.erkekButton) 
        cy.viewport(1920, 1080)
        invokeTargetBlankCy(this.facebookButton)
        urlAssertionWithEq('https://www.facebook.com/Beymen/')
        
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
    
    sosyalMedyaButonKontroluYoutube(){
        cy.visit(Cypress.env('URL'))
        cy.wait(2000)
        clickCY(LoginPage.accepsCookies) 
        clickCY(LoginPage.erkekButton) 
        cy.viewport(1920, 1080)
        invokeTargetBlankCy(this.youTubeButton)
        urlAssertionWithEq('https://www.youtube.com/channel/UCMYUy0Zgm93UjonhZN8rVMQ')
    }


}

export default new HomePage