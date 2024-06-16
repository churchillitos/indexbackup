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
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Random Shoti</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f0f0f0;
                    margin: 0;
                    flex-direction: column;
                }
                button {
                    padding: 10px 20px;
                    margin: 10px;
                    font-size: 16px;
                }
                video {
                    width: 80%;
                    max-width: 600px;
                    margin: 20px 0;
                }
            </style>
        </head>
        <body>
            <h1>Random Shoti</h1>
            <video id="shotiVideo" controls></video>
            <button onclick="loadVideo()">Next Video</button>

            <script>
                async function loadVideo() {
                    try {
                        const response = await fetch('/api/random-shoti');
                        const data = await response.json();
                        const video = document.getElementById('shotiVideo');
                        video.src = data.url;
                        video.load();
                    } catch (error) {
                        console.error('Error fetching video:', error);
                    }
                }

                loadVideo();  // Load a video on page load
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
