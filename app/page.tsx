import { experienceConfig } from "@/configs/experience-config";
import { portfolioConfig } from "@/configs/portfolio-config";
import { projectLinksConfig } from "@/configs/project-links-config";
import Link from "next/link";

export default function HomePage() {
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

      <hr className="my-12 border-t border-(--color-border)" />

      {/* Product & Branding */}
      {portfolioConfig.map((section, sectionIndex) => (
        <section
          key={section.key}
          className={`mb-24 fade-in delay-${5 + sectionIndex}`}
        >
          <h3 className="mb-8 text-sm font-bold">{section.label}</h3>
          {section.projects.map((project) => (
            <div key={project.key} className="mb-24">
              <p className="mb-4">
                <span className="text-(--color-muted)">{project.year}</span>
                <span className="mx-1 text-(--color-muted)">—</span>
                <span className="text-(--color-primary)">{project.name}</span>
              </p>
              <div
                className={
                  project.placeholders > 1 ? "flex flex-col gap-4" : ""
                }
              >
                {Array.from({ length: project.placeholders }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-(--color-foreground) h-125 w-full rounded-xl"
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}

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
