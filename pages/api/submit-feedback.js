// pages/api/submit-feedback.js
import nodemailer from "nodemailer";
// Create a Nodemailer transporter

const transporter = nodemailer.createTransport({
  service: "gmail", // You can also use other services like SendGrid or Mailgun
  auth: {
    user: process.env.EMAIL_USERNAME, // Your email address (for Gmail, make sure to use an app password)
    pass: process.env.EMAIL_PASSWORD, // Your email password or app password
  },
});

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, feedback, rating } = req.body;

    // Compose the email content
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.FEEDBACK_EMAIL, // Email where you want to receive feedback
      subject: "New Feedback Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Rating: ${rating}
        Feedback: ${feedback}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);

        return res.status(201).json({ message: "Feedback submitted successfully" });
        
    } catch (error) {
      console.error("Error sending feedback email:", error);
      return res.status(500).json({ message: "Failed to send feedback email" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};
