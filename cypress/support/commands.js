// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress"/>

cy.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  import LoginPage from "../e2e/pages/loginPage";
  import BotPage from "../e2e/pages/botPage"
  import WatchesPage from "../e2e/pages/WatchesPage";

  Cypress.Commands.add("loginSession", (email, password) => {
    cy.session("login", () => {
      cy.visit(Cypress.env("URL"));
      cy.wait(1500)
      cy.get(LoginPage.ignoreCookies).click();
      cy.get(LoginPage.erkekButton).click();
     // LoginPage.beymenTitle()
      cy.get(LoginPage.hesabimButton).click();
    //  cy.get(LoginPage.girisYapTitle).should("be.visible");
      cy.get(LoginPage.mailTextbox).type(email);
      cy.get(LoginPage.passwordTextbox).type(password);
      cy.get(LoginPage.girisYapButton).click();
      cy.wait(1500)

    });
  });

//   Cypress.Commands.add('sepeteEkleKontrol', () => {
//     cy.visit(Cypress.env("URL"));

//     cy.wait(2000)
//     cy.get(LoginPage.ignoreCookies).click()
//     cy.get(LoginPage.erkekButton).click()
//     cy.viewport(1920, 1080)
//     cy.get(WatchesPage.erkekButton).rightclick()
//     cy.get(BotPage.ayakkabiTab).rightclick()
//     cy.get(BotPage.botButton).eq(0).click()
//   // //  clickCY(this.firstBotButton).eq(0)
    
//   cy.get(BotPage.firstShoeSizeButtons).first().trigger('mouseover')

//     cy.get(BotPage.size42).first().each(($el)=>{
//       const text = $el.text().trim()
//       if (text =='42'||'43'||'44'||'45'||'46'){
//          cy.wrap($el).contains(text).click({force: true})
//       }
//     })

//     cy.get(BotPage.sepeteEkleButton).click()
//     cy.get(BotPage.sepeteEklendiText).should('be.visible')
// });
