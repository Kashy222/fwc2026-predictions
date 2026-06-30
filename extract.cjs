const puppeteer = require('puppeteer');
const fs = require('fs');

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  
  // 1. Reference site
  const page1 = await browser.newPage();
  await page1.goto('https://fwc2026-knockout.vercel.app/', { waitUntil: 'networkidle2' });
  const originalHTML = await page1.evaluate(() => {
    const el = document.querySelector('.circle-points') || document.querySelector('svg');
    return el ? el.outerHTML : 'NOT_FOUND';
  });
  fs.writeFileSync('original_dom.txt', originalHTML);
  console.log('Saved original DOM');

  // 2. Local site
  const page2 = await browser.newPage();
  await page2.goto('http://localhost:5175/', { waitUntil: 'networkidle2' });
  const localHTML = await page2.evaluate(() => {
    const svg = document.querySelector('svg');
    if (!svg) return 'SVG_NOT_FOUND';
    const wrapper = svg.parentElement;
    return wrapper ? wrapper.outerHTML : svg.outerHTML;
  });
  fs.writeFileSync('local_dom.txt', localHTML);
  console.log('Saved local DOM');

  await browser.close();
}

run().catch(console.error);
