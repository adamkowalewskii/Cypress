/// <reference types="cypress" />

import {MainPage} from "../page_objects/main-page"


context('e-shop go to', () => {

    var productsPrice;
    
    beforeEach(() => {    
    MainPage.openAutomationPracticePage();

    cy.get(".price.product-price").first().invoke('text').as('productPrice');
  })

  describe('test',() => {
        
        it('add to bucket', () => {


          cy.get('@productPrice').then((productPrice) => {
            
            let productPriceValue = parseFloat(productPrice.replace('$', ''));
            
            productsPrice = (2 * productPriceValue);
            
            
            
          })
          
             
            MainPage.clickAddCard();
            cy.wait(4000);
            MainPage.clickContinueShopping();
            MainPage.clickAddCard();
            cy.wait(7000);
            cy.get(".ajax_block_products_total").invoke('text').then((total) => {
              let totalValue = parseFloat(total.replace('$', ''));
              
              expect(totalValue).to.equal(parseFloat(productsPrice))
            })
           })
    

  
  })

})