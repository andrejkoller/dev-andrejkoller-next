import { experienceConfig } from "@/configs/experience-config";
import { projectLinksConfig } from "@/configs/project-links-config";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Introduction */}
      <section className="mb-12 fade-in delay-1">
        <p className="mb-4">
          <span style={{ color: "var(--color-text-primary)" }}>
            Andrej Koller
          </span>{" "}
          is a designer and frontend engineer from Ekibastuz, Kazakhstan.
        </p>
        <p className="mb-4">Based in Passau, Germany.</p>
      </section>

      {/* Experience */}
      <section className="mb-12 fade-in delay-2">
        {experienceConfig.map((experience) => (
          <div
            key={experience.key}
            className="flex justify-between items-baseline border-b border-border expertise-item"
          >
            <div>
              <h2 className="font-normal">{experience.company}</h2>
              <p>{experience.role}</p>
            </div>
            <p className="flex items-center whitespace-nowrap">
              {experience.period}
            </p>
          </div>
        ))}
      </section>

      {/* Featured projects */}
      <section className="fade-in delay-3">
        <h2 className="text-sm font-bold mb-4">Featured</h2>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-color-muted">2026</span>
            <span className="text-color-muted mx-2">—</span>
            <span>Athanasa</span>
          </p>
          <div className="bg-foreground h-125 w-full rounded-xl">
            {/* Placeholder for Athanasa project image */}
          </div>
        </div>
      </section>

      <hr className="border-t border-border mb-24" />

      {/* Product & Branding */}
      <section className="fade-in delay-4">
        <h3 className="text-sm font-bold mb-8">Product</h3>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-color-muted">2027</span>
            <span className="text-color-muted mx-2">—</span>
            <span>Sophia.js</span>
          </p>
          <div className="bg-foreground h-125 w-full rounded-xl">
            {/* Placeholder for Sophia.js project image */}
          </div>
        </div>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-color-muted">2026</span>
            <span className="text-color-muted mx-2">—</span>
            <span>Lofty Charts</span>
          </p>
          <div className="bg-foreground h-125 w-full rounded-xl">
            {/* Placeholder for Lofty Charts project image */}
          </div>
        </div>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-color-muted">2026</span>
            <span className="text-color-muted mx-2">—</span>
            <span>Elegant Icons</span>
          </p>
          <div className="bg-foreground h-125 w-full rounded-xl">
            {/* Placeholder for Elegant Icons project image */}
          </div>
        </div>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-color-muted">2025</span>
            <span className="text-color-muted mx-2">—</span>
            <span>Omelia UI</span>
          </p>
          <div className="bg-foreground h-125 w-full rounded-xl">
            {/* Placeholder for Omelia UI project image */}
          </div>
        </div>
      </section>
      <section className="fade-in delay-5">
        <h3 className="text-sm font-bold mb-8">Branding</h3>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-color-muted">2028</span>
            <span className="text-color-muted mx-2">—</span>
            <span>Font</span>
          </p>
          <div className="bg-foreground h-125 w-full rounded-xl">
            {/* Placeholder for Font project image */}
          </div>
        </div>
      </section>

      {/* Skills & ongoing projects */}
      <section className="mb-12 fade-in delay-6">
        <h2 className="text-sm font-bold mb-4">Skills & Technologies</h2>
        <p>
          I design and build modern, performant web interfaces using HTML, SCSS,
          TypeScript, and frameworks like Angular, React, Next.js, and Vue.
          Focused on clean architecture, refined UI systems, and thoughtful
          digital experiences crafted with TailwindCSS and Figma.
        </p>
      </section>
      <section className="mb-12 fade-in delay-7">
        <h2 className="text-sm font-bold mb-4">Ongoing Projects</h2>
        <p className="mb-4">
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
