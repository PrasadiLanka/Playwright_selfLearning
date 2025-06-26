import { test, expect } from '@playwright/test';

test.use({viewport:{width:1440,height:700}})

/* when check in the locally gives browser error for security purpose to avoid that use this lines
when check in the live can remove this */ 

test.use({
  ignoreHTTPSErrors: true,
  baseURL: 'https://localhost:8000',
});


export async function login(page, email = 'admin@mail.com', password = '12345678') {

  //await page.goto('https://apidm.sanmark.dev/');
  await page.goto('/login');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).click();
  await page.getByRole('textbox', { name: 'example@mail.com' }).fill(email);
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill(password);
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Login' }).click();
  const imageName = await page.getByAltText('admin');
  await expect(imageName).toBeVisible();

  console.log("login successful");

}