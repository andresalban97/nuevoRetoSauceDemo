import { expect } from '@playwright/test';
import { Page } from 'playwright';

import { ENV } from './../../environment';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async click(locator: string) {
        await this.page.locator(locator).click();
    }

    async type(locator: string, value: string) {
        await this.page.locator(locator).fill(value);
    }


    async select(locator: string, value: string) {
        await this.page.locator(locator).selectOption(value);
    }


    async getText(locator: string) {
        return await this.page.locator(locator).innerText();
    }

    async hover(locator: string) {
        await this.page.locator(locator).hover();
    }

    async   navigateTo(url: string) {
        await this.page.goto(ENV.baseUrl + url);
    }



    async waitForTimeout(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }

    async validateTitle(expectedTitle: string) {
        const title = await this.page.title();
        expect(title).toBe(expectedTitle);
        console.log(`The Page Title is: ${title}`);
    }

}