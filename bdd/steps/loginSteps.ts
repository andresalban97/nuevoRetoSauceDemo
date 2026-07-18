 import {  Given, When, Then } from '../fixtures';
import { chromium} from 'playwright';
import {expect, Page} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { ENV } from './../../environment';

let loginPage: LoginPage;


Given('I navigate to www.saucedemo.com', async function ({ page }: { page: Page }) {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage()
    console.log('Navigating to SauceDemo');

});

Given('I validate the page title', async function () {
    await loginPage.validateLoginPageTitle();
});


When('I enter username', async function ({ page }: { page: Page }) {
    loginPage = new LoginPage(page);
    await loginPage.setUsername(ENV.USERNAME);
    console.log(`Entering username as ${ENV.USERNAME}`);
});

When('I enter password', async function ({ page }: { page: Page }) {
    loginPage = new LoginPage(page);
    await loginPage.setPassword(ENV.PASSWORD);
    console.log(`Entering password as ${ENV.PASSWORD}`);

});

When('I click the Login button', async function ({ page }: { page: Page }) {
    loginPage = new LoginPage(page);
    await loginPage.clickLogin();
    console.log('Clicking the login button');

});
        
Then('I should see an error message', async function ({ page }: { page: Page }){
    loginPage = new LoginPage(page);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBeTruthy();
    console.log(`Error message displayed: ${errorMessage}`);
});

When('I enter blocked username', async function ({ page }: { page: Page }) {
    loginPage = new LoginPage(page);
    await loginPage.setUsername(ENV.BLOCKED_USERNAME);
    console.log(`Entering blocked username as ${ENV.BLOCKED_USERNAME}`);
});
// Then('I should see the products page', function (dataTable){

// } );
