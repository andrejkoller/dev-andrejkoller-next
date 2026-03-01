"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function Home() {
  return (
    <>
      <section className="mb-12 fade-in delay-1">
        <p className="mb-4 text-(--secondary-foreground)">
          <span className="text-(--foreground)">Andrej Koller</span> is a
          designer and frontend engineer from Ekibastuz, Kazakhstan.
        </p>
        <p className="mb-4 text-(--secondary-foreground)">
          Based in Passau, Germany.
        </p>
      </section>
      <div className="mb-12 fade-in delay-2">
        <ThemeToggle />
      </div>
      <section className="mb-12 fade-in delay-3">
        <div className="flex justify-between items-baseline border-b border-(--border) expertise-item">
          <div>
            <h2 className="font-normal">ICUnet</h2>
            <p className="text-(--secondary-foreground)">
              Software Developer, Training
            </p>
          </div>
          <div className="text-(--secondary-foreground) flex items-center whitespace-nowrap">
            2022-2025
          </div>
        </div>
      </section>
      <section className="mb-12 fade-in delay-4">
        <h2 className="text-sm font-bold mb-4">Featured</h2>
        <div>
          <p className="mb-4">
            <span className="text-(--secondary-foreground)">2026</span>
            <span className="text-(--secondary-foreground) mx-2">—</span>
            <span>Athanasa</span>
          </p>
          <div className="bg-(--foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Athanasa project image */}
          </div>
        </div>
      </section>
      <hr className="border-t border-(--border) my-12"></hr>
      <section className="mb-16 fade-in delay-5">
        <h3 className="text-sm font-bold mb-8">Product</h3>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-(--secondary-foreground)">2027</span>
            <span className="text-(--secondary-foreground) mx-2">—</span>
            <span>Sophia.js</span>
          </p>
          <div className="bg-(--foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Sophia.js project image */}
          </div>
        </div>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-(--secondary-foreground)">2026</span>
            <span className="text-(--secondary-foreground) mx-2">—</span>
            <span>Charts</span>
          </p>
          <div className="bg-(--foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Charts project image */}
          </div>
        </div>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-(--secondary-foreground)">2026</span>
            <span className="text-(--secondary-foreground) mx-2">—</span>
            <span>Elegant Icons</span>
          </p>
          <div className="bg-(--foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Elegant Icons project image */}
          </div>
        </div>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-(--secondary-foreground)">2025</span>
            <span className="text-(--secondary-foreground) mx-2">—</span>
            <span>Omelia UI</span>
          </p>
          <div className="bg-(--foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Omelia UI project image */}
          </div>
        </div>
      </section>
      <section className="mb-16 fade-in delay-6">
        <h3 className="text-sm font-bold mb-8">Branding</h3>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-(--secondary-foreground)">2028</span>
            <span className="text-(--secondary-foreground) mx-2">—</span>
            <span>Font</span>
          </p>
          <div className="bg-(--foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Font project image */}
          </div>
        </div>
      </section>
      <section className="mb-12 fade-in delay-7">
        <h2 className="text-sm font-bold mb-4">Skills & Technologies</h2>
        <p className="mb-4 text-(--secondary-foreground)">
          I design and build modern, performant web interfaces using HTML, SCSS,
          TypeScript, and frameworks like Angular, React, Next.js, and Vue.
          Focused on clean architecture, refined UI systems, and thoughtful
          digital experiences crafted with TailwindCSS and Figma.
        </p>
      </section>
      <section className="mb-12 fade-in delay-8">
        <h2 className="text-sm font-bold mb-4">Ongoing Projects</h2>
        <p className="mb-4 text-(--secondary-foreground)">
          Builds ongoing projects spanning music, products, and open source,
          with an emphasis on tools for designers and developers.
        </p>
        <ul className="space-y-2">
          <li>
            <a
              className="hover:text-(--hover-foreground)"
              href="https://linktr.ee/athanasa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Athanasa
            </a>
          </li>
          <li>
            <a
              className="hover:text-(--hover-foreground)"
              href="https://linktr.ee/fadinghell"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fading Hell
            </a>
          </li>
          <li>
            <a
              className="hover:text-(--hover-foreground)"
              href="https://linktr.ee/prettyswing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pretty Swing
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
