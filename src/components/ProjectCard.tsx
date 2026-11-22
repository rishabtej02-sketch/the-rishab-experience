"use client";
import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { ProjectArt } from "./ProjectArt";
type CardProject = Pick<
  Project,
  "slug" | "theme" | "category" | "name" | "summary"
>;
export function ProjectCard({
  project,
  index,
}: {
  project: CardProject;
  index: number;
}) {
  return (
    <article className={`project-card project-card-${index}`} data-reveal>
      <Link
        href={`/work/${project.slug}`}
        className="project-link"
        onPointerMove={(e) => {
          if (
            e.pointerType !== "mouse" ||
            matchMedia("(prefers-reduced-motion: reduce)").matches
          )
            return;
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty(
            "--tilt",
            `${(e.clientX - r.left - r.width / 2) / 160}deg`,
          );
        }}
        onPointerLeave={(e) =>
          e.currentTarget.style.setProperty("--tilt", "0deg")
        }
      >
        <ProjectArt theme={project.theme} />
        <div className="project-meta">
          <span className="eyebrow">{project.category}</span>
          <span className="case-link">
            Explore project <span aria-hidden="true">↗</span>
          </span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
      </Link>
    </article>
  );
}
