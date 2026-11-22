"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { process } from "@/data/portfolio";
export function ProcessExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = process[active];
  return (
    <div className="process-explorer">
      <div
        className="process-tabs"
        role="tablist"
        aria-label="Explore my problem-solving process"
      >
        <div className="connection-line" aria-hidden="true" />
        {process.map((step, i) => (
          <button
            key={step.name}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`step-${i}`}
            role="tab"
            aria-selected={active === i}
            aria-controls="process-panel"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              let next = i;
              if (e.key === "ArrowRight") next = (i + 1) % process.length;
              else if (e.key === "ArrowLeft")
                next = (i - 1 + process.length) % process.length;
              else if (e.key === "Home") next = 0;
              else if (e.key === "End") next = process.length - 1;
              else return;
              e.preventDefault();
              setActive(next);
              tabs.current[next]?.focus();
            }}
          >
            <span className="process-node" aria-hidden="true">
              {active === i ? "✳" : "+"}
            </span>
            {step.name}
          </button>
        ))}
      </div>
      <div
        id="process-panel"
        role="tabpanel"
        aria-labelledby={`step-${active}`}
        tabIndex={0}
        className="process-panel"
      >
        <div>
          <span className="eyebrow">{item.name.toUpperCase()}</span>
          <h3>{item.question}</h3>
        </div>
        <div>
          <p>{item.text}</p>
          <div className="process-example">
            <span className="eyebrow">IN PRACTICE</span>
            <p>{item.example}</p>
            <Link href={`/work/${item.slug}`}>
              Explore the project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
