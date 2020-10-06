import puppeteer from 'puppeteer';

const browserOptions = {
  args: [
    '--window-size=1920,1080',
    '--start-maximized',
  ],
  defaultViewport: null,
};

describe('icon list', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
  });

  it('should match the previous screenshot', async () => {
    const page = await browser.newPage();

    await page.setViewport({
      width: 1920,
      height: 1080
    })

    await page.goto('http://127.0.0.1:8080/');

    const image = await page.screenshot({ fullPage: true });

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
