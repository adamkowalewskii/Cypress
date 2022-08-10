export class AddPage{
    static clickContinueShopping(){
        while(!cy.get(".clearfix").should('be.visible')){
        
        }
        cy.get(".exclusive-medium").contains("Continue shopping").click();
    }

    static checkIfPriceIsCorrect(productPriceId){
        
        cy.get(productPriceId).first().invoke('text').as('productPrice');
        
         cy.get('@productPrice').then((productPrice) => {
            
             let productPriceValue = parseFloat(productPrice.replace('$', ''));
             var productsPrice = (2 * productPriceValue);
             
             cy.get(".ajax_block_products_total").invoke('text').then((total) => {
                let totalValue = parseFloat(total.replace('$', ''));
                
                expect(totalValue).to.equal(parseFloat(productsPrice))
              })
         });
        
    }
}