import { expect, test } from '@playwright/test';

test('navigates at 320px, validates contact and shows an unknown-route page', async ({
  page,
}) => {
  const browserErrors: string[] = [];
  page.on('pageerror', (error) => browserErrors.push(error.message));
  await page.goto('/');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Melusi Sibanda' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Download CV', exact: true }),
  ).toHaveAttribute('download', '');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused();
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Contact' })
    .click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole('main')).toBeFocused();
  await page.getByRole('button', { name: 'Prepare email' }).click();
  await expect(page.getByRole('textbox', { name: 'Name' })).toBeFocused();
  for (const route of [
    '/',
    '/about',
    '/skills',
    '/projects',
    '/achievements',
    '/contact',
    '/invalid-route',
  ]) {
    await page.goto(route);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(320);
  }
  await expect(
    page.getByRole('heading', { name: 'Page not found' }),
  ).toBeVisible();
  expect(browserErrors).toEqual([]);
});

test('serves recruiter content and navigation without JavaScript', async ({
  browser,
}) => {
  const page = await browser.newPage({ javaScriptEnabled: false });
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Melusi Sibanda', level: 1 }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'View projects' }).click();
  await expect(
    page.getByRole('heading', { name: 'Egumeni Eats' }),
  ).toBeVisible();
  await page.close();
});
