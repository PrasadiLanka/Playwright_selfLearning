import { test, expect } from '@playwright/test';

test.use({viewport:{width:1440,height:700}})

test.only('valid login', async ({ page }) => {
  await page.goto('https://apidm.sanmark.dev/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).fill('admin@mail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('12345678');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Login account' }).click();
  const imageName = await page.getByAltText('admin');
  await expect(imageName).toBeVisible();

  console.log("login successful");

});

test('empty-fields login', async ({ page }) => {
  await page.goto('https://apidm.sanmark.dev/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).fill('');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('');
 
  console.log("unsucessful login");

});

test('valid-email and invalid password login', async ({ page }) => {
  await page.goto('https://apidm.sanmark.dev/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).fill('admin@mail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('123456789');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Login account' }).click();
  const errorLocator = await page.locator("//strong[normalize-space()='Sorry, your password or email was incorrect.'][1]");
  await expect(errorLocator).toBeVisible();
  const errMsg = await errorLocator.textContent();

  console.log(errMsg);

});


test('invalid-email and valid password login', async ({ page }) => {
  await page.goto('https://apidm.sanmark.dev/');

  console.log(await page.viewportSize().width)
  console.log(await page.viewportSize().height)

  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).fill('admin123@mail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('123456789');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Login account' }).click();
  const errorLocator = await page.locator("//strong[normalize-space()='Sorry, your password or email was incorrect.'][1]");
  await expect(errorLocator).toBeVisible();
  const errMsg = await errorLocator.textContent();

  console.log(errMsg);

});