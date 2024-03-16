import WatchesPage from "../../pages/WatchesPage";
import userData from "../../../fixtures/userData.json"
import LoginPage from "../../pages/loginPage"
import { clickCY } from "../../../support/baseSteps";



describe("Watches Page", () => {
  beforeEach("visit to url", () => {
   // cy.loginSession(userData.email, userData.password);
   // Session'da sıkıntı çıkıyor, muhtemelen beymen sitesi güvenlik sebebiyle yapıyor. Çünkü daha önceden session çalışıyordu.
   
  });

  it.only("C2 Azalan Fiyata Göre Doğrula", () => {
    cy.visit(Cypress.env("URL"));

    cy.wait(2000)
    clickCY(LoginPage.ignoreCookies) 
    clickCY(LoginPage.erkekButton) 
    WatchesPage.azalanFiyataGoreDogrula()

  });

  it("Control of the Breitling Checkbox", () => {
    cy.visit(Cypress.env("URL"));

    cy.wait(2000)
    clickCY(LoginPage.ignoreCookies) 
    clickCY(LoginPage.erkekButton) 
    WatchesPage.urunBasligininKontrolu()
  });
});
