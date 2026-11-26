import type { Metadata } from "next";
import Link from "next/link";
import { experience, person, projects, volunteering } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = {
  title: "Professional summary & CVs",
  alternates: { canonical: "/profile" },
  description:
    "A quick overview of Rishab Tej’s experience, volunteering, education, projects, and public CV summaries.",
};
export default function Profile() {
  return (
    <>
      <main id="main" className="profile-page section-pad">
        <Link href="/" className="back-link">
          ← The full experience
        </Link>
        <div className="section-kicker">
          <span>THE SHORT VERSION</span>
          <span>FOR RECRUITERS & COLLABORATORS</span>
        </div>
        <h1>
          Business perspective.
          <br />
          Builder’s <em>instinct.</em>
        </h1>
        <p className="profile-intro">
          {person.name}. {person.summary}
        </p>
        <div className="profile-actions">
          <a
            href={person.linkedin}
            className="button button-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href="#cv" className="text-button">
            Download a CV summary ↓
          </a>
          <a href={`mailto:${person.email}`} className="text-button">Email</a>
          <a href={`tel:${person.phone}`} className="text-button">Call</a>
        </div>
        <section className="profile-section">
          <h2>Experience</h2>
          <div>
            {experience.map((e) => (
              <article className="experience-row" key={e.company}>
                <span className="eyebrow">{e.date}</span>
                <h3>
                  {e.slug ? (
                    <Link className="experience-link" href={`/work/${e.slug}`}>
                      {e.company} <span aria-hidden="true">↗</span>
                    </Link>
                  ) : (
                    e.company
                  )}
                </h3>
                <strong>{e.role}</strong>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="profile-section">
          <h2>Selected projects</h2>
          <div>
            {projects.map((p) => (
              <Link
                href={`/work/${p.slug}`}
                className="profile-project"
                key={p.slug}
              >
                <span>
                  <strong>{p.name}</strong>
                  <span>{p.summary}</span>
                </span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="profile-section">
          <h2>Education</h2>
          <div>
            {person.education.map((e) => (
              <article className="experience-row" key={e.title}>
                <span className="eyebrow">{e.years}</span>
                <h3>{e.title}</h3>
                <p>{e.institution}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="profile-section">
          <h2>Leadership</h2>
          <div>
            <article className="experience-row">
              <span className="eyebrow">
                MAY 2026—PRESENT · AS REPORTED IN CV
              </span>
              <h3>Campus Engagement Head</h3>
              <strong>Alumni Relations Cell · NMIMS Mumbai</strong>
              <p>
                Led an 83-member team supporting engagement with 31,000+ alumni.
              </p>
            </article>
            <article className="experience-row">
              <span className="eyebrow">MAY 2023—MAR 2024</span>
              <h3>Production Lead · Virinchi</h3>
              <strong>Vignana Bharathi Institute of Technology</strong>
              <p>
                Directed production for VIBHA 2K24, coordinating a 25-member
                volunteer team and backstage operations for 4,000+ attendees.
              </p>
            </article>
          </div>
        </section>
        <section
          id="volunteering"
          className="profile-section"
          aria-labelledby="volunteering-title"
        >
          <h2 id="volunteering-title">Volunteering</h2>
          <div>
            {volunteering.map(({ role, organization, date, text, evidence }) => (
              <article className="experience-row" key={role}>
                <span className="eyebrow">{date}</span>
                <h3>{role}</h3>
                <strong>{organization}</strong>
                <p>{text}</p>
                {evidence && (
                  <a
                    className="experience-source"
                    href={evidence.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {evidence.label} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            ))}
            <p className="source-note volunteer-source">
              Roles, dates, and fundraising figures are from my{" "}
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn profile
              </a>
              .
            </p>
          </div>
        </section>
        <section id="cv" className="cv-section">
          <span className="eyebrow">TAKE THE SHORT VERSION WITH YOU</span>
          <h2>Pick your perspective.</h2>
          <p>
            Public CV summaries, adapted from the supplied CVs. Academic
            identifiers and contact details are omitted.
          </p>
          <div className="cv-options">
            {[
              {
                slug: "technical",
                title: "Technical",
                text: "AI, analytics & building systems",
              },
              {
                slug: "nontechnical",
                title: "Business & operations",
                text: "Strategy, research & execution",
              },
              {
                slug: "technomanagerial",
                title: "Techno-managerial",
                text: "Connecting technology & business",
              },
            ].map((cv) => (
              <a href={`/cv/rishab-tej-${cv.slug}.pdf`} download key={cv.slug}>
                <span className="eyebrow">PDF · PUBLIC SUMMARY</span>
                <strong>{cv.title}</strong>
                <span>{cv.text}</span>
                <span className="download-label">Download PDF ↓</span>
              </a>
            ))}
          </div>
        </section>
        <p className="source-note">
          Experience and education are drawn from my CVs, LinkedIn experience, and
          internship records. Project pages include supporting material where available.
        </p>
      </main>
      <Footer />
    </>
  );
}
