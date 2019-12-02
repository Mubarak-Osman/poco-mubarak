const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'pop3.mailtrap.io',
    port: 587,
    auth: {
       user: ' 61df1db31481f6',
       pass: '6b6d1dff2d1011'
    }
});
const message = {
    from: 'mubarak.osman@powercoders.com', // Sender address
    to: 'osmanmubarak510@gmail.com',         // List of recipients
    subject: 'Design Your Model Node.js | Class', // Subject line
    text: 'Have the most fun you can in a class. Get your Breakfat today!' // Plain text body
};
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});