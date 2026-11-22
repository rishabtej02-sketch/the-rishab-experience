import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found section-pad">
      <span className="eyebrow">404 · A LOOSE END</span>
      <h1>
        This connection
        <br />
        is missing.
      </h1>
      <p>The page may have moved. There’s plenty more to explore.</p>
      <Link href="/" className="button button-dark">
        Back to the experience
      </Link>
    </main>
  );
}
