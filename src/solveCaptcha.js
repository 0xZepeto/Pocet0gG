const antiCaptcha = require('@anti-captchaofficial/hcaptcha');
require('dotenv').config();

antiCaptcha.setAPIKey(process.env.ANTICAPTCHA_KEY);

async function solveHcaptcha(websiteURL, websiteKey) {
    try {
        const taskId = await antiCaptcha.createTask(websiteURL, websiteKey);
        const solution = await antiCaptcha.getTaskSolution(taskId);
        return solution;
    } catch (error) {
        console.error('Error solving captcha:', error);
    }
}

module.exports = { solveHcaptcha };
