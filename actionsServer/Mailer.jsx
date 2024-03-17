"use server"

import nodemailer from "nodemailer";

export async function ContactMail (email, message) {

      const transporter = nodemailer.createTransport({
         host: process.env.EMAIL_SERVER_HOST,
         port: process.env.EMAIL_SERVER_PORT,
         secure: true,
         auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
         },
      });

      const result = await transporter.sendMail({
         from: "sd@sdevweb.com",
         to: "veustyle93310@gmail.com",
         subject: "Portfolio contact",
         html: "<h2>"+email+"</h2><p>"+message+"</p>"
      })

      return {result}
}

/*
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email envoyé: ' + info.response);
    }
});
* */