import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { ProjectArt } from "@/components/ProjectArt";
import { Footer } from "@/components/Footer";
import { MotionShell } from "@/components/MotionShell";
import { CaseExplorer } from "@/components/CaseExplorer";
import { ProjectEvidence } from "@/components/ProjectEvidence";

const contextLabels = {
  brief: "Project overview · details in progress",
  cv: "CV-supported case study",
  documented: "Project records available",
  repository: "Academic project · source available",
} satisfies Record<(typeof projects)[number]["status"], string>;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.name ?? "Project not found",
    description: project?.summary,
    alternates: project ? { canonical: `/work/${project.slug}` } : undefined,
  };
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const p = projects[index];
  if (!p) notFound();
  const next = projects[(index + 1) % projects.length];
  return (
    <MotionShell>
      <main id="main" className="case-page">
        <section className="case-hero section-pad">
          <Link href="/#work" className="back-link">
            ← All work
          </Link>
          <div className="section-kicker">
            <span>{p.name.toUpperCase()}</span>
            <span>{p.year}</span>
          </div>
          <h1>{p.title}</h1>
          <p className="case-intro">{p.summary}</p>
          {p.evidence?.video && (
            <a className="text-button case-media-link" href="#case-demo">
              Watch the demo <span aria-hidden="true">↓</span>
            </a>
          )}
          {p.slug === "narrativex" && (
            <a
              className="text-button case-media-link"
              href="https://narrativexmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the website I built <span aria-hidden="true">↗</span>
            </a>
          )}
          <div className="case-facts">
            <div>
              <span className="eyebrow">MY ROLE</span>
              <p>{p.role}</p>
            </div>
            <div>
              <span className="eyebrow">FOCUS</span>
              <p>{p.category.replaceAll(" + ", " / ")}</p>
            </div>
            <div>
              <span className="eyebrow">CONTEXT</span>
              <p>{contextLabels[p.status]}</p>
            </div>
          </div>
        </section>
        <div className="case-art section-pad">
          <ProjectArt theme={p.theme} />
          <p className="visual-caption">
            Original conceptual illustration of the work; not a product
            screenshot.
          </p>
        </div>
        <section className="case-section section-pad">
          <span className="eyebrow">THE CHALLENGE</span>
          <div>
            <h2>
              A problem
              <br />
              worth understanding.
            </h2>
            <p className="large-body">{p.problem}</p>
          </div>
        </section>
        <section className="case-section section-pad approach-section">
          <span className="eyebrow">THE APPROACH</span>
          <div>
            {p.approach.map((step, i) => (
              <article className="approach-step" key={step.title} data-reveal>
                <span className="step-mark" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
            <div className="tools-row">
              <span className="eyebrow">TOOLS & METHODS</span>
              <div className="tag-list">
                {p.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {p.roleScope && (
          <section
            className="case-section section-pad approach-section"
            aria-labelledby="role-scope-title"
          >
            <h2 id="role-scope-title">Project Coordinator remit</h2>
            <div>
              {p.roleScope.map(({ title, body }) => (
                <article className="case-scope-item" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        {(p.slug === "narrativex" || p.slug === "creative-scoring") && (
          <CaseExplorer slug={p.slug} />
        )}
        <section className="outcome-section section-pad">
          <div className="section-kicker">
            <span>
              {p.status === "brief"
                ? "AREAS OF CONTRIBUTION"
                : "REPORTED OUTCOMES & SCOPE"}
            </span>
            <span>{p.name.toUpperCase()}</span>
          </div>
          <div className="outcome-grid">
            {p.outcomes.map((o) => (
              <div key={o.value} data-reveal>
                <strong>{o.value}</strong>
                <p>{o.label}</p>
              </div>
            ))}
          </div>
          <p className="source-note">{p.source}</p>
        </section>
        {p.evidence && <ProjectEvidence {...p.evidence} />}
        <section className="takeaway section-pad">
          <span className="eyebrow">THE TAKEAWAY</span>
          <h2>{p.takeaway}</h2>
        </section>
        <Link href={`/work/${next.slug}`} className="next-project section-pad">
          <span className="eyebrow">KEEP EXPLORING</span>
          <strong>{next.name}</strong>
          <span aria-hidden="true">↗</span>
        </Link>
      </main>
      <Footer />
    </MotionShell>
  );
}
