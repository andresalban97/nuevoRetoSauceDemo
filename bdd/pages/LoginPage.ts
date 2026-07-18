import { BasePage } from "./BasePage";
import AllLocator from "../supports/locators.json";
import { Page } from "@playwright/test";

export class LoginPage extends BasePage{

    private locators = AllLocator.LoginPage

    constructor(page:Page){
        super(page);
    }

    async navigateToLoginPage() {
        await this.navigateTo('/');
        
    }


    async setUsername(name: string) {
        await this.type(this.locators.username, name);
    }


    async setPassword(password: string) {
        await this.type(this.locators.password, password);
  }

    async clickLogin() {
        await this.click(this.locators.loginButton);
  }

    async validateLoginPageTitle() {
        await this.validateTitle('Swag Labs'); // usa el método de BasePage
  }
    
    async getErrorMessage() {
        const errorMessage = await this.getText(this.locators.errorMessage);
        return errorMessage;
    }

}