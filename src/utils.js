const fs = require('fs');

function readAccounts() {
    const data = fs.readFileSync('./config/accounts.json');
    return JSON.parse(data);
}

function readAddress() {
    return fs.readFileSync('./config/address.txt', 'utf8').trim();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { readAccounts, readAddress, sleep };
