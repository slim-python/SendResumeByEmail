import 'dotenv/config'
import nodemailer from "nodemailer";

const sendEmail = async (to) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.PASSWORD,
    },
  });
  const mailOptions = {
    from: `"Abhishek Kumar" <${process.env.EMAIL_ADDRESS}>`,
    to,
    subject: "Inquiry for Full stack developer",
    text: " Hi, Here is my resume, have a good day ✨ !!",
    attachments: {
      filename: "Full-Stack-dev-Abhishek.pdf",
      path: process.env.RESUME,
    },
  };
  return transporter.sendMail(mailOptions);
};

const SendResumeByEmail = async (to) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await sendEmail(to);
      console.log(res);
      resolve(JSON.stringify({ status: "Email has been sent successfully !!" }));
    } catch (err) {
      console.log(err);
      reject(JSON.stringify({ status: "There was some problem" }));
    }
  });
};

export default SendResumeByEmail;
