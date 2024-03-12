import LoginPage from "../../pages/loginPage";


describe("Login Tests", () => {

  cy.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach("visit to url", () => {
     cy.visit(Cypress.env("URL"));
  });

  it.only("C1 Login Successful", () => {

    LoginPage.successfulLogin()
  });

  it("C2 Unsuccessful login", () => {
    LoginPage.unsuccessfulLogin
  });
});
