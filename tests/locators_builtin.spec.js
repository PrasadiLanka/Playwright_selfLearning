/*
page.getByAltText() to locate an element, usually image, by its alternative text.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).*/

import { test , expect } from '@playwright/test';

test('builtin_locator', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//1.check the logo availability using it's Alter text    
const logo = await page.getByAltText('company-branding');
await expect (logo).toBeVisible();

//2.fill the username and password using placeholder value.
const username = await page.getByPlaceholder('Username').fill("Admin");
const password = await page.getByPlaceholder('Password').fill("admin123");

//3.click the button getting it's role
const button = await page.getByRole('button', {type: 'submit'}).click(); /*in this addtionally add the type. type is the attribute of submit button. 
                                                                            we can use any attribut in that element instead of 'submit'. getByLabel also use like this*/


})
