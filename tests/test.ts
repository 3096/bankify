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
  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('cheese@soup.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('maccaroni');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');
  // ...
});

test('register test', async ({ page }) => {

  await page.goto('/register');
  await page.click('input[name="firstName"]');
  await page.locator('input[name="firstName"]').fill('Spongebob');
  await page.click('input[name="lastName"]');
  await page.locator('input[name="lastName"]').fill('Squarepants');
  await page.click('input[name="email"]');
  await page.locator('input[name="email"]').fill('spongeboy@bikinibottom.com');
  await page.click('input[name="password"]');
  await page.locator('input[name="password"]').fill('TheFormula');
  await page.click('button[class="btn btn-primary mt-6 transition duration-200 ease-in-out"]');
  // ...
});



/*test('account creation test', async ({ page }) => {
  await page.goto('/account-creation');
  await page.getByLabel('First Name').fill('name');
  await page.getByLabel('Last Name').fill('name');
  await page.getByLabel('Email').fill('name');
  await page.getByLabel('Password').fill('name');
  await page.getByText('Sign in').click();
  // ...
});

test('account number test', async ({ page }) => {
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