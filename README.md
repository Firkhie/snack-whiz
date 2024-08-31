<div align="center">
  <p align="center"><img src="./public/logo.png" alt="Logo" width="200" height="200"></p>
  <h1 style="border: none;">SnackWhiz: AI-Generated Snack Recipes</h1>
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel" />
    <img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" alt="githubactions" />
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

Welcome to SnackWhiz – Your AI-Powered Snack Recipe Generator! This web app automatically generates a new snack recipe every week using Claude AI, scheduled through a Vercel cron job. Each recipe is saved as a Markdown file, enabling a static and efficient web experience without the need for frequent backend calls. SnackWhiz is designed as a learning project to explore the capabilities of static site generation (SSG) and Incremental Static Regeneration (ISR) in Next.js.
<br /><br />
<img src="public/landing-image.png" alt="Project Banner">

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Shadcn
- TailwindCSS

## <a name="features">🔋 Features</a>

👉 Automated Snack Recipe Generation:

- AI-generated snack recipes created weekly using Claude AI and Github Actions as a cron job.
- Recipes saved as Markdown files, allowing for a static and efficient web experience.
- Vercel cron job integration for automatic recipe updates without manual intervention.

👉 Static Site Generation:

- Utilizes Next.js for static site generation and Incremental Static Regeneration (ISR), providing both speed and up-to-date content.
- No need for continuous backend calls—recipes are pre-rendered and served statically.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Firkhie/snack-whiz.git
cd snack-whiz
```

**Package Installation**

Install the project dependencies using npm:

```bash
npm i
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
ANTHROPIC_API_KEY=
```

Replace the placeholder values with your actual respective account credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

#
