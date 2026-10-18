import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const outDir = process.env.A11Y_OUT_DIR ?? "/opt/cursor/artifacts";
const screenshotDir = path.join(outDir, "screenshots");
const reportDir = path.join(outDir, "a11y");

const tags = [
  "wcag2a",
  "wcag2aa",
  "wcag21a",
  "wcag21aa",
  "wcag22aa",
  "best-practice",
];

async function overflow(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      overflows: doc.scrollWidth > doc.clientWidth + 1,
    };
  });
}

async function analyze(page, label) {
  const results = await new AxeBuilder({ page }).withTags(tags).analyze();
  const violations = results.violations.map((violation) => ({
    id: violation.id,
    impact: violation.impact,
    help: violation.help,
    nodes: violation.nodes.slice(0, 8).map((node) => ({
      target: node.target,
      html: node.html,
      failureSummary: node.failureSummary,
    })),
  }));
  return {
    label,
    url: page.url(),
    violationCount: results.violations.length,
    violations,
  };
}

async function main() {
  await mkdir(screenshotDir, { recursive: true });
  await mkdir(reportDir, { recursive: true });

  const browser = await chromium.launch();
  const reports = [];
  const overflowReports = [];
  let meta = null;

  try {
    const desktopContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    const desktop = await desktopContext.newPage();
    await desktop.goto(`${baseUrl}/case-studies/theodosiantenti`, {
      waitUntil: "networkidle",
    });
    await desktop.screenshot({
      path: path.join(screenshotDir, "case-study-desktop.png"),
      fullPage: true,
    });
    await desktop.screenshot({
      path: path.join(screenshotDir, "case-study-desktop-fold.png"),
    });
    reports.push(await analyze(desktop, "case-study-1280"));
    overflowReports.push({
      label: "case-study-1280",
      ...(await overflow(desktop)),
    });

    meta = await desktop.evaluate(() => {
      const text = document.body.innerText;
      return {
        lang: document.documentElement.lang,
        title: document.title,
        description:
          document.querySelector('meta[name="description"]')?.content ?? "",
        ogTitle:
          document.querySelector('meta[property="og:title"]')?.content ?? "",
        ogDescription:
          document.querySelector('meta[property="og:description"]')?.content ??
          "",
        canonical:
          document.querySelector('link[rel="canonical"]')?.getAttribute("href") ??
          "",
        h1Count: document.querySelectorAll("h1").length,
        h1: document.querySelector("h1")?.textContent ?? "",
        hasDisclosure: text.includes(
          "This is my wife Theodosia's store; published with her consent.",
        ),
        hasVoiceOverPass:
          text.includes(
            "On 18 October 2026, Marios completed a manual VoiceOver test",
          ) && text.includes("All steps passed."),
        mentionsPendingScreenReader:
          /voiceover testing is pending|no screen-reader testing/i.test(
            `${text}\n${document.querySelector('meta[name="description"]')?.content ?? ""}\n${document.querySelector('meta[property="og:description"]')?.content ?? ""}`,
          ),
        mentionsCartEditMislabel: text.includes("announced as"),
      };
    });
    await writeFile(
      path.join(reportDir, "meta.json"),
      JSON.stringify(meta, null, 2),
    );

    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    const mobile = await mobileContext.newPage();
    await mobile.goto(`${baseUrl}/case-studies/theodosiantenti`, {
      waitUntil: "networkidle",
    });
    await mobile.screenshot({
      path: path.join(screenshotDir, "case-study-mobile.png"),
      fullPage: true,
    });
    await mobile.screenshot({
      path: path.join(screenshotDir, "case-study-mobile-fold.png"),
    });
    reports.push(await analyze(mobile, "case-study-390"));
    overflowReports.push({
      label: "case-study-390",
      ...(await overflow(mobile)),
    });

    const narrowContext = await browser.newContext({
      viewport: { width: 320, height: 800 },
    });
    const narrow = await narrowContext.newPage();
    await narrow.goto(`${baseUrl}/case-studies/theodosiantenti`, {
      waitUntil: "networkidle",
    });
    await narrow.screenshot({
      path: path.join(screenshotDir, "case-study-320.png"),
      fullPage: true,
    });
    reports.push(await analyze(narrow, "case-study-320"));
    overflowReports.push({
      label: "case-study-320",
      ...(await overflow(narrow)),
    });

    const homeContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    const home = await homeContext.newPage();
    await home.goto(baseUrl, { waitUntil: "networkidle" });
    const card = home.locator("#case-study");
    await card.scrollIntoViewIfNeeded();
    await card.screenshot({
      path: path.join(screenshotDir, "homepage-case-study-card.png"),
    });
    await home.screenshot({
      path: path.join(screenshotDir, "homepage-desktop.png"),
      fullPage: false,
    });

    const homeMobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    const homeMobile = await homeMobileContext.newPage();
    await homeMobile.goto(baseUrl, { waitUntil: "networkidle" });
    const mobileCard = homeMobile.locator("#case-study");
    await mobileCard.scrollIntoViewIfNeeded();
    await mobileCard.screenshot({
      path: path.join(screenshotDir, "homepage-case-study-card-mobile.png"),
    });

    await home.locator("#case-study a").click();
    await home.waitForURL("**/case-studies/theodosiantenti");
  } finally {
    await browser.close();
  }

  const summary = {
    baseUrl,
    tags,
    meta,
    reports,
    overflowReports,
    passed:
      reports.every((report) => report.violationCount === 0) &&
      overflowReports.every((item) => item.overflows === false) &&
      meta?.lang === "en" &&
      meta?.h1Count === 1 &&
      meta?.hasDisclosure === true &&
      meta?.hasVoiceOverPass === true &&
      meta?.mentionsPendingScreenReader === false,
  };

  await writeFile(
    path.join(reportDir, "axe-results.json"),
    JSON.stringify(summary, null, 2),
  );
  console.log(JSON.stringify(summary, null, 2));
  if (!summary.passed) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
