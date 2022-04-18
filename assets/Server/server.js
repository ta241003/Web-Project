const express = require('express');
require('dotenv').config(); // include env file
const app = express();

app.use(express.static('Client')); // use static file


app.get('/', (req, res) => {
    res.sendFile('/Home-page.html');
});

app.listen(process.env.PORT, ()=>console.log("Running . . ."));



