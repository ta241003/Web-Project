const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:process.env.EMAIL,
    pass:process.env.PASSWORD
  },
});

const mailOptions = {
  from: "cunho2803032003@gmail.com",
  to: "trannguyenanh280303@gmail.com", // textfield for email not static data
  subject: "Testing",
  text: "hello i'm from node js sent to MF $"
};

transporter.sendMail(mailOptions, (err, success) =>{
  if(err) console.log(err);
  else console.log("Success");
});