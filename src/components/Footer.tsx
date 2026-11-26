import Link from "next/link";
import { person } from "@/data/portfolio";
export function Footer() {
  return (
    <footer id="connect" className="contact-section section-pad">
      <div className="section-kicker">
        <span>LET’S CONNECT</span>
        <span>GOOD THINGS START WITH A CONVERSATION</span>
      </div>
      <h2>
        Have a good
        <br />
        problem<span className="lime-text">?</span>
      </h2>
      <div className="contact-bottom">
        <div>
          <p>I’d love to help turn it into something that works.</p>
          <a
            className="button button-lime"
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Let’s talk on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-links">
          <Link href="/profile">Professional summary & CVs</Link>
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <a href={`tel:${person.phone}`}>{person.phoneLabel}</a>
          {person.github && (
            <a href={person.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          <a href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
      <div className="footer-line">
        <span>G. RISHAB TEJ</span>
        <span>STRATEGY. TECHNOLOGY. FOLLOW-THROUGH.</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
