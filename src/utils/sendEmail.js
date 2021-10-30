'use strict';

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

async function sendEmail(email) { 

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'fabioborges.ti@gmail.com',
      pass: '#Br@sil77'
    }
  }));
  
  var mailOptions = {
    from: 'fabioborges.ti@gmail.com',
    to: 'fbnascime@gmail.com',
    subject: 'Sending Email using Node.js[nodemailer]',
    text: 'That was easy! - v2'
  };
  
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
}

module.exports = sendEmail;
