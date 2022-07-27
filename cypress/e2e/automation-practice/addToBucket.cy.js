/// <reference types="cypress" />

import {MainPage} from "../page_objects/main-page"


context('e-shop go to', () => {

    var value;
    
    beforeEach(() => {    
    MainPage.openAutomationPracticePage();

    cy.get(".price.product-price").first().then(($span) =>{
      value = $span.text();
      
    })
  })

  describe('test',() => {
        
        it('should open Sign in', () => {

          
          //alert(value);
             
            MainPage.clickAddCard();
            
            MainPage.clickContinueShopping();
            MainPage.clickAddCard();
           })
    

  
  })

})