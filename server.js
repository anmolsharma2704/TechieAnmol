const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');  // Load environment variables
dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to handle form submission
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;



  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMPT_MAIL, // Your email
      pass: process.env.SMPT_PASSWORD, // Your email password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.SMPT_SENT_MAIL_TO, // Your email to receive the responses
    subject: `Portfolio New contact form submission: ${subject}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent: ' + email);
      res.redirect("/success")
    }
  });
});
app.get("/success",(req,res)=>{
  res.send("We will contact you soon")
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
