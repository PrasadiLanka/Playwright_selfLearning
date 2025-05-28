import { test, expect } from '@playwright/test';

test('locatingMultipleElements', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html'); 

  /*  //1.to get all the links(multiple elements) in the page
    const links = await page.$$('a');

    //to type all the link text in console use for loop
    for(const link of links){

        const linktext = await link.textContent();
        console.log(linktext);
    }
*/

    //2.to get all the product links name in the page

    await page.waitForSelector("//div[@id='tbodyid']//h4/a"); //sometimes product names may not display in the console.because use this.then this wait for until load all the element

    const products = await page.$$("//div[@id='tbodyid']//h4/a");
    for (const product of products){

        const productName = await product.textContent();
        console.log(productName);
    }
})