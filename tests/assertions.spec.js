import { test, expect } from '@playwright/test';

test('AssertionTest', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

  //01.verify that go to page URL has that expected URL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");

  //02.verify title has in the page
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  //03.check the element is visible
  const logoElement = await page.locator("(//img[@alt='nopCommerce demo store'])[1]");
  await expect (logoElement).toBeVisible();

  //04. check the element is enable 
  const searchBox = await page.locator("(//input[@id='small-searchterms'])[1]");
  await expect (searchBox).toBeEnabled;

  //05. check the radio button is click or not 
  const raidoBtn = await page.locator("(//input[@id='gender-female'])[1]");
  await raidoBtn.click(); //click the checkbox 
  await expect (raidoBtn).toBeChecked(); //check the radiobtn is select or not

  //06. chec
});