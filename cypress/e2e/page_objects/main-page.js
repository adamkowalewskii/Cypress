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

    static setEmail(email){
        cy.get("#email").type(email, { force: true });
        
    }

    static setPassword(password){
        cy.get("#passwd").type(password, { force: true });
        
    }

    static clickSubmitLogin(){
        cy.get("#SubmitLogin").contains("Sign in").click();
    }

}