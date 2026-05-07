## Short description

A minimalist portfolio website showcasing products, projects, and creative work. Built with modern web technologies and a focus on performance, accessibility, and clean design.

## ✨ Features

- **Server-Side Rendering** - Fast initial page loads with Next.js App Router
- **Responsive Design** - Mobile-first layout with Tailwind CSS v4 and custom breakpoints
- **Fade-in Animations** - Staggered entrance animations for a smooth page experience
- **Custom Theming** - CSS custom properties for consistent dark color palette
- **Modular Architecture** - Separated Header, Footer, and layout components
- **Google Fonts** - Geist Sans and Geist Mono via `next/font`
- **TypeScript** - Full type safety across the application
- **Social Links** - Footer with links to X, Dribbble, GitHub, and LinkedIn

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **React:** Version 19

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/andrejkoller/dev-andrejkoller-next.git
cd dev-andrejkoller-next
```

2. Install dependencies

```bash
# Install dependencies
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
dev-andrejkoller-next/
├── app/
│   ├── styles/
│   │   └── globals.css       # Global styles
│   ├── client-layout.tsx     # Client-side layout wrapper
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── footer.tsx            # Footer component
│   └── header.tsx            # Header component
├── eslint.config.mjs         # ESLint configuration
├── LICENSE
├── next-env.d.ts             # Next.js TypeScript declarations
├── next.config.ts            # Next.js configuration
├── package.json
├── postcss.config.mjs        # PostCSS configuration
├── README.md
├── SECURITY.md
└── tsconfig.json             # TypeScript configuration
```

## 📸 Screenshots
