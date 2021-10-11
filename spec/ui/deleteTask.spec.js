const db = require('../../src/persistence');
const puppeteer = require('puppeteer');

describe('delete item from UI', () => {
  test('It should delete item from UI', async () => {

    const browser = await puppeteer.launch({ headless: true ,
      args: ["--no-sandbox", "--disabled-setupid-sandbox"]
    });
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/');
    await expect(page.title()).resolves.toMatch('Todo App');

    const deleteButton = '#removeBt'
    await page.waitForSelector(deleteButton);
    await page.focus(deleteButton)        

    await db.init();
    //const items = await db.getItems();
    //expect(items.length).toBe(0);

    await browser.close();
  });
});
