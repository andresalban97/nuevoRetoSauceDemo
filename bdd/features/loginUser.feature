@default
Feature: Inicio de sesion Usuario

    
    Background: I am on SauceDemo page to log in
        Given I navigate to www.saucedemo.com
        Given I validate the page title

    @Login
    Scenario: Succesfull Login 
        When I enter username
        And I enter password
        And I click the Login button

    @LoginFail
    Scenario: Login fails with blocked user
        When I enter blocked username
        And I enter password
        And I click the Login button
        Then I should see an error message
