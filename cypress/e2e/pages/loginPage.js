import userData from "../../fixtures/userData.json"
import { beVisible, clickCY, haveText, shouldNotExist, typeTo } from "../../support/baseSteps";


class LoginPage {

  // webLocators={
  //   ignoreCookies:'button#onetrust-reject-all-handler'
  // }

  get ignoreCookies() {
   return "button#onetrust-reject-all-handler"
  }

  get accepsCookies(){
    return "button#onetrust-accept-btn-handler"
  }

  get erkekButton() {
    return "button#genderManButton"
  }

  // beymenTitle() {
  //   cy.title("Beymen");
  // }

  get hesabimButton() {
    return 'a[href="/customer"]'
  }

  get girisYapTitle() {
    return '[class="m-panel  -login"]>h3'
  }

  get mailTextbox() {
    return "input#customerEmail"
  }

  get passwordTextbox() {
    return "input#password"
  }

  get girisYapButton() {
    return "button#loginBtn"
  }

  get cikisYapButton() {
    return "button#exitBtnTop"
  }

  get cisisYapbutton2popUp() {
    return "button#sendBtn"
  }

  get uyeGirisiYapilamadiText() {
    return "h4#notifyTitle"
  }
  successfulLogin(){

  //  cy.visit(Cypress.env('URL'))
    cy.viewport(1920, 1080)

    clickCY(this.ignoreCookies)
    clickCY(this.erkekButton)
    clickCY(this.hesabimButton)
   // beVisible(this.girisYapTitle)
   cy.wait(2000)
    typeTo(this.mailTextbox,userData.email) 
    typeTo(this.passwordTextbox,userData.password)
    clickCY(this.girisYapButton)
    beVisible(this.cikisYapButton)
    clickCY(this.cikisYapButton)
    beVisible(this.cisisYapbutton2popUp)
    clickCY(this.cisisYapbutton2popUp)
    shouldNotExist(this.cikisYapButton)
  }

  unsuccessfulLogin(){
    // cy.visit(Cypress.env('URL'))

    cy.wait(3000)

    cy.viewport(1920, 1080)

    clickCY(this.ignoreCookies)
    clickCY(this.erkekButton)
    // this.beymenTitle();
    clickCY(this.hesabimButton)
    cy.get('h3[class="m-panel__header"]').eq(0).should('have.text','GİRİŞ YAP')
    
    //beVisible(this.girisYapTitle)
    typeTo(this.mailTextbox,userData.wrongMail)
    typeTo(this.passwordTextbox,userData.password)
    clickCY(this.girisYapButton)
   haveText(this.uyeGirisiYapilamadiText,userData.uyeGirisiYapilamadi) 
   }
}
 


export default new LoginPage();
