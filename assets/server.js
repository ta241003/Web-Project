const express = require('express');
require('dotenv').config(); // include env file
const app = express();

// app.use(express.static('src')); // use static file


// get home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT, ()=>console.log("Running . . ."));



