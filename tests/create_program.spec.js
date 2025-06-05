import { test, expect } from '@playwright/test';
import {login} from '../utils/sucess_login.spec';

test('create program', async ({ page }) => {

  await login(page);

  await page.getByRole('link', { name: 'Programs ' }).click();
  await page.getByRole('link', { name: 'Start New Program' }).click();
  await page.getByRole('textbox', { name: 'Program Name' }).click();
  await page.getByRole('textbox', { name: 'Program Name' }).fill('Human Resources');
  await page.getByRole('textbox', { name: 'Nick Name' }).click();
  await page.getByRole('textbox', { name: 'Nick Name' }).fill('HR');
  await page.getByRole('link', { name: 'Upload From Media' }).click();

  await page.getByRole('link', { name: 'Upload Media' }).click();
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('/home/lanka/Desktop/grass-tree-sky.jpg');
  await page.getByRole('textbox', { name: 'Enter title' }).click();
  await page.getByRole('textbox', { name: 'Enter title' }).fill('new');
  await page.getByRole('button', { name: 'Upload' }).click();

  await page.getByRole('link', { name: 'image Image' }).click();
  await page.getByRole('textbox', { name: 'Description', exact: true }).click();
  await page.getByRole('textbox', { name: 'Description', exact: true }).fill('ferteteter ttrte rterterter tr ertrtre');
  await page.locator('.switchery').click();
  await page.locator('label').filter({ hasText: 'Work Experience' }).locator('span').first().click();
  await page.locator('#experience').selectOption('-1');
  await page.locator('label').filter({ hasText: 'Evaluation and certification' }).getByRole('img').click();
  await page.locator('input[name="evaluation_amount"]').click();
  await page.locator('input[name="evaluation_amount"]').fill('200');
  await page.locator('input[name="evaluation_amount_usd"]').click();
  await page.locator('input[name="evaluation_amount_usd"]').fill('20');
  await page.locator('label').filter({ hasText: 'Bank Transfer fee' }).locator('span').first().click();
  await page.locator('#val-bankTransfer_amount').click();
  await page.locator('#val-bankTransfer_amount').fill('100');
  await page.locator('#val-bankTransfer_amount_usd').click();
  await page.locator('#val-bankTransfer_amount_usd').fill('10');
  await page.getByRole('combobox').nth(1).selectOption('Text Area');
  await page.getByRole('textbox', { name: 'Your Description Here' }).click();
  await page.getByRole('textbox', { name: 'Your Description Here' }).fill('hey hey name');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});

