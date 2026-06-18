import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { experienceConfig } from "@/configs/experience-config";
import { projectLinksConfig } from "@/configs/project-links-config";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Introduction */}
      <section className="mb-12 fade-in delay-1">
        <p className="mb-4 text-(--color-muted)">
          <span className="text-(--color-primary)">Andrej Koller</span> is a
          software engineer from Ekibastuz, Kazakhstan.
        </p>
        <p className="mb-4 text-(--color-muted)">Based in Passau, Germany.</p>
      </section>

      {/* Theme switcher */}
      {/*
      <section className="mb-12 fade-in delay-2">
        <ThemeSwitcher />
      </section>
      */}

      {/* Experience */}
      <section className="mb-12 fade-in delay-3">
        {experienceConfig.map((experience) => (
          <div
            key={experience.key}
            className="flex justify-between items-baseline border-b border-(--color-border) expertise-item"
          >
            <div className="flex flex-col">
              <h2 className="font-normal">{experience.company}</h2>
              <p className="text-(--color-muted)">{experience.role}</p>
            </div>
            <p className="flex items-center whitespace-nowrap text-(--color-muted)">
              {experience.period}
            </p>
          </div>
        ))}
      </section>

      {/* Featured projects */}
      <section className="fade-in delay-4">
        <h2 className="mb-4 text-sm font-bold">Featured</h2>
        <>
          <p className="mb-4">
            <span className="text-(--color-muted)">2026</span>
            <span className="mx-1 text-(--color-muted)">—</span>
            <span className="text-(--color-primary)">Athanasa</span>
          </p>
          <div className="bg-(--color-foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Athanasa project image */}
          </div>
        </>
      </section>

      <hr className="my-24 border-t border-(--color-border)" />

      {/* Product & Branding */}
      <section className="mb-24 fade-in delay-5">
        <h3 className="mb-8 text-sm font-bold">Product</h3>
        <>
          <p className="mb-4">
            <span className="text-(--color-muted)">2027</span>
            <span className="mx-1 text-(--color-muted)">—</span>
            <span className="text-(--color-primary)">Sophia.js</span>
          </p>
          <div className="mb-24 bg-(--color-foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Sophia.js project image */}
          </div>
        </>
        <>
          <p className="mb-4">
            <span className="text-(--color-muted)">2026</span>
            <span className="mx-1 text-(--color-muted)">—</span>
            <span className="text-(--color-primary)">Lofty Charts</span>
          </p>
          <div className="mb-24 bg-(--color-foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Lofty Charts project image */}
          </div>
        </>
        <>
          <p className="mb-4">
            <span className="text-(--color-muted)">2026</span>
            <span className="mx-1 text-(--color-muted)">—</span>
            <span className="text-(--color-primary)">Elegant Icons</span>
          </p>
          <div className="mb-24 bg-(--color-foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Elegant Icons project image */}
          </div>
        </>
        <>
          <p className="mb-4">
            <span className="text-(--color-muted)">2025</span>
            <span className="mx-1 text-(--color-muted)">—</span>
            <span className="text-(--color-primary)">Omelia UI</span>
          </p>
          <div className="mb-24 bg-(--color-foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Omelia UI project image */}
          </div>
        </>
      </section>
      <section className="mb-24 fade-in delay-6">
        <>
          <h3 className="mb-8 text-sm font-bold">Branding</h3>
          <p className="mb-4">
            <span className="text-(--color-muted)">2028</span>
            <span className="mx-1 text-(--color-muted)">—</span>
            <span className="text-(--color-primary)">Font</span>
          </p>
          <div className="mb-24 bg-(--color-foreground) h-125 w-full rounded-xl">
            {/* Placeholder for Font project image */}
          </div>
        </>
      </section>

      {/* Skills & ongoing projects */}
      <section className="mb-12 fade-in delay-7">
        <h2 className="mb-4 text-sm font-bold">Skills & Technologies</h2>
        <p className="mb-4 text-(--color-muted)">
          I design and build modern, performant web interfaces using HTML, SCSS,
          TypeScript, and frameworks like Angular, React, Next.js, and Vue.
          Focused on clean architecture, refined UI systems, and thoughtful
          digital experiences crafted with TailwindCSS and Figma.
        </p>
      </section>
      <section className="mb-12 fade-in delay-8">
        <h2 className="mb-4 text-sm font-bold">Ongoing Projects</h2>
        <p className="mb-4 text-(--color-muted)">
          Builds ongoing projects spanning music, products, and open source,
          with an emphasis on tools for designers and developers.
        </p>
        <ul className="space-y-2">
          {projectLinksConfig.map((project) => (
            <li key={project.key}>
              <Link
                href={project.url}
                target={project.isExternal ? "_blank" : "_self"}
                rel={project.isExternal ? "noopener noreferrer" : undefined}
              >
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
