import { NextApiRequest, NextApiResponse } from 'next';
import { transporter } from '../../services/nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send('Bad Request');
    }

    const mailData = {
      from: process.env.NODEMAILER_USER as string,
      to: process.env.NODEMAILER_TO_MAIL as string,
      subject: `Message from ${name}`,
      text: `${message}\nSent from ${email}`,
      html: `<div>${message}</div><p>Sent from ${email}</p>`,
    };

    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log(info);
      return;
    });

    return res.status(200).send('OK');
  } else {
    return res.status(405).send('Method Not Allowed');
  }
}
