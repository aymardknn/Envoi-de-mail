# 📧 Mail Server (Envoi de mail)

**Serveur Node.js léger permettant de recevoir des messages depuis un formulaire de contact et de les envoyer par e-mail via Nodemailer.**

---

## 🚀 À propos

Ce projet est un **serveur Express minimaliste** conçu pour gérer les formulaires de contact des sites vitrines ou être réutilisé comme **API d’envoi d’e-mails**.  
Il utilise **Nodemailer** pour la gestion des mails et **CORS** pour permettre les requêtes entre domaines.

---

## 🛠️ Technologies utilisées

- [Express](https://expressjs.com/) — framework backend minimaliste  
- [Nodemailer](https://nodemailer.com/) — envoi d’e-mails côté serveur  
- [CORS](https://www.npmjs.com/package/cors) — autorisation des requêtes cross-origin  

---

## ⚙️ Installation

### 1. Cloner le dépôt
```bash
git clone https://github.com/ayamrdknn/Envoi-de-mail.git
cd Envoi-de-mail
```
### 2. Installer les dépendances
```bash
npm install
```
### 3. Lancer le serveur
```bash
node index.js
```
Le serveur démarrera par défaut sur le port 9000
➡️ URL locale : http://localhost:9000

---

## 📮 API Endpoint
POST /api/contact
### Description :
Envoie un e-mail à partir des informations reçues via un formulaire.

### Corps de la requête (JSON)
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Bonjour, je souhaite en savoir plus."
}
```
### ✅ Réponse en cas de succès
```json
{
  "message": "Email envoyé avec succès !"
}
```
### ❌ Réponse en cas d’erreur
```json
{
  "message": "Erreur lors de l’envoi de l’email"
}
```
---

## ☁️ Déploiement
Ce serveur peut être facilement déployé sur :

- [Render](https://render.com/)
- [Railway](https://railway.app)
- ou tout hébergeur Node.js compatible.
---

### 📂 Structure du projet
```bash
mail-server/
│
├── index.js          # Point d'entrée principal
├── package.json      # Dépendances et scripts npm
└── /public           # (optionnel) fichiers statiques
```
---
### 👨‍💻 Auteur
Développé avec ❤️ par [Kouadio Aymard KONAN](https://github.com/aymardknn)

---
## 📜 Licence
Ce projet est distribué sous licence ISC.

Vous êtes libre de :

- Utiliser ce projet pour vos projets personnels ou professionnels
- Étudier le code et l’adapter selon vos besoins

⚠️ Note : Merci de ne pas utiliser ce projet pour envoyer des e-mails non sollicités (spam).






