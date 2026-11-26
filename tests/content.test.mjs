import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import {
  person,
  projects,
  process as thinking,
  experience,
  volunteering,
} from "../src/data/portfolio.ts";

test("case-study routes and process links resolve to unique real projects", () => {
  const slugs = new Set(projects.map((p) => p.slug));
  assert.equal(slugs.size, projects.length);
  assert.deepEqual(projects.slice(0, 3).map(({ slug }) => slug), [
    "narrativex",
    "rockwell",
    "metalabs",
  ]);
  for (const step of thinking) assert.ok(slugs.has(step.slug));
  for (const p of projects) {
    assert.ok(p.approach.length >= 3);
    assert.ok(p.source.length > 30);
    if (p.status === "brief") assert.match(p.source, /awaiting confirmation/);
    for (const image of p.evidence?.images ?? []) {
      assert.equal(readFileSync("public" + image.src, "ascii").slice(8, 12), "WEBP");
      assert.ok(image.alt.length > 0);
    }
  }
  for (const role of volunteering) assert.ok(role.organization && role.date);
});
test("approved employer correction and contact policy are preserved", () => {
  assert.ok(
    experience.some((e) => e.company === "Rockwell Industries Limited"),
  );
  assert.ok(
    !JSON.stringify({ projects, experience }).includes("Rockwell Automation"),
  );
  assert.equal(person.email, "");
  assert.equal(new URL(person.linkedin).hostname, "www.linkedin.com");
});
test("three actual public PDFs exist, with no supplied original CV files", () => {
  const files = readdirSync("public/cv");
  assert.equal(files.length, 3);
  for (const name of files) {
    assert.ok(name.startsWith("rishab-tej-"));
    const file = readFileSync("public/cv/" + name);
    assert.equal(file.subarray(0, 5).toString(), "%PDF-");
    assert.ok(file.length > 2000);
  }
});
