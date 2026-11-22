"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <Link
        href="/"
        className="wordmark"
        aria-label="rt — Rishab Tej home"
        onClick={close}
      >
        rt<span aria-hidden="true">✳</span>
      </Link>
      <span className="header-caption">BUSINESS MIND. BUILDER’S INSTINCT.</span>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}{" "}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        id="main-nav"
        className={open ? "main-nav is-open" : "main-nav"}
        aria-label="Main navigation"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            (
              document.querySelector(".menu-toggle") as HTMLButtonElement
            )?.focus();
          }
        }}
      >
        <Link href="/#work" onClick={close}>
          Work
        </Link>
        <Link href="/#about" onClick={close}>
          About
        </Link>
        <Link
          href="/profile"
          onClick={close}
          aria-current={path === "/profile" ? "page" : undefined}
        >
          Recruiter view
        </Link>
        <Link href="/#connect" className="nav-contact" onClick={close}>
          Let’s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
