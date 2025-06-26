import { test, expect } from '@playwright/test';
import {login} from '../utils/sucess_login.spec';


async function addStudent(page, firstName, lastName, email, phoneNumber, clickStudentsLink = false) {

  if (clickStudentsLink) {
    await page.getByRole('link', { name: 'Students' }).click();
  }

  //await page.getByRole('link', { name: 'Students' }).click();
  await page.getByRole('link', { name: 'Add Student' }).click();
  await page.locator('#select2-status-container').click();
  await page.getByRole('treeitem', { name: 'Active', exact: true }).click();
  await page.getByLabel('General').locator('div').filter({ hasText: 'Employability Guarantee' }).locator('span').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('spinbutton', { name: 'Phone Number' }).click();
  await page.getByRole('spinbutton', { name: 'Phone Number' }).fill(phoneNumber);
  await page.getByRole('button', { name: 'Save Details' }).click();

  await page.waitForTimeout(3000);

}

  // async function fillPersonalDetails(page) {
  //   await page.getByRole('tab', { name: 'Personal' }).click();
  //   await page.getByPlaceholder('Date of Birth').fill('1999-03-27');
  //   await page.locator('#select2-gender-container').click();
  //   await page.getByRole('treeitem', { name: 'Female' }).click();
  //   await page.getByRole('textbox', { name: 'NIC / Passport' }).fill('995876051V');
  //   await page.getByRole('textbox', { name: 'Nationality' }).fill('sinhala');
  //   await page.getByRole('textbox', { name: 'Certificate Name' }).fill('ISTQB');
  //   await page.getByRole('textbox', { name: 'Full Name' }).fill('Lanka Prasadini');
  //   await page.getByRole('textbox', { name: 'Address' }).fill('kahatapitiya, Batapola');
  //   await page.getByRole('textbox', { name: 'City' }).fill('Ambalangoda');
  //   await page.getByRole('textbox', { name: 'Postal/ZIP Code' }).fill('12345');
  //   await page.getByRole('combobox', { name: 'Sri Lanka' }).locator('span').nth(2).click();
  //   await page.getByRole('treeitem', { name: 'Sri Lanka' }).locator('span').click();
  //   await page.getByRole('button', { name: 'Save Details' }).click();
  // }

  async function fillPersonalDetails(page, Birth, NIC, Nationality, Certificate, FullName, Address, City, Postal) {
    await page.getByRole('tab', { name: 'Personal' }).click();
    await page.getByPlaceholder('Date of Birth').fill(Birth);
    await page.locator('#select2-gender-container').click();
    await page.getByRole('treeitem', { name: 'Female' }).click();
    await page.getByRole('textbox', { name: 'NIC / Passport' }).fill(NIC);
    await page.getByRole('textbox', { name: 'Nationality' }).fill(Nationality);
    await page.getByRole('textbox', { name: 'Certificate Name' }).fill(Certificate);
    await page.getByRole('textbox', { name: 'Full Name' }).fill(FullName);
    await page.getByRole('textbox', { name: 'Address' }).fill(Address);
    await page.getByRole('textbox', { name: 'City' }).fill(City);
    await page.getByRole('textbox', { name: 'Postal/ZIP Code' }).fill(Postal);
    await page.getByRole('combobox', { name: 'Sri Lanka' }).locator('span').nth(2).click();
    await page.getByRole('treeitem', { name: 'Sri Lanka' }).locator('span').click();
    await page.getByRole('button', { name: 'Save Details' }).click();
  }

  async function fillWorkAndEducationDetails(page, Occupation,Field,Company,JobTitle, EducationStatement, HighestQualification, ALSylabus, Years, Stream, Subject1, Subject2, Subject3 ) {
    await page.getByRole('tab', { name: 'Work & Education' }).click();
    await page.getByRole('textbox', { name: 'Occupation' }).fill(Occupation);
    await page.getByRole('textbox', { name: 'Field' }).fill(Field);
    await page.getByLabel('Work & Education').getByText('Choose Option').click();
    await page.getByRole('treeitem', { name: '3 + years' }).click();
    await page.getByRole('textbox', { name: 'Company' }).fill(Company);
    await page.getByRole('textbox', { name: 'Job Title' }).fill(JobTitle);
    await page.getByRole('textbox', { name: 'Education Statement' }).fill(EducationStatement);
    await page.getByRole('textbox', { name: 'Highest Qualification' }).fill(HighestQualification);
    await page.getByRole('textbox', { name: 'A/L Sylabus' }).fill(ALSylabus);
    await page.getByRole('textbox', { name: 'Years', exact: true }).fill(Years);
    await page.getByRole('textbox', { name: 'Stream' }).fill(Stream);
    await page.getByRole('textbox', { name: 'Subject 1' }).fill(Subject1);
    await page.getByRole('textbox', { name: 'Subject 2' }).fill(Subject2);
    await page.getByRole('textbox', { name: 'Subject 3' }).fill(Subject3);
    await page.getByRole('button', { name: 'Save Details' }).click();
  }

    async function fillUploads(page) {
      await page.getByRole('tab', { name: 'Uploads' }).click();
      await page.getByRole('tab', { name: 'Next' }).click();

      console.log("finish");
    }


test('test', async ({ page }) => {
  
  await login(page);

  // Add first student
  await addStudent(page, 'Lanka-62', 'Prasadini-62', 'lanka+62@thesanmark.com', '1234567890', true);
  await fillPersonalDetails(page, '1999-03-27', '995876051V', 'Sinhala', 'ISTQB', 'Lanka Prasadini', 'Kahatapitiya, Batapola', 'Ambalangoda', '12345');
  await fillWorkAndEducationDetails(page, 'Engineer','IT', 'Sanmark', 'QA Engineer', 'Degree Holder', 'Degree', 'Biology','4', 'science', 'bio', 'che', 'phy'  );
  await fillUploads(page);
  
  // // Add second student
  // await addStudent(page, 'Lanka-51', 'Prasadini-51', 'lanka+51@thesanmark.com', '1234567890');
  
  // // Add third student
  // await addStudent(page, 'Lanka-52', 'Prasadini-52', 'lanka+52@thesanmark.com', '1234567890');
});