import { chromium } from 'playwright-core';
const OUT = process.argv[2];
const NAME = process.argv[3] || 'Robotic Arm Digital Twin';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
// find the target project card by its heading and bring into view
const heading = page.getByRole('heading', { name: new RegExp(NAME, 'i') }).first();
await heading.scrollIntoViewIfNeeded();
await page.waitForTimeout(2500); // let the mp4 autoplay into a filled frame
// screenshot the whole project card (nearest bordered container)
const card = heading.locator('xpath=ancestor::div[contains(@class,"rounded-[20px]")][1]');
try { await card.screenshot({ path: OUT }); }
catch { await page.screenshot({ path: OUT }); }
await browser.close();
console.log('OK');
