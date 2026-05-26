# Ninad Alurkar Portfolio

Personal portfolio website for presenting robotics software, autonomy, perception, reinforcement learning, state estimation, and human-robot interaction projects.

Live site: https://my-portfolio-one-eta-83.vercel.app/

## Overview

This portfolio is built as a responsive React/Vite website with a dark technical visual style. It highlights selected robotics projects, technical skills, resume access, and contact links for recruiters and robotics teams.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Vercel deployment

## Project Structure

```text
my-portfolio/
├── public/
│   ├── project-images/
│   ├── projects/
│   ├── Resume.pdf
│   └── thesis.pdf
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Content Updates

Most portfolio content is managed in `src/App.jsx`, including:

- Hero and intro copy
- About section
- Project card data
- Skills section
- Contact links

Static files such as resumes, PDFs, screenshots, GIFs, and videos should be placed under `public/` so they can be referenced from the site with root-relative paths.
