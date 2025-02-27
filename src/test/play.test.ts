import { test, expect } from '@playwright/test'

test('Google 搜索', async ({ page }) => {
  await page.goto('https://www.google.com') // 打开 Google
  await page.fill('input[name="q"]', 'Playwright') // 输入搜索内容
  await page.keyboard.press('Enter') // 按回车
  await expect(page).toHaveTitle(/Playwright99/i) // 断言页面标题
})