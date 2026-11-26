"use client";
import { useState } from "react";
const systems = {
  narrativex: [
    {
      label: "Publishing",
      input: "Content",
      output: "Publishing",
      title: "Draft, schedule, and publish.",
      body: "A manager selects a client, uploads media, and edits a caption drafted with Claude. The Meta Graph API handles publishing, and delivery logs show what succeeded or failed.",
    },
    {
      label: "Reporting",
      input: "Insights",
      output: "Reporting",
      title: "Bring platform data into one view.",
      body: "Apps Script pulls Instagram and YouTube metrics into shared workbooks. The trackers organize post data and surface changes in reach, views, and engagement.",
    },
    {
      label: "Moderation",
      input: "Comments",
      output: "Moderation",
      title: "Put the review in one inbox.",
      body: "Comment Manager brings comments into an approval queue. A social media manager can edit, approve, or reject the AI-drafted reply before it goes out.",
    },
  ],
  "creative-scoring": [
    {
      label: "Visuals",
      input: "Creative",
      output: "CLIP",
      title: "Look beyond a thumbnail.",
      body: "CLIP embeds the thumbnail as one input to the scoring model. Grad-CAM shows where a separate CNN responds to the image.",
    },
    {
      label: "Language",
      input: "Ad title",
      output: "TF-IDF",
      title: "Bring language into the picture.",
      body: "TF-IDF gives the video title a text representation alongside the thumbnail and upload-time metadata.",
    },
    {
      label: "Model",
      input: "Features",
      output: "LightGBM",
      title: "Combine the signals.",
      body: "LightGBM combines visual features, title text, and metadata. Evaluation used a chronological YouTube holdout. Unlabeled Meta and Google creatives supplied reference score distributions.",
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
          {slug === "narrativex"
            ? "Workflow diagram based on the internship report and automation documentation."
            : "Model diagram based on the project source code."}
        </p>
      </div>
    </section>
  );
}
