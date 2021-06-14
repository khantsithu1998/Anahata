export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "mail.privateemail.com",
         auth: {
              user: 'info@anahataconsultancy.com',
              pass: process.env.password,
           },
      secure: true,
    });
    
    const mailData = {
        from: 'info@anahataconsultancy.com',
        to: 'info@anahataconsultancy.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<p>Sent from: ${req.body.email}</p><div>${req.body.message}</div>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }
