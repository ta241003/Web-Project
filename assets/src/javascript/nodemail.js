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
  to: "nbao332@gmail.com",
  subject: "Testing",
  text: "Sent from node js"
};


transporter.sendMail(mailOptions, (err, success) =>{
  if(err) console.log(err);
  else console.log("Success")
});