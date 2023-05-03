import { chromium, test } from '@playwright/test';

test('successful login test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.close();
  // ...
});

test('incorrect login test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('cubanPete123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.close();
  // ...
});

test('go to registration test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  page.click('a[class="ml-1.5 text-blue-500 hover:text-primary-800"]');

  //await page.close();
  // ...
});

test('register test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/register');

  await page.click('input[name="firstName"]');
  await page.locator('input[name="firstName"]').fill('Spongebob');
  await page.click('input[name="lastName"]');
  await page.locator('input[name="lastName"]').fill('Squarepants');
  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('spongeboy02@bikinibottom.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('TheFormula');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  //await page.close();
  // ...
});

test('dashboard target test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.click('//html/body/div/div[1]/div/div[2]/main/div[2]/div[1]/form/button');

  await page.click('button[class="btn btn-square btn-outline"]');

  await page.close();
  // ...
});

test('dashboard starbucks test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.click('//html/body/div/div[1]/div/div[2]/main/div[2]/div[3]/form/button');

  await page.click('button[class="btn btn-square btn-outline"]');

  await page.close();
  // ...
});

test('dashboard nike test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.click('//html/body/div/div[1]/div/div[2]/main/div[2]/div[5]/form/button');

  await page.click('button[class="btn btn-square btn-outline"]');

  await page.close();
  // ...
});

test('customer help test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.click('//html/body/div/div[1]/div/div[2]/main/p[2]/a/button');

  await page.click('//html/body/div[1]/div[1]/div/div[2]/main/center/button[1]');

  // ...
});

test('searchATM test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/li[1]/a');
  await page
    .locator('//*[@id="search"]')
    .fill('San José State University, Washington Sq, San Jose, CA, USA\n');
  // ...
});

test('manager test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/li[2]/a');

  //await page.close();
  // ...
});

test('logout test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/li[3]/a');

  await page.close();
  // ...
});

test('uploadCheque test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/div[2]/ul/li/a');
  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/div[2]/ul/li/ul/li[1]/a');

  // ...
});

//internal error occurs
test('Open an Account test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/div[2]/ul/li/a');
  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/div[2]/ul/li/ul/li[2]/a');

  // ...
});

//internal error occurs
test('Transfer test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/div[1]/ul/li/a');
  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/div[1]/ul/li/ul/li[1]/a');
  // ...
});

test('Bill Payment test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('jim_carrey@themask.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('carrey123!');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/div[1]/ul/li/a');
  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/div[1]/ul/li/ul/li[2]/a');
  // ...
});

/*test('account number test', async ({ page }) => {
  await page.goto('/account/[accountNumber]');
  await page.getByLabel('First Name').fill('name');
  await page.getByLabel('Last Name').fill('name');
  await page.getByLabel('Email').fill('name');
  await page.getByLabel('Password').fill('name');
  await page.getByText('Sign in').click();
  // ...
});

test('dashboard test', async ({ page }) => {
  await page.goto('/dashboard');
  await page.getByLabel('First Name').fill('name');
  await page.getByLabel('Last Name').fill('name');
  await page.getByLabel('Email').fill('name');
  await page.getByLabel('Password').fill('name');
  await page.getByText('Sign in').click();
  // ...
});

test('payment test', async ({ page }) => {
  await page.goto('/payment');
  await page.getByLabel('First Name').fill('name');
  await page.getByLabel('Last Name').fill('name');
  await page.getByLabel('Email').fill('name');
  await page.getByLabel('Password').fill('name');
  await page.getByText('Sign in').click();
  // ...
});

test('transfer test', async ({ page }) => {
  await page.goto('/transfer');
  await page.getByLabel('First Name').fill('name');
  await page.getByLabel('Last Name').fill('name');
  await page.getByLabel('Email').fill('name');
  await page.getByLabel('Password').fill('name');
  await page.getByText('Sign in').click();
  // ...
});*/
