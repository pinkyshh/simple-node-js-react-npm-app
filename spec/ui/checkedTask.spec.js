const db = require('../../src/persistence');
const puppeteer = require('puppeteer');

describe('Checked Item', () => {
  test('It should Check item from UI', async () => {

    const browser = await puppeteer.launch({ headless: true ,
      args: ["--no-sandbox", "--disabled-setupid-sandbox"],
    });
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/');
    await expect(page.title()).resolves.toMatch('Todo App');

    const checkBoxSelector = '#root > div > div > div > div > div > div:nth-child(1) > button'
    await page.waitForSelector(checkBoxSelector);
    await page.focus(checkBoxSelector);

    db.init()

    await browser.close();
  });
});
