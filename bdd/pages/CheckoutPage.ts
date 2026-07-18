import { BasePage } from "./BasePage";
import AllLocator from "../supports/locators.json";
import { Page } from "@playwright/test";

export class CheckoutPage extends BasePage{

    private locators = AllLocator.CartPage

    constructor(page:Page){
            super(page);
        }

    async startCheckout() {
            await this.click(this.locators.checkoutButton);
    }

    async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
        await this.type(this.locators.firstname, firstName);
        await this.type(this.locators.lastname, lastName);
        await this.type(this.locators.postalcode, postalCode);
        await this.click(this.locators.continueButton);
    }

    async confirmOrder() {
        await this.click(this.locators.finishButton);
    }

    async hasConfirmationMessage() {
        const productLocator = this.page.locator(`.checkout_complete_container:has-text("${this.locators.confirmationMessage}")`);
        return await productLocator.isVisible();

    }

}