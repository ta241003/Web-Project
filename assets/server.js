const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
require('dotenv').config(); // include env file
const app = express();


app.use(express.json()); 
app.use(cors());
app.use("/assets/src", express.static('src')); // use static file
app.post('/', encoder, (req, res) => {
    var email = req.body.email;
    console.log(email);
    res.redirect('/');
});


// get home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});

app.listen(process.env.PORT, ()=>console.log("Running . . ."));