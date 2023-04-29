import { expect, test } from '@playwright/test';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    /* Test against branded browsers. */
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or "msedge-beta" or 'msedge-dev'
    },
  ],
});

test('basic test', async ({ page }) => {
  await page.goto('/');

  await expect(async () => {
    expect(page.url()).toEqual("http://localhost:4173/");
  }).toPass();

  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('cheese@soup.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('maccaroni');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');
  // ...
});

test('go to registration test', async ({ page }) => {
  await page.goto('/');

  await expect(async () => {
    expect(page.url()).toEqual("http://localhost:4173/");
  }).toPass();

  await page.click('href[class="ml-1.5 text-blue-500 hover:text-primary-800"]');

  /*await expect(async () => {
    expect(page.url()).toEqual("http://localhost:4173/register");
  }).toPass();*/
  // ...
});

test('register test', async ({ page }) => {
  await page.goto('/register');

  await expect(async () => {
    expect(page.url()).toEqual("http://localhost:4173/register");
  }).toPass();

  await page.click('input[name="firstName"]');
  await page.locator('input[name="firstName"]').fill('Spongebob');
  await page.click('input[name="lastName"]');
  await page.locator('input[name="lastName"]').fill('Squarepants');
  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('spongeboy@bikinibottom.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('TheFormula');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');

  /*console.log(page.url());
  await expect(async () => {
    expect(page.url()).toEqual("http://localhost:4173/");
  }).toPass();*/
  // ...
});

test('dashboard target test', async ({ page }) => {
  await page.goto('/dashboard');

  await expect(async () => {
    expect(page.url()).toEqual("http://localhost:4173/dashboard");
  }).toPass();

  await page.locator('form[action="/targetdeal"]').locator('button[class="btn btn-info"]').click;
  // ...
  
});

test('dashboard starbucks test', async ({ page }) => {
  await page.goto('/dashboard');
  await page.locator('form[action="/starbucksdeal"]').locator('button[class="btn btn-info"]').click;
  // ...
  /* await expect(async () => {
    expect(page.url()).toBe("/starbucksdeal");
  }).toPass(); */
});

test('dashboard nike test', async ({ page }) => {
  await page.goto('/dashboard');
  await page.locator('form[action="/nikedeal"]').locator('button[class="btn btn-info"]').click;
  // ...
  /* await expect(async () => {
    expect(page.url()).toBe("/nikedeal");
  }).toPass(); */
});

test('account creation test', async ({ page }) => {
  await page.goto('/account-creation');

  await expect(async () => {
    expect(page.url()).toEqual("http://localhost:4173/account-creation");
  }).toPass();

  
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