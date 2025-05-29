import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://apidm.sanmark.dev/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).fill('admin@mail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('12345678');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Login account' }).click();
});