import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  // @ts-ignore
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASS!,
    clientId: process.env.MAIL_CLIENT_ID!,
    clientSecret: process.env.MAIL_CLIENT_SECRET!,
    refreshToken: process.env.MAIL_REFRESH_TOKEN!,
  },
});

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      name: senderName,
      email: senderEmail,
      message: senderMessage,
    } = reqBody;

    const mailOptions: nodemailer.SendMailOptions = {
      from: senderEmail,
      to: process.env.MY_MAIL!,
      replyTo: senderEmail,
      priority: "high",
      subject: "New Message from Contact Me Form",
      html: `
        Visitor Email: ${senderEmail}<br />
        Visitor Name: ${senderName}<br />
        Query: ${senderMessage}<br />`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    // Log success
    // console.log("Email sent successfully:", mailResponse);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    // Log error
    console.error("Error sending email:", error);

    // Return appropriate error response
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
export const runtime = "edge";