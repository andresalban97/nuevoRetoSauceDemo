 import {  Given, When, Then } from '../fixtures';
import { CartPage } from "../pages/CartPage";
import { expect, Page } from "@playwright/test";
import { CheckoutPage } from "../pages/CheckoutPage";
import { faker } from '@faker-js/faker';

let cartPage: CartPage;
let checkoutPage: CheckoutPage;

When('el usuario abre el carrito', async function ({ page }: { page: Page }) {
    cartPage = new CartPage(page);
    await cartPage.openCart();

    checkoutPage = new CheckoutPage(page);

});

When('el usuario inicia el proceso de checkout', async function ({ page }: { page: Page }) {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.startCheckout();
});

When('el usuario completa la información de compra', async function ({ page }: { page: Page }) {
    checkoutPage = new CheckoutPage(page);
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const postalCode = faker.location.zipCode('#####')
    await checkoutPage.fillCheckoutInfo(firstName, lastName, postalCode);
    await checkoutPage.confirmOrder();
});

Then('debe ver el mensaje de confirmación de compra', async function ({ page }: { page: Page }) {
    checkoutPage = new CheckoutPage(page);
    const isVisible = await checkoutPage.hasConfirmationMessage();
    expect(isVisible).toBeTruthy();
});