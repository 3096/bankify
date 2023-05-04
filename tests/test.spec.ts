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

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/div/div[3]/div/div[1]/button');

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/div/div[3]/div/div[2]/div/div[2]/label');

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

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/div/div[3]/div/div[3]/button');

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/div/div[3]/div/div[4]/div/div[2]/label');

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

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/div/div[3]/div/div[5]/button');

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/div/div[3]/div/div[6]/div/div[2]/label');

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

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/div/div[1]/div[2]/div[2]/p/a/button');

  await page.click('//html/body/div/div[1]/div/div[3]/main/center/button[1]');

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

  await page.click('//html/body/div/div[1]/div/div[1]/div[2]/ul/li[2]/a');

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

  await page.click('//html/body/div[1]/div[1]/div/div[1]/div[2]/ul/div/ul/li/div');
  await page.click('//html/body/div[1]/div[1]/div/div[1]/div[2]/ul/div/ul/li/ul/li[1]/a');

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/form/div/div[1]/div/div/input');
  await page.locator('//html/body/div/div[1]/div/div[3]/main/div/form/div/div[1]/div/div/input').fill('24');
  await page.click('//html/body/div/div[1]/div/div[3]/main/div/form/div/div[2]/div/div/select');

  await page.selectOption("//html/body/div/div[1]/div/div[3]/main/div/form/div/div[2]/div/div/select", {
    value: "23"
  })

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/form/div/div[3]/div/div/input');
  await page.locator('//html/body/div/div[1]/div/div[3]/main/div/form/div/div[3]/div/div/input').fill('100');
  // ...

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/form/div/button');

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/form/div/div[4]/div/div/div/a');

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

  await page.click('//html/body/div[1]/div[1]/div/div[1]/div[2]/ul/div/ul/li/div');
  await page.click('//html/body/div[1]/div[1]/div/div[1]/div[2]/ul/div/ul/li/ul/li[2]/a');

  await page.selectOption("//html/body/div/div[1]/div/div[3]/main/div/form/div[1]/select", {
    value: "24---The Dough"
  })

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/form/div[2]/div/input');
  await page.locator('//html/body/div/div[1]/div/div[3]/main/div/form/div[2]/div/input').fill('500');

  await page.click('//html/body/div/div[1]/div/div[3]/main/div/form/div[3]/a');

  await page.click('//*[@id="my-modal-2"]/div/div/a');
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

  await page.click('//html/body/div[1]/div[1]/div/div[1]/div[2]/ul/div/ul/li/div');
  await page.click('//html/body/div[1]/div[1]/div/div[1]/div[2]/ul/div/ul/li/ul/li[3]/a');

  // ...
});