import puppeteer from 'puppeteer';

describe('icon list', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('should match the previous screenshot', async () => {
    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:8080/');

    const image = await page.screenshot({ fullPage: true });

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
