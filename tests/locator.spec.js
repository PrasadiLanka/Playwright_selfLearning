import { test, expect } from '@playwright/test';

test('locator', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');

//1.click on login button in nav bar
//method 1 :- await page.locator('id=login2').click
//method 2 :- 
await page.click('id=login2')

//2.provide username
//method 1 :- await  page.locator('#loginusername').fill('Lanka');
//method 2 :-await page.type('#loginusername', 'Lanka');
//method 3 :- 
await page.fill('#loginusername', 'Lanka');

//3.provide password
await page.fill('#loginpassword', 'Lanka123#');

//4.click on login button
await page.click("(//button[normalize-space()='Log in'])[1]");

//5.verify logout button is presence
const logoutBtn = await page.locator("(//a[normalize-space()='Log out'])[1]");
await expect (logoutBtn).toBeVisible();

await page.close();
})