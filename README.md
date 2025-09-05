# 🌌 Aura AI — Your AI-Powered Creativity Hub  

[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://aura-ai-hazel.vercel.app/)  
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)  

---

## 🚀 Overview  

**Aura AI** is a next-generation **AI-powered SaaS platform** that helps you create stunning content effortlessly.  
From writing articles to transforming images, Aura AI puts advanced AI tools at your fingertips — all wrapped in a sleek, user-friendly experience.  

---

## ✨ Features  

- 📝 **Smart Writing** – Generate engaging articles & blog titles from a simple prompt.  
- 🎨 **Image Generation** – Create unique images with AI-powered magic.  
- ✂️ **Object & Background Removal** – Edit images in seconds.  
- 📄 **Resume Review** – Upload your resume and get instant AI feedback.  
- 🔐 **Free & Premium Plans** – Flexible pricing with usage limits and exclusive perks.  
- ⚡ **Responsive UI** – Works seamlessly across desktop & mobile.  
- ☁️ **Cloud Storage** – Secure image uploads & processing.  
- 🛠️ **Full-Stack Power** – Modern stack with AI APIs, PostgreSQL, and a robust backend.  

---

## 📸 Demo  

🔗 **Live Demo:** [Aura AI](https://aura-ai-hazel.vercel.app/)  

![Aura AI Demo](https://aura-ai-hazel.vercel.app/static/media/Aura_AI_demo_screenshot.png)  

---

## 🧩 Tech Stack  

| Frontend        | Backend        | AI & Cloud Services          | Database        | Auth   | Styling       |
|-----------------|----------------|-----------------------------|-----------------|--------|---------------|
| React, Router   | Node.js, Express | Google Gemini, OpenAI, ClipDrop | PostgreSQL (NeonDB) | Clerk | Tailwind CSS  |
| Lucide Icons    | Cloudinary     | Cloudinary Uploads          | Prisma ORM      |        |               |

---

## ⚙️ Getting Started  

### Prerequisites  
- Node.js ≥ 18  
- PostgreSQL (NeonDB or local)  
- Cloudinary account  
- Gemini / OpenAI API key  
- Clerk developer account  

### Installation  

```bash
git clone https://github.com/yourusername/aura-ai.git
cd aura-ai
npm install

````
Environment Setup

Create a .env file with:

```bash

DATABASE_URL=your_database_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
GEMINI_API_KEY=your_google_gemini_api_key
CLIP_DROP_API_KEY=your_clipdrop_api_key
CLERK_API_KEY=your_clerk_api_key


````

📂 Project Structure
```bash

/client      # React frontend  
/server      # Node.js backend  
/configs     # Database & cloud configs  
/components  # Reusable React components  
/pages       # React Router pages  
/utils       # Helpers & utilities

````

🙌 Acknowledgments

Inspired by modern open-source AI SaaS platforms.
Powered by OpenAI, Google, Cloudinary, Clerk, NeonDB, and more.
