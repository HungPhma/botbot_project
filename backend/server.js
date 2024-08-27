import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors({
    origin: ['https://botbotphotography.com', 'https://hungphma.github.io']
}));
app.use(express.json());

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to the Botbotphotography Email Service');
});

// Route to handle form submission
app.post('/send-email', async (req, res) => {
    const { customer_name, customer_email, customer_phoneNumber, customer_interest, customer_message } = req.body;
    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false, // Set to true if using port 465
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Define email options
    const mailOptions = {
        from: customer_email,
        to: process.env.EMAIL_USER, // Your email address
        subject: `New Message from ${customer_name} - #Botbotphotography Contact Form`,
        text: `
            Hello Trang,

            You got a new message from ${customer_name}:

            Name: ${customer_name}

            Email Address: ${customer_email}

            Phone Number: ${customer_phoneNumber}

            Interested: ${customer_interest}

            Message: ${customer_message}

            Best wishes,
            #Botbotphotography team!
        `,
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
