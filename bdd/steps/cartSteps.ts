 import {  Given, When, Then } from '../fixtures';
import { LoginPage } from "../pages/LoginPage";
import { expect, Page } from "@playwright/test";
import { ENV } from './../../environment';
import { CartPage } from "../pages/CartPage";

let loginPage: LoginPage;
let cartPage: CartPage;

Given('el usuario ha iniciado sesión con credenciales válidas', async function ({ page }: { page: Page }) {
    loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.setUsername(ENV.USERNAME);
    await loginPage.setPassword(ENV.PASSWORD);
    await loginPage.clickLogin();

    cartPage = new CartPage(page);
});

When('el usuario agrega el producto {string} al carrito', async function ({ page }: { page: Page }, idproduct:string){
    cartPage = new CartPage(page);
    await cartPage.addProductToCart(idproduct);

});

Then('el producto {string} debe aparecer en el carrito de compras', async function ({ page }: { page: Page }, productName: string) {
    cartPage = new CartPage(page);
    await cartPage.openCart();
    const isVisible = await cartPage.isProductInCart(productName);
    expect(isVisible).toBeTruthy();
});

