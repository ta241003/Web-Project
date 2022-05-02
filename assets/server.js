const express = require('express');
require('dotenv').config(); // include env file
const app = express();

app.use(express.static('Client')); // use static file


// get home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/html/Home-page.html');
});

// get about page
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/client/html/About-page.html');
});

app.listen(process.env.PORT, ()=>console.log("Running . . ."));



