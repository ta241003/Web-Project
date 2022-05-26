const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const nodemailer = require('nodemailer');
require('dotenv').config(); // include env file
const app = express();
app.use(express.json());
app.use(cors());
app.use("/assets/src", express.static('src')); // use static file

app.post('/contact', encoder, (req, res) => {
  var email = req.body.email;
  // console.log(email);
  send(email);
  // marked
  res.redirect('/'); //
});

// func send email
function send(email) {  
  /// transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    form: process.env.EMAIL,
    to: email, // textfield for email not static data
    subject: "Testing",
    text: "hello i'm from node js sent to MF" + `<button class="verify-btn">Verify</button>`, // sont84554@gmail.com
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) console.log(err);
    else console.log("Send email successfully");  
  });
}


app.post('/signUp', encoder, (req, res) => {
  var email = req.body.email;
  const user = {
    email: email,
    phone: req.body.phone,
    username: req.body.username,
    password: req.body.password,
  }
  console.log(user);
  res.redirect('/');
});


// get home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/test.html');
});

app.listen(process.env.PORT, () => console.log("Running . . ."));