import HomePage from '../../pages/homePage'
describe('Sosyal Medya Buton Kontrolu', () => {

  //üç tane it tek case için yazıldı.
    it('Facebook buton', () => {
        HomePage.sosyalMedyaButonKontroluFacebook()

        cy.wait(2000)
        cy.on("uncaught:exception", (err, runnable) => {
          return false;
        });
        cy.wait(2000)

    });

    it('twitter',()=>{
      HomePage.sosyalMedyaButonKontroluTwitter()

    })

    it('Linkedin', () => {
      HomePage.sosyalMedyaButonKontroluLinkedin()

    });
});