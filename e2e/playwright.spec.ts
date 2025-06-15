import { test, expect } from '@playwright/test';

test.describe('playwright.dev tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Go to the starting URL
    await page.goto('https://playwright.dev/');
  });

  test('playwright.dev URL', async ({ page }) => {
    // Playwright assertions use the expect API
    await expect(page).toHaveURL('https://playwright.dev/');
  });

  test('playwright.dev title', async ({ page }) => {
    // playwright.dev title contains substring
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('Get started link', async ({ page }) => {
    await page.getByRole('link', { name: 'Get started' }).click();

    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

});
