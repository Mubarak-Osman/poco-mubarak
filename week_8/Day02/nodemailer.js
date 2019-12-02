var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'osmanmubarak95@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'osmanmubarak95@gmail.com',
  to: 'mubarak.osman@powercoders.org',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 