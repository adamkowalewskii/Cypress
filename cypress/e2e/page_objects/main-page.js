export class MainPage {

    

    static openAutomationPracticePage(){

        cy.visit(" http://automationpractice.com/index.php?");

    }



    static clickCategory(name){

        cy.get('#block_top_menu').contains(name).click();

    }



    static clickShoppingCart(){

        cy.get('.shopping_cart').contains("Cart").click();

    }

    static clickLogin(){
        cy.get(".login").contains("Sign in").click();
    }
    
    static clickAddCard(product){
        
        cy.get(product).click();
        cy.wait(14000);

    }

    static clickContinueShopping(){
        while(!cy.get(".clearfix").should('be.visible')){
        
        }
        cy.get(".exclusive-medium").contains("Continue shopping").click();
    }

}