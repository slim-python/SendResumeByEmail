"use strict";
// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

const SendResumeByEmail = async (to, from) => {
  return new Promise(async (resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      service: "gmail",
      secure: true,
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
    transporter
      .sendMail(mailOptions)
      .then((res) => {
        console.log(res);
        resolve(
          JSON.stringify({ status: "Email has been sent successfully !!" })
        );
      })
      .catch((err) => {
        console.log(err);
        reject(JSON.stringify({ status: "There was some problem" }));
      });
  });
};

export default SendResumeByEmail;
