/// <reference types="cypress" />

import {MainPage} from "../page_objects/main-page"
import {AddPage} from "../page_objects/add-page"


context('e-shop go to', () => {

    var productsPrice;
    
    beforeEach(() => {    
    MainPage.openAutomationPracticePage();

    cy.get(".price.product-price").first().invoke('text').as('productPrice');
  })

  describe('test',() => {
        
        it('add to bucket', () => {

            MainPage.clickAddCard('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span');
            AddPage.clickContinueShopping();
            MainPage.clickAddCard('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span');
            AddPage.checkIfPriceIsCorrect(".price.product-price")
           })
    

  
  })

})