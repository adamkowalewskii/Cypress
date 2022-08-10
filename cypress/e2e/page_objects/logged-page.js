export class LoggedPage{

    static checkCorrectLogin(login){
        cy.get('.account > span').should("have.text", login);
    }

    static clickSingOut(){
        cy.get('.logout').click();
        cy.wait(7000);
    }
}