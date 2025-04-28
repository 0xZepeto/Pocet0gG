require('dotenv').config();
const { readAccounts, readAddress } = require('./utils');
const { loginTwitter } = require('./twitterLogin');
const { solveHcaptcha } = require('./solveCaptcha');
const { claimFaucet } = require('./faucet');

async function main() {
    const accounts = readAccounts();
    const address = readAddress();

    for (const account of accounts) {
        console.log(`Login Twitter: ${account.username}`);
        const authToken = await loginTwitter(account.username, account.password);
        console.log('Auth Token berhasil didapat.');

        console.log('Menyelesaikan Captcha...');
        const captchaToken = await solveHcaptcha('https://faucet.0g.ai', 'sitekey-hcaptcha-di-faucet');
        console.log('Captcha selesai.');

        console.log('Melakukan klaim...');
        const result = await claimFaucet(authToken, address, captchaToken);

        console.log('Hasil klaim:', result);
    }
}

main();
