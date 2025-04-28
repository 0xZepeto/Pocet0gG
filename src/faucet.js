const axios = require('axios');

async function claimFaucet(authToken, address, captchaToken) {
    try {
        const response = await axios.post('https://faucet.0g.ai/api/claim', {
            address,
            authToken,
            captchaToken
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Gagal klaim faucet:', error.response ? error.response.data : error.message);
    }
}

module.exports = { claimFaucet };
