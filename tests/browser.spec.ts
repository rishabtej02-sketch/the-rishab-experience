import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("homepage, process, case studies, and CV downloads work", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveAccessibleName(
    "Rishab Tej",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /^https:\/\/the-rishab-experience\.vercel\.app\/?$/,
  );
  await expect(page.locator("#work .project-card h3").nth(0)).toHaveText("NarrativeX Media");
  await expect(page.locator("#work .project-card h3").nth(1)).toHaveText("Rockwell Industries Limited");
  await expect(page.locator("#work .project-card h3").nth(2)).toHaveText("MetaLabs Services LLP");
  await expect(page.getByRole("link", { name: "rishabtej02@gmail.com" })).toHaveAttribute(
    "href",
    "mailto:rishabtej02@gmail.com",
  );
  await expect(page.getByRole("link", { name: "+91 83097 70934" })).toHaveAttribute(
    "href",
    "tel:+918309770934",
  );
  await page.getByRole("tab", { name: "Research", exact: true }).click();
  await expect(page.getByRole("tabpanel")).toContainText("What do we know");
  await page
    .getByRole("tab", { name: "Research", exact: true })
    .press("ArrowRight");
  await expect(
    page.getByRole("tab", { name: "Experiment", exact: true }),
  ).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("smallest useful");
  const slugs = [
    "narrativex",
    "rockwell",
    "metalabs",
    "hyderabad-pickleball",
    "creative-scoring",
    "next-step-hr",
    "austridge",
  ];
  for (const slug of slugs) {
    await page.goto(`/work/${slug}`);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByText("THE TAKEAWAY", { exact: true })).toBeVisible();
    if (slug === "narrativex") {
      await expect(page.getByRole("link", { name: /Visit the website I built/ })).toHaveAttribute(
        "href",
        "https://narrativexmedia.in/",
      );
      await page
        .getByRole("button", { name: "Moderation", exact: true })
        .click();
      await expect(page.locator("#system-detail")).toContainText(
        "edit, approve, or reject",
      );
      const evidence = page.getByRole("region", { name: "Work samples & evidence" });
      await evidence.scrollIntoViewIfNeeded();
      await expect(evidence.locator("img")).toHaveCount(5);
      await expect(evidence.getByRole("link", { name: /Open Meta Publisher image/ })).toHaveAttribute(
        "href",
        "/evidence/narrativex/meta-publisher.webp",
      );
    }
    if (slug === "rockwell") {
      await expect(page.getByRole("heading", { name: "Internship completion certificate" })).toBeVisible();
      await expect(page.getByRole("link", { name: /MetaLabs Services LLP/ })).toHaveAttribute("href", "/work/metalabs");
    }
    if (slug === "metalabs") {
      await expect(page.getByRole("heading", { name: /SellersCommerce/ })).toBeVisible();
      await expect(page.getByRole("heading", { name: /Alternatives.co/ })).toBeVisible();
    }
    if (slug === "creative-scoring") {
      await page.getByRole("button", { name: "Model", exact: true }).click();
      await expect(page.locator("#system-detail")).toContainText(
        "chronological YouTube holdout",
      );
      await page.getByRole("link", { name: /Watch the demo/ }).click();
      await expect(page).toHaveURL(/#case-demo$/);
      const evidence = page.getByRole("region", { name: "Work samples & evidence" });
      await expect(evidence.locator("img")).toHaveCount(4);
      const video = evidence.locator("video");
      await expect(video).toBeVisible();
      const duration = await video.evaluate(async (player) => {
        if (!(player instanceof HTMLVideoElement)) {
          throw new Error("Expected a video element");
        }
        await player.play();
        player.pause();
        return player.duration;
      });
      expect(duration).toBeGreaterThan(40);
    }
    if (slug === "next-step-hr") {
      await expect(page.getByText("Marketing Consultant – Performance Marketing & Lead Generation")).toBeVisible();
      await expect(page.getByRole("heading", { name: "Build a funding-news tracker" })).toBeVisible();
      await expect(page.getByRole("link", { name: /Next Step HR on LinkedIn/ })).toHaveAttribute(
        "href",
        "https://www.linkedin.com/company/nextstephruae/",
      );
    }
    if (slug === "austridge") {
      await expect(page.getByRole("heading", { name: "Support the driver recruitment pipeline" })).toBeVisible();
      const remit = page.getByRole("region", { name: "Project Coordinator remit" });
      await expect(remit).toContainText("Connecteam");
      await expect(remit).toContainText(/courier systems integration/i);
      await expect(remit).toContainText("Search Console");
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        "https://the-rishab-experience.vercel.app/work/austridge",
      );
      await expect(page.getByRole("link", { name: "Construction Management" })).toHaveAttribute(
        "href",
        "https://theaustridgegroup.com.au/construction-management.php",
      );
      await expect(page.getByRole("link", { name: "BRIO Projects" })).toHaveAttribute(
        "href",
        "https://brioprojects.com.au/",
      );
    }
  }
  await page.goto("/profile");
  await expect(page.getByRole("heading", { name: "Next Step HR", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "The Austridge Group", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Volunteering" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Divisional President" })).toBeVisible();
  await expect(
    page.getByText("Rockwell Industries Limited", { exact: true }),
  ).toBeVisible();
  for (const kind of ["technical", "nontechnical", "technomanagerial"]) {
    const response = await request.get(`/cv/rishab-tej-${kind}.pdf`);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  }
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain(
    "<loc>https://the-rishab-experience.vercel.app/work/austridge</loc>",
  );
  expect(errors).toEqual([]);
});

test("responsive layouts, keyboard navigation, and reduced motion are accessible", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: `tmp/screenshots/home-${width}.png`,
      fullPage: false,
    });
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
    if (width === 375) {
      await page.getByRole("button", { name: "Menu" }).click();
      await page.getByRole("link", { name: "Recruiter view" }).click();
      await expect(page).toHaveURL(/profile/);
    }
  }
  for (const route of ["/profile", "/work/narrativex", "/work/rockwell", "/work/metalabs", "/work/creative-scoring", "/work/next-step-hr", "/work/austridge"]) {
    await page.goto(route);
    await page.screenshot({
      path: `tmp/screenshots/${route.replaceAll("/", "-")}.png`,
      fullPage: false,
    });
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
  }
  await page.setViewportSize({ width: 375, height: 900 });
  for (const route of ["/work/next-step-hr", "/work/austridge"]) {
    await page.goto(route);
    expect(await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    )).toBe(true);
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Explore my work", exact: true }),
  ).toBeFocused();
});

test("3D loads on request and can be closed", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("canvas")).toHaveCount(0);
  await page
    .getByRole("button", { name: "Explore the connection in 3D" })
    .click();
  await expect(page.locator("canvas")).toBeVisible({ timeout: 20000 });
  await page.getByRole("button", { name: "Rotate the connection" }).click();
  await page.getByRole("button", { name: "Close 3D" }).click();
  await expect(page.locator("canvas")).toHaveCount(0);
});
