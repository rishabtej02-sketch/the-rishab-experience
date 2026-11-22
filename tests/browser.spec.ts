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
      await page
        .getByRole("button", { name: "Moderation", exact: true })
        .click();
      await expect(page.locator("#system-detail")).toContainText(
        "four hours saved",
      );
    }
    if (slug === "creative-scoring") {
      await page.getByRole("button", { name: "Model", exact: true }).click();
      await expect(page.locator("#system-detail")).toContainText(
        "LightGBM combines",
      );
    }
  }
  await page.goto("/profile");
  await expect(
    page.getByText("Rockwell Industries Limited", { exact: true }),
  ).toBeVisible();
  for (const kind of ["technical", "nontechnical", "technomanagerial"]) {
    const response = await request.get(`/cv/rishab-tej-${kind}.pdf`);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  }
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
  for (const route of ["/profile", "/work/narrativex", "/work/next-step-hr"]) {
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
