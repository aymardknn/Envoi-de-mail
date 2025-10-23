const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure ton email (ici exemple avec Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'adresse@gmail.com', //ton adresse mail de recpetion
      pass: process.env.EMAIL_PASS, // pas ton vrai mot de passe, mais un mot de passe "application"
    },
  });

  const mailOptions = {
    from: `"${name}" <adresse@gmail.com>`,  // Gmail force l'adresse à rester la tienne
    to: 'adresse@gmail.com',
    replyTo: email, // pour que tu puisses répondre directement au client
    subject: `Nouveau message de ${name}`,
    text: `Nom : ${name}\nEmail : ${email}\nMessage : ${message}`,
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px; border: 1px solid #ddd;">
      <h2 style="color: #c29d63;">Nouveau message de contact</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message :</strong></p>
      <p style="white-space: pre-line;">${message}</p>
      <hr style="margin: 20px 0;">
      <footer style="font-size: 12px; color: #888;">Ce message a été envoyé depuis votre formulaire de contact sur le site vitrine.</footer>
    </div>
    `
    };


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email envoyé avec succès !' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l’envoi de l’email' });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

