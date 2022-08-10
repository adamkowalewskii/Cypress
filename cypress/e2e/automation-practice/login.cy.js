/// <reference types="cypress" />

import {MainPage} from "../page_objects/main-page"
import {LoginPage} from "../page_objects/login-page"
import {LoggedPage} from "../page_objects/logged-page"


context('e-shop go to', () => {


    var data;
  beforeEach(() => {    

    MainPage.openAutomationPracticePage();

    cy.fixture('login').then((users) =>{
        data = users;
    })

    

  })

  describe('test',() => {
    
    
        
        it('should open Sign in', () => {
          var users = Object.keys(data);
          users.forEach((user) => {
            
            MainPage.clickLogin();
            LoginPage.setEmail(data[user].email);
            LoginPage.setPassword(data[user].password);
            LoginPage.clickSubmitLogin();
            LoggedPage.checkCorrectLogin(data[user].nickname)
            LoggedPage.clickSingOut();
            
          })
          
            
          
              
               
                        
              
            
            
            
                 
        
           })
    

  
  })

})