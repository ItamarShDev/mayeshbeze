import type { Transporter } from "nodemailer";
import { createTransport } from "nodemailer";
import { setOauth2Client } from "~/mailer/oauth2";
import type { Email } from "~/mailer/types";

function connect(): Promise<Transporter> {
  return new Promise((resolve, reject) => {
    const token = setOauth2Client();

    const transporter = createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "mayeshbezeideas@gmail.com",
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_CLIENT_REFRESH_TOKEN,
        accessToken: token,
      },
    });

    transporter.verify((error) => {
      if (error) {
        console.log({ error });
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(transporter);
      }
    });
  });
}

export default async function sendMail({ name, email, message }: Email) {
  try {
    const transporter = await connect();
    return await new Promise<void>((resolve, reject) => {
      const mail = {
        from: `${name} <${email}>`,
        to: "ideas@mayeshbeze.com",
        subject: `New idea from ${name}`,
        html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
      };
      transporter.sendMail(mail, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  } catch (error) {
    console.log({ error });
    return Promise.reject(error);
  }
}
