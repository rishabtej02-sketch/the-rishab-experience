import Link from "next/link";
import { Connection } from "@/components/Connection";
import { MotionShell } from "@/components/MotionShell";
import { ProjectCard } from "@/components/ProjectCard";
import { ProcessExplorer } from "@/components/ProcessExplorer";
import { Footer } from "@/components/Footer";
import { disciplines, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <MotionShell>
      <main id="main">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-topline">
            <span>THE RISHAB EXPERIENCE</span>
            <span>STRATEGY × TECHNOLOGY × PEOPLE</span>
          </div>
          <h1 id="hero-title" className="hero-title" aria-label="Rishab Tej">
            <span className="word-mask">
              <span className="hero-word">RISHAB</span>
            </span>{" "}
            <span className="word-mask">
              <span className="hero-word">
                TEJ<span className="name-dot">.</span>
              </span>
            </span>
          </h1>
          <div className="hero-content">
            <div className="hero-copy">
              <span className="eyebrow hero-intro">HELLO, I’M RISHAB.</span>
              <h2>
                I turn ideas into
                <br />
                things that <em>work.</em>
              </h2>
              <p>
                Engineering roots. Business perspective.
                <br />A hands-on approach to making things happen.
              </p>
              <div className="hero-actions">
                <Link href="#work" className="button button-dark">
                  Explore my work <span aria-hidden="true">↘</span>
                </Link>
                <Link href="/profile" className="text-button">
                  The short version <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <Connection />
          </div>
          <div className="hero-baseline">
            <span>MBA DIGITAL TRANSFORMATION · NMIMS MUMBAI</span>
            <span className="scroll-note">
              SCROLL TO GET TO KNOW ME <span aria-hidden="true">↓</span>
            </span>
          </div>
        </section>
        <section
          id="disciplines"
          className="disciplines section-pad"
          aria-labelledby="disciplines-title"
        >
          <div className="section-kicker">
            <span>WHAT I DO</span>
            <span>DIFFERENT LENSES. ONE CONNECTED APPROACH.</span>
          </div>
          <div className="section-heading" data-reveal>
            <h2 id="disciplines-title">
              I work in
              <br />
              the <em>in-between.</em>
            </h2>
            <p>
              Where a business problem meets a technical possibility. Where a
              good idea needs someone to make it happen.
            </p>
          </div>
          <div className="discipline-list">
            {disciplines.map((d, i) => (
              <details className="discipline" key={d.name} open={i === 0}>
                <summary>
                  <span className="discipline-name">{d.name}</span>
                  <span className="discipline-phrase">{d.phrase}</span>
                  <span className="expand-icon" aria-hidden="true" />
                </summary>
                <div className="discipline-body">
                  <div className="tag-list">
                    {d.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div>
                    <p>{d.text}</p>
                    <Link href={`/work/${d.slug}`}>
                      In practice: {d.example}{" "}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
        <section
          id="work"
          className="work-section section-pad"
          aria-labelledby="work-title"
        >
          <div className="section-kicker">
            <span>SELECTED WORK</span>
            <span>IDEAS, MADE REAL.</span>
          </div>
          <div className="section-heading" data-reveal>
            <h2 id="work-title">
              A few things
              <br />
              I’ve <em>put into motion.</em>
            </h2>
            <p>
              From agency workflows to the pickleball court.
              <br />
              Different contexts. The same instinct to build.
            </p>
          </div>
          <div className="project-grid">
            {projects.map(({ slug, theme, category, name, summary }, i) => (
              <ProjectCard
                key={slug}
                project={{ slug, theme, category, name, summary }}
                index={i}
              />
            ))}
          </div>
          <div className="more-work">
            <span className="eyebrow">ALSO IN THE MIX</span>
            <p>
              Digital payments analytics · Elder-care product strategy ·
              Sports-tech go-to-market · B2B lead generation
            </p>
            <Link href="/profile">
              See the professional summary <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
        <section
          id="thinking"
          className="thinking-section section-pad"
          aria-labelledby="thinking-title"
        >
          <div className="section-kicker">
            <span>HOW I THINK</span>
            <span>CURIOUS FIRST. PRACTICAL ALWAYS.</span>
          </div>
          <div className="section-heading" data-reveal>
            <h2 id="thinking-title">
              A little curiosity.
              <br />A lot of <em>follow-through.</em>
            </h2>
            <p>
              There’s rarely a straight line from question to answer. Here’s how
              I find a way forward.
            </p>
          </div>
          <ProcessExplorer />
        </section>
        <section
          id="about"
          className="about-section section-pad"
          aria-labelledby="about-title"
        >
          <div className="section-kicker">
            <span>BEYOND THE WORK</span>
            <span>STILL CURIOUS. STILL BUILDING.</span>
          </div>
          <div className="about-grid">
            <div className="about-visual" aria-hidden="true">
              <div className="journey-orbit" />
              <div className="about-type">
                A mind
                <br />
                for <em>systems.</em>
                <br />A thing
                <br />
                for <em>people.</em>
              </div>
              <div className="about-coordinate">
                ENGINEERING × BUSINESS × LIFE
              </div>
            </div>
            <div className="about-copy" data-reveal>
              <h2 id="about-title">
                More than
                <br />a single lane.
              </h2>
              <p>
                I started in computer science and engineering. Now, pursuing an
                MBA in Digital Transformation at NMIMS Mumbai, I’m exploring the
                space between how things work and why they matter.
              </p>
              <p>
                That curiosity takes different forms: building an internal tool,
                helping a team find a clearer process, or bringing people
                together around a sport.
              </p>
              <p>
                Off the clock, there’s pickleball, poster-making, video editing,
                and a steady interest in what emerging technology makes
                possible.
              </p>
              <div className="journey">
                <div>
                  <span>2020—2024</span>
                  <strong>Engineering foundations</strong>
                  <p>Computer Science & Engineering · VBIT</p>
                </div>
                <div>
                  <span>2025—2027</span>
                  <strong>A wider business lens</strong>
                  <p>MBA Digital Transformation · NMIMS Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </MotionShell>
  );
}
