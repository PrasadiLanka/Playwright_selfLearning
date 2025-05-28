import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');

const pageTitle = await page.title();
console.log("page title is " ,pageTitle);

await expect (page).toHaveTitle("STORE");

const pageURL = page.url();
console.log("Page URL is ", pageURL);

await expect (page).toHaveURL("https://demoblaze.com/index.html");

})