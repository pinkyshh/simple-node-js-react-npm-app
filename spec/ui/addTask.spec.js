const fs = require('fs');
const puppeteer = require('puppeteer');
const db = require('../../src/persistence');

describe('Add new item from UI', () => {

  test('It should add new item from UI', async () => {
    const browser = await puppeteer.launch({ headless: true ,
      args: ["--no-sandbox", "--disabled-setupid-sandbox"],
    });
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/');
    await expect(page.title()).resolves.toMatch('Todo App');

    const textToTest = "JamesMagical";
    const fillSelector = '#root > div > div > div > form > div > input'
    await page.waitForSelector(fillSelector);
    await page.focus(fillSelector)        
    await page.keyboard.type(textToTest);
    await page.keyboard.type(String.fromCharCode(13));

    await page.waitForSelector("#addItem");

    await db.init();

    await browser.close();
  });
});
