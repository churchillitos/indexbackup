const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/random-shoti', async (req, res) => {
    try {
        const response = await axios.post('https://shoti-srv1.onrender.com/api/v1/get', {
            apikey: 'shoti-1hg4gifgnlfdmeslom8'
        });
        res.json(response.data.data);
    } catch (err) {
        res.status(500).send('Error retrieving data');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
