require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');

const app = express();
app.use(cors({ origin: 'http://your-frontend-domain.com' })); // Cambiar por el dominio de tu frontend
app.use(express.json());
app.listen(5000, () => console.log('Server Running on port 5000'));

// Configuración de Mailgun
const mailgunAuth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
    },
};

const contactEmail = nodemailer.createTransport(mailgunTransport(mailgunAuth));

// Verificación de transporte
contactEmail.verify((error) => {
    if (error) {
        console.error('Mailgun setup error:', error);
    } else {
        console.log('Mailgun ready to send emails');
    }
});

app.post('/contact', (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const mail = {
        from: `${firstName} ${lastName} <${email}>`,
        to: 'devjfelipe@outlook.com',
        subject: 'Contact Form Submission - Portfolio',
        html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Message:</strong> ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ code: 500, status: 'Error sending email' });
        } else {
            res.status(200).json({ code: 200, status: 'Message Sent' });
        }
    });
});
