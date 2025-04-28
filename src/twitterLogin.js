const puppeteer = require('puppeteer');

async function loginTwitter(username, password) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://twitter.com/login', { waitUntil: 'networkidle2' });
    await page.waitForSelector('input[name="text"]');

    await page.type('input[name="text"]', username);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);

    await page.waitForSelector('input[name="password"]', { timeout: 10000 });
    await page.type('input[name="password"]', password);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);

    const cookies = await page.cookies();
    const authToken = cookies.find(cookie => cookie.name === 'auth_token')?.value;

    if (!authToken) {
        throw new Error('Gagal mendapatkan auth_token');
    }

    await browser.close();
    return authToken;
}

module.exports = { loginTwitter };
