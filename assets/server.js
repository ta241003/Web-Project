const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
require('dotenv').config(); // include env file
const app = express();

app.use("/src", express.static('src')); // use static file

// app.post('/')


app.use(cors());
// get home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});





app.listen(process.env.PORT, ()=>console.log("Running . . ."));