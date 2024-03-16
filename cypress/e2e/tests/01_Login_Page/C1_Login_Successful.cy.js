import LoginPage from "../../pages/loginPage";


describe("Login Tests", () => {

  

  beforeEach("visit to url", () => {
     cy.visit(Cypress.env("URL"));
  });

  it("C1 Login Successful", () => {

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    LoginPage.successfulLogin()
  });

  it.only("C2 Unsuccessful login", () => {

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    LoginPage.unsuccessfulLogin()
  });
});
