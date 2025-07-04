import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Lanka');
  await page.locator('#loginpassword').fill('Lanka123#');
  await page.getByRole('button', { name: 'Log in' }).click();
});



