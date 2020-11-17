import puppeteer from 'puppeteer';

const browserOptions = {
  args: [
    '--window-size=1920,1080',
    '--start-maximized',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
  ],
  defaultViewport: null,
};

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('icon list', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
  });

  it('should match the previous screenshot', async () => {
    const page = await browser.newPage();

    await page.setViewport({
      height: 1080,
      width: 1920,
    });

    await page.goto('http://127.0.0.1:8080/');

    await timeout(2000);

    const image = await page.screenshot({ fullPage: true });

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
