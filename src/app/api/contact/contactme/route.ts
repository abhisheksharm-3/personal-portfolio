import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { senderName, senderEmail, senderMessage } = reqBody;

    // Validate senderEmail format or other necessary validations

    const mailOptions = {
      from: senderEmail,
      to: process.env.MY_MAIL,
      subject: "New Message from Contact Me Form",
      html: `
        Visitor Email: ${senderEmail}<br />
        Visitor Name: ${senderName}<br />
        Query: ${senderMessage}<br />`,
    };

    transporter.verify(function (error, success) {
      if (error) {
        console.log("Error verifying transporter:", error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    const mailResponse = await transporter.sendMail(mailOptions);

    // console.log("Email sent successfully:", mailResponse);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
