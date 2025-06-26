import { test, expect } from '@playwright/test';
import {login} from '../utils/sucess_login.spec';

test.only('batch_create_successfully', async ({ page }) => { 

  await login(page);

  await page.getByRole('link', { name: 'Batch' }).click();
  await page.getByRole('link', { name: 'Create Batch' }).click();
  await page.locator('#val-program').selectOption('12');
  await page.getByRole('textbox', { name: 'Batch' }).click();
  await page.getByRole('textbox', { name: 'Batch' }).fill('A25-02');
  await page.getByRole('textbox', { name: 'Start Date' }).fill('2025-07-11');
  await page.getByRole('textbox', { name: 'End Date' }).fill('2028-01-01');
  await page.getByRole('textbox', { name: 'Duration' }).click();
  await page.getByRole('textbox', { name: 'Duration' }).fill('36');
  await page.getByLabel('Details').locator('div').filter({ hasText: 'Installments' }).locator('span').click();
  await page.locator('div:nth-child(9) > .col-lg-9 > .switchery').click();
  await page.locator('#classes-form div').filter({ hasText: 'Monday Start Time End Time' }).locator('span').click();

  await page.locator('div:nth-child(2) > div > .switchery').click();
  await page.locator('#time_1').click();

  await page.evaluate(() => {
    const input1 = document.getElementById('time_1');
    input1.removeAttribute('disabled');
    input1.value = '10:30';
    input1.dispatchEvent(new Event('change', { bubbles: true }));
  });

  await page.locator("(//input[@id='end_time_1'])[1]").click();

  await page.evaluate(() => {
    const input2 = document.getElementById('end_time_1');
    input2.removeAttribute('disabled');
    input2.value = '17:45';
    input2.dispatchEvent(new Event('change', { bubbles: true }));
  });
  
  await page.waitForTimeout(2000);
  
  await page.locator('#accept-registrations span').click();
  await page.locator('#enable-lms span').click();
  await page.locator('#visible-date span').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Currencies').selectOption('LKR');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('spinbutton', { name: 'Rack Rate Rack Rate' }).click();
  await page.getByRole('spinbutton', { name: 'Rack Rate Rack Rate' }).fill('100000');
  await page.getByRole('spinbutton', { name: 'Installment Rack Rate' }).click();
  await page.getByRole('spinbutton', { name: 'Installment Rack Rate' }).fill('120000');
  await page.locator('#val-plan-name').click();
  await page.locator('#val-plan-name').fill('testing-1');
  await page.locator('#val-valid-till').fill('2025-06-14');
  await page.locator('#val-full-payment-price').click();
  await page.locator('#val-full-payment-price').fill('90000');
  await page.locator('#val-installment-price').click();
  await page.locator('#val-installment-price').fill('110000');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#val-lkrAdditionalDiscount').click();
  await page.locator('#val-lkrAdditionalDiscount').fill('45');
  await page.locator('#val-lkrDownPayment').click();
  await page.locator('#val-lkrDownPayment').fill('4500');
  await page.getByPlaceholder('%').click();
  await page.getByPlaceholder('%').fill('24');
  await page.locator('#lkrDue').click();
  await page.locator('#lkrDue').fill('3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('#lkrBalance1').click();
  await page.locator('#lkrBalance1').fill('35');
  await page.locator('#insPlan').getByPlaceholder('Days').click();
  await page.locator('#insPlan').getByPlaceholder('Days').fill('4');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('#lkrBalance2').click();
  await page.locator('#lkrBalance2').fill('41');
  await page.getByPlaceholder('Days').nth(2).click();
  await page.getByPlaceholder('Days').nth(2).fill('5');
  await page.getByRole('button', { name: 'Submit' }).click();
});




test  ('duplicate_batch_number', async ({ page }) => { 

  await login(page);

  await page.getByRole('link', { name: 'Batch ' }).click();
  await page.getByRole('link', { name: 'Create Batch' }).click();
  await page.locator('#val-program').selectOption('12');
  await page.getByRole('textbox', { name: 'Batch' }).click();
  await page.getByRole('textbox', { name: 'Batch' }).fill('A25-01');

  await page.getByRole('textbox', { name: 'Start Date' }).fill('2025-07-11');
  await page.getByRole('textbox', { name: 'End Date' }).fill('2028-01-01');
  await page.getByRole('textbox', { name: 'Duration' }).click();
  await page.getByRole('textbox', { name: 'Duration' }).fill('36');
  await page.getByLabel('Details').locator('div').filter({ hasText: 'Installments' }).locator('span').click();
  await page.locator('div:nth-child(9) > .col-lg-9 > .switchery').click();
  await page.locator('#classes-form div').filter({ hasText: 'Monday Start Time End Time' }).locator('span').click();

  await page.locator('div:nth-child(2) > div > .switchery').click();
  await page.locator('#time_1').click();

  await page.evaluate(() => {
    const input1 = document.getElementById('time_1');
    input1.removeAttribute('disabled');
    input1.value = '10:30';
    input1.dispatchEvent(new Event('change', { bubbles: true }));
  });

  await page.locator("(//input[@id='end_time_1'])[1]").click();

  await page.evaluate(() => {
    const input2 = document.getElementById('end_time_1');
    input2.removeAttribute('disabled');
    input2.value = '17:45';
    input2.dispatchEvent(new Event('change', { bubbles: true }));
  });
  
  await page.waitForTimeout(2000);
  
  await page.locator('#accept-registrations span').click();
  await page.locator('#enable-lms span').click();
  await page.locator('#visible-date span').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Currencies').selectOption('LKR');
  await page.getByRole('button', { name: 'Next' }).click();

  const errMsg = page.locator("(//strong[contains(text(),'Batch ID already exists. Please use a different ID')])[1]");
  await expect (errMsg).toBeVisible();
  console.log("Already have batch from this batch number");


});


test('same_batch_start_date', async ({ page }) => { 

  await login(page);

  await page.getByRole('link', { name: 'Batch ' }).click();
  await page.getByRole('link', { name: 'Create Batch' }).click();
  await page.locator('#val-program').selectOption('12');
  await page.getByRole('textbox', { name: 'Batch' }).click();
  await page.getByRole('textbox', { name: 'Batch' }).fill('A25-05');
  await page.getByRole('textbox', { name: 'Start Date' }).fill('2025-07-09');
  await page.getByRole('textbox', { name: 'End Date' }).fill('2028-01-01');
  await page.getByRole('textbox', { name: 'Duration' }).click();
  await page.getByRole('textbox', { name: 'Duration' }).fill('36');
  await page.getByLabel('Details').locator('div').filter({ hasText: 'Installments' }).locator('span').click();
  await page.locator('div:nth-child(9) > .col-lg-9 > .switchery').click();
  await page.locator('#classes-form div').filter({ hasText: 'Monday Start Time End Time' }).locator('span').click();

  await page.locator('div:nth-child(2) > div > .switchery').click();
  await page.locator('#time_1').click();

  await page.evaluate(() => {
    const input1 = document.getElementById('time_1');
    input1.removeAttribute('disabled');
    input1.value = '10:30';
    input1.dispatchEvent(new Event('change', { bubbles: true }));
  });

  await page.locator("(//input[@id='end_time_1'])[1]").click();

  await page.evaluate(() => {
    const input2 = document.getElementById('end_time_1');
    input2.removeAttribute('disabled');
    input2.value = '17:45';
    input2.dispatchEvent(new Event('change', { bubbles: true }));
  });
  
  await page.waitForTimeout(2000);
  
  await page.locator('#accept-registrations span').click();
  await page.locator('#enable-lms span').click();
  await page.locator('#visible-date span').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Currencies').selectOption('LKR');
  await page.getByRole('button', { name: 'Next' }).click();

  const errMsg2 = page.locator("(//strong[contains(text(),'Start Date already exists. Please use a different ')])[1]");
  await expect (errMsg2).toBeVisible();
  console.log("Already have batch from this batch start date");


});

test('required_fields', async ({ page }) => { 

  await login(page);

  await page.getByRole('link', { name: 'Batch' }).click();
  await page.getByRole('link', { name: 'Create Batch' }).click();

  // await page.evaluate(() => {
  //   window.scrollBy(0, 500); // scrolls down one viewport
  // });
  
  await page.locator('#val-program').selectOption('');
  await page.getByRole('textbox', { name: 'Batch' }).click();
  await page.getByRole('textbox', { name: 'Batch' }).fill('');
  await page.getByRole('textbox', { name: 'Start Date' }).fill('');
  await page.getByRole('textbox', { name: 'End Date' }).fill('');
  await page.getByRole('textbox', { name: 'Duration' }).click();
  await page.getByRole('textbox', { name: 'Duration' }).fill('');
  await page.getByLabel('Currencies').selectOption('');

  await page.getByRole('button', { name: 'Next' }).click();

  const programNameErrMsg = page.locator("(//strong[normalize-space()='Program Name is required'])[1]");
  await expect (programNameErrMsg).toBeVisible();
  console.log("Program Name is Required");

  const batchErrMsg = page.locator("(//strong[normalize-space()='Batch is required'])[1]");
  await expect (batchErrMsg).toBeVisible();
  console.log("Batch is Required");

  const startDateErrMsg = page.locator("(//strong[normalize-space()='Start date is required'])[1]");
  await expect (startDateErrMsg).toBeVisible();
  console.log("Batch Start Date is Required");

  const endDateErrMsg = page.locator("(//strong[normalize-space()='End date is required'])[1]");
  await expect (endDateErrMsg).toBeVisible();
  console.log("Batch End Date is Required");

  const durationErrMsg = page.locator("(//strong[normalize-space()='Duration is required'])[1]");
  await expect (durationErrMsg).toBeVisible();
  console.log("Duration is Required");

  const currencyErrMsg = page.locator("(//strong[normalize-space()='Currencies is required'])[1]");
  await expect (currencyErrMsg).toBeVisible();
  console.log("Currency is Required");

});

