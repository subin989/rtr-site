import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, phoneNumber, college } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `New Query From ${name}`,
    html: `
      <h3 style="color: #333;">Contact Details of ${name} :</h3>
      <table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd;">
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Name</th>
          <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Email</th>
          <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Phone Number</th>
          <td style="padding: 12px; border: 1px solid #ddd;">${phoneNumber}</td>
        </tr>
        <tr>
        <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">College</th>
        <td style="padding: 12px; border: 1px solid #ddd;">${college}</td>
      </tr>
      </table>
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Data sent Successfully.");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Data sent Successfully." });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
