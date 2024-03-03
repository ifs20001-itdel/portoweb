import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { email, subject, message } = req.body;

      // Konfigurasi Nodemailer
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "ifs20001.samueltobing@gmail.com",
          pass: "ckss hgcc xjhc cmvq",
        },
      });

      // Konfigurasi email yang akan dikirim
      const mailOptions = {
        from: "ifs20001.samueltobing@gmail.com",
        to: "samueltobing37@gmail.com",
        subject: subject,
        text: `
        Yang terhormat Tim Developer, 
        Saya ingin mengajukan keluhan/saran berikut:
        Email Pelapor: ${email}
        Isi Keluhan/Saran:
        ${message}
        Terima kasih atas perhatian dan bantuannya dalam penyelesaian masalah ini.
        Hormat kami
        `,
      };

      // Kirim email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully." });
    } else {
      res.status(405).json({ success: false, message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
}
