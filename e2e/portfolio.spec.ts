import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  test('home page loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('navigation is present and functional', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav, .nav, [role="navigation"]').first();
    await expect(nav).toBeVisible();
  });

  test('projects section is present', async ({ page }) => {
    await page.goto('/');
    const projectsSection = page.locator('#projects, .projects, [id*="project"], section:has-text("project")').first();
    await expect(projectsSection).toBeVisible({ timeout: 5000 });
  });

  test('resume section is present', async ({ page }) => {
    await page.goto('/');
    const resumeSection = page.locator('#resume, .resume, section:has-text("resume")').first();
    await expect(resumeSection).toBeVisible({ timeout: 5000 });
  });

  test('contact section has email link', async ({ page }) => {
    await page.goto('/');
    const emailLink = page.locator('a[href*="mailto:"]').first();
    await expect(emailLink).toBeVisible();
  });

  test('github link is present', async ({ page }) => {
    await page.goto('/');
    const githubLink = page.locator('a[href*="github.com"]').first();
    await expect(githubLink).toBeVisible();
  });

  test('linkedin link is present', async ({ page }) => {
    await page.goto('/');
    const linkedinLink = page.locator('a[href*="linkedin.com"]').first();
    await expect(linkedinLink).toBeVisible();
  });

  test('no console errors on page load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(errors.filter(e => !e.includes('DevTools') && !e.includes('extension')).length).toBe(0);
  });
});
