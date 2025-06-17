import { test, expect } from '@playwright/test';

test.describe('playwright.dev tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Go to the starting URL
    await page.goto('https://playwright.dev/');
  });

  test('playwright.dev URL', {tag: '@fast'}, async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'firefox is intentionally skipped in this test');
    // Playwright assertions use the expect API
    await expect(page).toHaveURL('https://playwright.dev/');
  });

  test('playwright.dev title', {tag: '@fast'}, async ({ page }) => {
    // playwright.dev title contains substring
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('Get started link', {tag: '@fast'}, async ({ page }) => {
    await page.getByRole('link', { name: 'Get started' }).click();

    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

});
