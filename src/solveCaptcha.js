const anticaptcha = require('anticaptcha')('YOUR_ANTI_CAPTCHA_KEY');
require('dotenv').config();

anticaptcha.setKey(process.env.ANTICAPTCHA_KEY);

async function solveHcaptcha(websiteURL, websiteKey) {
    return new Promise((resolve, reject) => {
        anticaptcha.solveHcaptcha(websiteKey, websiteURL, {}, function (err, token) {
            if (err) {
                console.error('Captcha solving error:', err);
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = { solveHcaptcha };
