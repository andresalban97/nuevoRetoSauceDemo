import { Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import AllLocator from "../supports/locators.json";

export class CartPage extends BasePage{

    private locators = AllLocator.ShopingPage

    constructor(page:Page){
        super(page);
    }

    

    async addProductToCart(idproduct:string){
        const selector = `${this.locators.CommonProduct}${idproduct}']`;
        console.log("ID a buscar:", selector);
        await this.page.waitForSelector(selector, { state: 'visible', timeout: 5000 });
        await this.click(selector);

        
    }

     async openCart() {
        await this.click(this.locators.figureCart);
    }

    
    async isProductInCart(productName: string) {
        const productLocator = this.page.locator(`.cart_item:has-text("${productName}")`);
        return await productLocator.isVisible();
    }


}