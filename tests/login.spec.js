import { test, expect } from '@playwright/test';

test('has title', async ({ page }) =>
{
    await page.goto("http://orangehrm.qedgetech.com");
    await page.locator("#txtUsername").fill("Admin");
    await page.locator("#txtPassword").fill("Qedge123!@#");
    await page.getByRole("button",{name: "LOGIN"}).click();    

});
