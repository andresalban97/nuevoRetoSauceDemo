import {test as base, createBdd } from 'playwright-bdd';

type fixtures = {
  page: import('@playwright/test').Page;
};

export const test = base.extend<fixtures>({
  
});

export const { Given, When, Then, BeforeAll, AfterAll, Before, After, BeforeWorker, AfterWorker, BeforeStep, AfterStep, BeforeScenario, AfterScenario } = createBdd(test);