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
      subject: "Incquiry for Full stack developer",
      text: " Hi, Here is my resume, have a good day !!",
      // attachments: {
      //   filename: "Full-Stack-dev-Abhishek.pdf",
      //   path: "https://s3.amazonaws.com/attachments.angel.co/6858562-c9d450bae189a67a5a76a4dd7c9f76f8.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220428T044256Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=87c86beb3c27cabe1a054cbdc4d7b1cc685dd1d726a6468d9493e8dceeb55368",
      // },
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
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(transporter));
};

// SendResumeByEmail("sahil.saini@stockdaddy.in").catch(console.error);

export default SendResumeByEmail;
