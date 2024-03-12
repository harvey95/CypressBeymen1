import { beVisible, clickCY, rightClickCY, shouldNotExist } from "../../support/baseSteps";

class WatchesPage {
  get erkekButton() {
    return 'a[title="Erkek"][class="o-navbar__link"]'
  }

  get aksesuarButton() {
    return 'a[href="/erkek-aksesuar-10010"][class="m-middleNav__link"]'
  }

  get kolSaatiButton() {
    return 'a[data-id="10086"]'
  }

  get isvicreYapimiButton() {
    return '[class="content boxes six columns"]'}

  get akilliSiralamaDropdown() {
    return 'span[class="listbox__text"]'
  }

  get fiyataGoreAzalan() {
    return "#listboxOption3"
  }

  get fiyatiEnYuksektenEnDusugeTumSaatler() {
    return "span.m-productCard__newPrice" // 48 tane
  }

  get filtreler() {
    return "button#productFilterOpenButton"
  }

  get breitlingCheckbox() {
    return '[class="m-checkbox__label"][for="29631"]'
  }

  get filtereleriDuzenleTab() {
    return ".m-attributeMenu-item" //.contains("Filtreleri Düzenle ")
  }

  get filteleriUygulaButton() {
    return "#productFilterApplyButton"
  }

  get urunBasliklari() {
    return ".m-productCard__title"
  }
 
  azalanFiyataGoreDogrula(){
    cy.visit(Cypress.env("URL"));

    cy.wait(2500)
    rightClickCY(this.erkekButton)
    rightClickCY(this.aksesuarButton)
    clickCY(this.kolSaatiButton)
    clickCY(this.isvicreYapimiButton) 
    clickCY(this.akilliSiralamaDropdown)
    clickCY(this.fiyataGoreAzalan)
    cy.wait(2000);

    cy.get(this.fiyatiEnYuksektenEnDusugeTumSaatler).then(($fiyatlar) => {
      const fiyatlar = $fiyatlar.map((index, element) =>
        parseInt(Cypress.$(element).text().replace("TL", "").replace(".", ""))
      );
      // Fiyatların azalan sırayla olduğunu doğrula
      for (let i = 0; i < fiyatlar.length - 1; i++) {
        expect(fiyatlar[i]).to.be.at.least(fiyatlar[i + 1]);
      }
    });
  }

  urunBasligininKontrolu(){
    cy.visit(Cypress.env("URL"));

    rightClickCY(this.erkekButton) 
    rightClickCY(this.aksesuarButton)
    clickCY(this.kolSaatiButton)
    beVisible(this.isvicreYapimiButton)
    clickCY(this.filtreler)
    beVisible(this.breitlingCheckbox)
    beVisible(this.filtereleriDuzenleTab).contains("Filtreleri Düzenle ")
    beVisible(this.breitlingCheckbox) 
    shouldNotExist(this.filtereleriDuzenleTab)
    beVisible(this.breitlingCheckbox)
    beVisible(this.filteleriUygulaButton)

    cy.get(this.urunBasliklari).then(($breatling) => {
      const breitlingTitle = $breatling
        .map((index, element) => Cypress.$(element).text())
        .get();
      for (let i = 0; i < breitlingTitle.length - 1; i++) {
        expect(breitlingTitle[i]).to.equal(breitlingTitle[i + 1]);
      }
    });
  }
}

export default new WatchesPage()
