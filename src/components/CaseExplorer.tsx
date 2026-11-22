"use client";
import { useState } from "react";
const systems = {
  narrativex: [
    {
      label: "Publishing",
      input: "Content",
      output: "Publishing",
      title: "Connect creation with distribution.",
      body: "Meta Publisher uses the Meta Graph API and Claude for AI captions. The CV reports roughly 60% less per-post publishing time across 30+ client brands.",
    },
    {
      label: "Reporting",
      input: "Insights",
      output: "Reporting",
      title: "Give the team its time back.",
      body: "Four automation operations systems included a content calendar and Instagram/YouTube insights workflows. The CV reports approximately 90% less weekly reporting effort.",
    },
    {
      label: "Moderation",
      input: "Comments",
      output: "Moderation",
      title: "Make repetitive work manageable.",
      body: "Comment Manager connects the Meta Graph API and Claude. The CV reports approximately 90% less manual comment moderation and about four hours saved per day per social media manager.",
    },
  ],
  "creative-scoring": [
    {
      label: "Visuals",
      input: "Creative",
      output: "CLIP",
      title: "Look beyond a thumbnail.",
      body: "CLIP provides visual features as one input to the model. CNN Grad-CAM supports visual diagnosis. This diagram describes the components; it is not a live model prediction.",
    },
    {
      label: "Language",
      input: "Ad title",
      output: "TF-IDF",
      title: "Bring language into the picture.",
      body: "TF-IDF title features add a text signal alongside the visual features. The technical CV identifies titles, rather than full ad copy, as the text input.",
    },
    {
      label: "Model",
      input: "Features",
      output: "LightGBM",
      title: "Combine the signals.",
      body: "LightGBM combines CLIP visuals, TF-IDF titles, and metadata. Training used 13,000 YouTube ads. The CV reports validation on 32,000 Meta and Google ads, without supplying accuracy metrics.",
    },
  ],
};
export function CaseExplorer({ slug }: { slug: keyof typeof systems }) {
  const [selected, setSelected] = useState(0);
  const steps = systems[slug],
    item = steps[selected];
  return (
    <section
      className="case-explorer section-pad"
      aria-label="Explore the system"
    >
      <div className="case-explorer-inner">
        <span className="eyebrow">A CLOSER LOOK · EXPLORE THE SYSTEM</span>
        <div
          className="case-explorer-tabs"
          role="group"
          aria-label="Choose a system component"
        >
          {steps.map((s, i) => (
            <button
              key={s.label}
              aria-pressed={selected === i}
              aria-controls="system-detail"
              onClick={() => setSelected(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div
          id="system-detail"
          className="case-explorer-body"
          key={selected}
          aria-live="polite"
        >
          <div className="signal-diagram" aria-hidden="true">
            <span>{item.input}</span>
            <i />
            <strong>✳</strong>
            <i />
            <span>{item.output}</span>
          </div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </div>
        <p className="case-explorer-caption">
          Conceptual diagram based on the supplied CV. No confidential
          interfaces or internal data are shown.
        </p>
      </div>
    </section>
  );
}
