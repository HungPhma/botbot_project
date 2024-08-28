import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Allowed origins for CORS
const allowedOrigins = ['https://hungphma.github.io', 'https://botbotphotography.com'];

// Middleware
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g., mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
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
        html: `
            <html>
            <body>
                <p>Hello Trang,</p>
                <p>You’ve got a new message from <strong>${customer_name}</strong>:</p>
                <table>
                    <tr>
                        <td><strong>Name:</strong></td>
                        <td>${customer_name}</td>
                    </tr>
                    <tr>
                        <td><strong>Email Address:</strong></td>
                        <td>${customer_email}</td>
                    </tr>
                    <tr>
                        <td><strong>Phone Number:</strong></td>
                        <td>${customer_phoneNumber}</td>
                    </tr>
                    <tr>
                        <td><strong>Interested:</strong></td>
                        <td>${customer_interest}</td>
                    </tr>
                    <tr>
                        <td><strong>Message:</strong></td>
                        <td>${customer_message}</td>
                    </tr>
                </table>
                <br>
                <p>Best wishes,</p>
                <p><strong>The Botbotphotography Team!</strong></p>
            </body>
            </html>
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
