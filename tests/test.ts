import { chromium, test } from "@playwright/test"

test('successful login test', async ({}) => {
  const browser = await chromium.launch({
    headless : false
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

test('incorrect login test', async ({}) => {
  const browser = await chromium.launch({
    headless : false
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

//check this case again. Faisl to go to registration page
test('go to registration test', async ({}) => {
  const browser = await chromium.launch({
    headless : false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');

  page.click('href[class="ml-1.5 text-blue-500 hover:text-primary-800"]');
  // ...
});

test('register test', async ({}) => {
  const browser = await chromium.launch({
    headless : false
  });
  const context = await browser.newContext();
  const page = await context.newPage()

  await page.goto('/register');

  await page.click('input[name="firstName"]');
  await page.locator('input[name="firstName"]').fill('Spongebob');
  await page.click('input[name="lastName"]');
  await page.locator('input[name="lastName"]').fill('Squarepants');
  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('spongeboy01@bikinibottom.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('TheFormula');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  /*console.log(page.url());
  await expect(async () => {
    expect(page.url()).toEqual("http://localhost:4173/");
  }).toPass();*/
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

test('nikedeal test', async ({ page }) => {
  await page.goto('/nikedeal');
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

test('searchATM test', async ({ page }) => {
  await page.goto('/searchATM');
  await page.getByLabel('First Name').fill('name');
  await page.getByLabel('Last Name').fill('name');
  await page.getByLabel('Email').fill('name');
  await page.getByLabel('Password').fill('name');
  await page.getByText('Sign in').click();
  // ...
});

test('starbucksdeal test', async ({ page }) => {
  await page.goto('/starbucksdeal');
  await page.getByLabel('First Name').fill('name');
  await page.getByLabel('Last Name').fill('name');
  await page.getByLabel('Email').fill('name');
  await page.getByLabel('Password').fill('name');
  await page.getByText('Sign in').click();
  // ...
});

test('targetdeal test', async ({ page }) => {
  await page.goto('/targetdeal');
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
});

test('uploadCheque test', async ({ page }) => {
  await page.goto('/uploadCheque');
  await page.getByLabel('First Name').fill('name');
  await page.getByLabel('Last Name').fill('name');
  await page.getByLabel('Email').fill('name');
  await page.getByLabel('Password').fill('name');
  await page.getByText('Sign in').click();
  // ...
});*/