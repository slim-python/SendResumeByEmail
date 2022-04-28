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
      attachments: {
        filename: "Full-Stack-dev-Abhishek.pdf",
        path: "https://abhishke-ka-balti.s3.us-west-2.amazonaws.com/Resume/Full%20stack%20dev%20abhishek.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCmFwLXNvdXRoLTEiRzBFAiBC%2FSB3JNGlGyxNUVkdUTtrgKeQr6XsElsAyI9quRPIbQIhAI2S141jHqyd%2F3pDyBMZ7uwoumMJUq%2BX7holOp1HvwwWKrUCCND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMMjY5OTI5NzIxMTY5IgytKI1uKoHHL43LqswqiQLkwFJKmUCR7vTgVNu6NxYw3RashJdwcDtdfFs3gHQ%2FAufoZp5%2FNsHgUeHA0tV7ekJ0mjtU4ymJzb8jdSuososGslI7i9pmO7WAIKeHN7dV4lkHZiJsPkjXXymvr%2FFAlrK%2Ff%2F%2B2h4fTG6YdaEeQHw0GpIcZmiVlzHcLhM88fqTKjWgsrQzYWZnnJx0jTmseRzwj%2BAw8DEH7H0DKHaboVVRN%2FrqFPAnvcP1KcjqYZ9EGmxyz7ML5f2l3FEYh2RaWx7HT%2FQ2d34OpoMcDmQkSEsiGGJtCtCLsrJKmzgW4y9tahGpTuVqBHMvh00k3hTaduhuYCXEVHf%2B0e2NaBHSoOCQ2IKxELw9W14rnMLHvqJMGOt8B%2Fau5DWyQkawVvtMyFkg3%2BjXSw10BaSq9nF9POBd%2BAWzgwuqZMMekJO8KJn7WKsYJ9rCdLFyx8K4H91lhjDgcf18l9CCO4szoRtNyv%2FYWpST46hrM0knbzl7KuDdR7lR9sLjJZ5tFPEpvAYdFFcMYYjxg25HP2%2FMzupJtaL9skyXujoGM53ZU5jG9flRHH0r4xq1%2BqDV4miEOSYPHiuC8oO%2BAF8Prq6Om5W1PhzoAvMFcJCHxJMWHHphND4SEAmaY9Haw84RziV%2FgfmguenQ9fU2x5M25ylcvpY8Xo8ymUw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T065408Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAT5WIQVVIR4Y4LLBV%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d0e3a7adf361dfdcb0d06c0a3c0fa4c6f64c56f17c7af43e08a119e2ea06a46d",
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
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(transporter));
};

// SendResumeByEmail("sahil.saini@stockdaddy.in").catch(console.error);

export default SendResumeByEmail;
