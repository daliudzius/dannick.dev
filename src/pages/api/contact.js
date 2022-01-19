import nodemailer from 'nodemailer'

// Sends email to my inbox, returns a promise
export default async function email(req, res) {
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.SENDER_EMAIL,
         pass: process.env.SENDER_PASSWORD,
      },
      secure: true,
   })

   const body = JSON.parse(req.body)
   const message = `
      Name: ${body.name}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}
   `
   const emailData = {
      to: process.env.RECEIVER_EMAIL,
      from: process.env.SENDER_EMAIL,
      subject: `New message from ${body.name}`,
      text: message,
      html: message.replace(/\r\n/g, '<br />'),
   }

   await transporter.sendMail(emailData)
   res.status(200).json({ status: 'OK' })
}
