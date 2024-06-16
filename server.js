const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/api/get-video', async (req, res) => {
    try {
        const response = await axios.post('https://shoti-srv1.onrender.com/api/v1/get', {
            apikey: 'shoti-1hg4gifgnlfdmeslom8'
        });
        res.json({ url: response.data.data.url });
    } catch (error) {
        res.status(500).send('Error fetching video');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
