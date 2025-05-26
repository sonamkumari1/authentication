// import nodemailer from 'nodemailer'

// const transporter=nodemailer.createTransport({
//     host: 'smtp-relay.brevo.com',
//     port: 587,
//     auth:{
//         user: process.env.SMTP_USER,
//         pass:process.env.SMTP_PASS,
//     }
// })

// export default transporter

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: "8d02e7001@smtp-brevo.com",
    pass: "SBNndgvXPwqkMzAc",
  },
});

// transporter.verify((error, success) => {
//   if (error) {
//     console.error("SMTP connection failed:", error);
//   } else {
//     console.log("SMTP connection success.");
//   }
// });

// console.log("SMTP_USER:", process.env.SMTP_USER);
// console.log("SMTP_PASS:", process.env.SMTP_PASS);

export default transporter;
