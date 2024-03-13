
cy.on("uncaught:exception", (err, runnable) => {
  return false;
});

function clickCY(element){
    
    cy.get(element).click()
   
}
  export{clickCY}

function rightClickCY(element){
  cy.get(element).should('be.visible').rightclick()
}
export {rightClickCY}

function beVisible(element){
  cy.get(element).should('be.visible')
}
export {beVisible}

function typeTo(element,text){
  cy.get(element).type(text)
}
export {typeTo}

function haveText(element,text){
  cy.get(element).should('have.text',text)
}
export {haveText}

function shouldNotExist(element){
  cy.get(element).should('not.exist')
}
export {shouldNotExist}


function mouseOver(element) { // Bu, $el jQuery nesnesini alır ve cy.wrap() ile gerçek DOM öğesine dönüştürerek mouseover olayını tetikler. Bu şekilde, Cypress cy.trigger() işlevini gerçek bir DOM öğesi üzerinde kullanabilir.
  cy.get(element).eq(1).then(($el) => { // burada eq() veya first() kullanmak farketmez
    cy.wrap($el[0]).trigger('mouseover');
  });
}


export { mouseOver };


function containsCY(element){
  cy.contains(element)
}
export {containsCY}

function dropdownCY(element,option){
  cy.get(element).select(option).should('have.value',option)
}
export {dropdownCY}

function invokeTargetBlankCy(element){
  cy.get(element).invoke('removeAttr','target').click()
}
export {invokeTargetBlankCy}

