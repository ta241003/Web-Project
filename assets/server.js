const express = require('express');
require('dotenv').config(); // include env file
const app = express();

app.use('/client' ,express.static('client/html')); // use static file


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Home-page.html');
});

app.listen(process.env.PORT, ()=>console.log("Running . . ."));



