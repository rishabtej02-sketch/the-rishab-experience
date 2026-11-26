import Image from "next/image";
import type { Project } from "@/data/portfolio";

export function ProjectEvidence({
  images,
  links,
}: NonNullable<Project["evidence"]>) {
  return (
    <section
      className="case-evidence section-pad"
      aria-labelledby="case-evidence-title"
    >
      <h2 id="case-evidence-title">Work samples &amp; evidence</h2>
      {images?.length ? (
        <div className="evidence-grid">
          {images.map(({ src, alt, width, height, title, caption }) => (
            <figure className="evidence-figure" key={src}>
              <a
                className="evidence-image"
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} image in a new tab`}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  unoptimized
                />
              </a>
              <figcaption>
                <h3>{title}</h3>
                <p>{caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
      {links?.length ? (
        <ul className="evidence-links">
          {links.map(({ href, label, detail }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label} <span aria-hidden="true">↗</span>
              </a>
              <p>{detail}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
