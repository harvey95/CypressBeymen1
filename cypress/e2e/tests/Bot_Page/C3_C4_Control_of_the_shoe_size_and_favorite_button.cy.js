// import userData from "../../../fixtures/userData.json";
import BotPage from "../../pages/botPage";
import userData from '../../../fixtures/userData.json'
import LoginPage from "../../pages/loginPage";
import { clickCY } from "../../../support/baseSteps";

cy.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Control of the shoe size", () => {
  beforeEach("visit to url", () => {
   // cy.loginSession(userData.email, userData.password);
  });

  it("C3 Control of the Sizes", () => {

    BotPage.botVaryasyonKontrolu()
  });

  it('C4 Control of the Favorite button', () => {
    
    BotPage.favorilereEkleButonununKontrolu()
  });

  
});
