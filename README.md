# 📌 Quora Mini App

A simple **CRUD web app** built with **Node.js**, **Express**, and **EJS** that mimics Quora-style posts.  
This project demonstrates **RESTful routing**, **server-side rendering**, and **basic CRUD functionality** — perfect for showcasing backend + full-stack fundamentals.

---

Live Demo
Deployed on render : [https://quora-kanx.onrender.com/posts](https://quora-kanx.onrender.com/posts)
---

## 📚 Table of Contents
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🔮 Future Enhancements](#-future-enhancements)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Features
- ✅ Create, Read, Update, Delete (CRUD) posts  
- ✅ Unique IDs generated using **UUID**  
- ✅ RESTful routes with **method-override** for PATCH/DELETE  
- ✅ **EJS templates** for dynamic views  
- ✅ Basic **CSS styling** for posts  

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Frontend:** EJS, CSS  
- **Utilities:** UUID, Method-Override, Nodemon  

---

## 📂 Project Structure
```
quora/
│── views/              # EJS templates (index, new, edit, show)
│── public/             # Static assets (CSS, images)
│── index.js            # Express server
│── package.json        # Dependencies & scripts
│── README.md           # Project documentation
│── .gitignore          # Ignored files (node_modules etc.)
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd quora
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
For development (auto-restart with nodemon):
```bash
npm run dev
```

Or normal run:
```bash
npm start
```

### 4. Open in browser
Go to 👉 [http://localhost:8080/posts](http://localhost:8080/posts)


---


## 🔮 Future Enhancements
- 🗄 Add database (MongoDB/MySQL/Postgres) for persistence  
- 🔑 Add authentication (login/signup)  
- 👍 Like/Comment system for posts  
- 🎨 Improved UI with Bootstrap/Tailwind  

---

## 🤝 Contributing
Contributions are welcome!  
Fork this repo, make changes, and submit a pull request 🚀  

---

## 📜 License
This project is licensed under the **ISC License**.  
