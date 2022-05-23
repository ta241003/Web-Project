const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:"cunho2803032003@gmail.com",
    pass:"trannguyenanh"
  },
});

const mailOptions = {
  from: "cunho2803032003@gmail.com",
  to: "nbao332@gmail.com", // textfield for email not static data
  subject: "Testing",
  text: "hello i'm from node js sent to MF"
};


transporter.sendMail(mailOptions, (err, success) =>{
  if(err) console.log(err);
  else console.log("Success")
});