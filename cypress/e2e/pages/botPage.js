import { beVisible, clickCY, haveText, mouseOver, rightClickCY, shouldNotExist, dropdownCY } from "../../support/baseSteps";
import WatchesPage from "./WatchesPage";
import LoginPage from "../../e2e/pages/loginPage"


cy.on("uncaught:exception", (err, runnable) => {
  return false;
});

class BotPage {
  get ayakkabiTab() {
    return 'a[href="/erkek-ayakkabi-10011"][class="m-middleNav__link"]'
  }

  get botButton() {
    return '[data-id="10097"]'
  }

  get firstShoeSizeButtons() {
    return 'div[class="m-productCard__stock -hasMultiStock"]' //48 locate
  }

  get firstFavoriteButton() {
    return 'button#addFavorite'
  
  }

  get size42() {
    return 'span.m-productCard__stockItem'
  }

  get itemVaryasyonlari(){
   return ".m-variation__item"
  }

  get sepeteEkleButton(){
    return 'button#addBasket'
  }

  get sepeteEklendiText(){
    return '[class="m-notification__title"]'
  }

  get sepeteGitButton(){
    return 'button.m-notification__button.btn'
  }

  get sepetteUrunAdediDropdown(){
   return 'select#quantitySelect0-key-0'
  }

  get favorilereGitButton(){
    return 'button[class="m-notification__button btn"]'
  }

  get removeFavoriteButton(){
    return 'button[class="remove-favorite"]'
  }

  get removeFavoriteButton2(){
    return '[class="remove"]'
  }

  get sepeteEkleButtonInFavoritePage(){
    return 'button[class="btn a-darkButton -large"]'
  }

  get sevdiginizUruneUlasmakIcınFavorilereEkleyinText(){
    return 'div[class="o-noFavorite__title"]'
  }

  get favorilereEKlendiText(){
    return ('.m-notification__title')
  }
  
  get firstBotButton(){
    return 'div[data-page="1"]'
  }

  get sepetteBotSize(){
    return '.m-variation__item'
  }

  get sepettenUrunuSilButton(){
    return 'button#removeCartItemBtn0-key-0'
  }

  get urunSepettenSilindiText(){
    return 'h4#notifyTitle'
  }
  

  favorilereEkleButonununKontrolu(){
    cy.visit(Cypress.env("URL"));

    cy.wait(2000)
    clickCY(LoginPage.ignoreCookies) 
    clickCY(LoginPage.erkekButton) 

    this.botVaryasyonKontrolu()

    cy.get(this.firstFavoriteButton).within(()=>{ // within child olan taga erişmemizi sağlar.
      cy.get('span').should('contain.text','FAVORİLERE EKLE')
    })

    clickCY(this.firstFavoriteButton)
    haveText(this.favorilereEKlendiText,'Favorilere Eklendi')
    clickCY(this.favorilereGitButton)
    clickCY(this.removeFavoriteButton)
    clickCY(this.removeFavoriteButton2)
    cy.wait(2000)
    haveText(this.sevdiginizUruneUlasmakIcınFavorilereEkleyinText,'Sevdiğiniz ürünlere daha sonra ulaşmak için favorilerinize ekleyin.')

  }

  botVaryasyonKontrolu(){
    cy.visit(Cypress.env("URL"));

    cy.wait(2000)
    clickCY(LoginPage.ignoreCookies) 
    clickCY(LoginPage.erkekButton) 

    cy.viewport(1920, 1080)

    rightClickCY(WatchesPage.erkekButton) 
    rightClickCY (this.ayakkabiTab)
    clickCY(this.botButton)
    cy.wait(2500);
    mouseOver(this.firstShoeSizeButtons)
    cy.wait(2000)
    cy.get(this.size42).first().each(($el)=>{
      const text = $el.text().trim()
      if (text =='42'||'43'||'44'||'45'||'46'){
         cy.wrap($el).contains(text).click({force: true})
      }

    })

  cy.get(this.itemVaryasyonlari).each(($el, index, $list) => {
      if ($el.is(":enabled")) {
        cy.wrap($el).click();
      } else if (index < $list.length - 1) {
          cy.wrap($list[index + 1]).click()
          
      }
    });
  }

  controlOfTheSepeteEkleButton(){
    cy.visit(Cypress.env("URL"));

    cy.wait(2000)
    clickCY(LoginPage.ignoreCookies) 
    clickCY(LoginPage.erkekButton) 
    cy.viewport(1920, 1080)
    rightClickCY(WatchesPage.erkekButton) 
    rightClickCY (this.ayakkabiTab)
    clickCY(this.botButton)
    cy.get(this.firstBotButton).eq(0).click()
    
    cy.get(this.sepetteBotSize).each(($el)=>{
      const text = $el.text().trim()
      if (text =='42'||'43'||'44'||'45'||'46'){
         cy.wrap($el).contains(text).click({force: true})
      }
    })

    clickCY(this.sepeteEkleButton)
    beVisible(this.sepeteEklendiText)
    clickCY(this.sepeteGitButton)
    cy.wait(2000)
    clickCY(this.sepettenUrunuSilButton)
  }

  ControlOfTheSepetteUrunAdedi(){
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit(Cypress.env("URL"));

    cy.wait(2000)
    clickCY(LoginPage.accepsCookies) 
    clickCY(LoginPage.erkekButton) 
    cy.viewport(1920, 1080)
    rightClickCY(WatchesPage.erkekButton) 
    rightClickCY (this.ayakkabiTab)
    clickCY(this.botButton)
    cy.get(this.firstBotButton).eq(0).click()
    
    cy.get(this.sepetteBotSize).each(($el)=>{
      const text = $el.text().trim()
      if (text =='42'||'43'||'44'||'45'||'46'){
         cy.wrap($el).contains(text).click({force: true})
      }
    })

    clickCY(this.sepeteEkleButton)
    beVisible(this.sepeteEklendiText)
    clickCY(this.sepeteGitButton)
    cy.wait(3000)
    dropdownCY(this.sepetteUrunAdediDropdown,'2')
    cy.wait(1000)
    clickCY(this.sepettenUrunuSilButton)
    cy.wait(2000)
    cy.get(this.urunSepettenSilindiText).eq(0).should('have.text','Ürün Silindi')
    // Burada cy.get ile yazılmasının nedeni eq methodu'dur, eğer eq() methodu varsa bu şekilde kulllanılması gerekiyor
    // baseSteps'ten çagırdıgımda hata alıyorum.
    //deneme1 github

  }
  
  
}

export default new BotPage();
