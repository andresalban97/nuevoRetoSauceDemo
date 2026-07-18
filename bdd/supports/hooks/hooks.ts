 import { Before, After, AfterWorker} from "../../fixtures";
import {  Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

Before(async function ({ page }: { page: Page }) {
  const world = this as any;
  world.page = page;
  console.log('Before hook: Executed before each scenario');
});

After(async function ({ page }: { page: Page }) {
  if (page) {
    const screenshotsDir = path.resolve('reports/screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    const screenshotPath = path.join(screenshotsDir, `${Date.now()}.png`);
    const screenshotBuffer = await page.screenshot({ path: screenshotPath, fullPage: true });
    const world = this as any;
    if (world && typeof world.attach === 'function') {
      world.attach(screenshotBuffer, 'image/png');
    }
    console.log('Escenario Exitoso');
  }
});
