import type { Metadata } from "next";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

const title =
  "Accessibility remediation: Shopify fashion store (theodosiantenti.gr)";
const description =
  "WCAG 2.2 AA remediation of theodosiantenti.gr. axe-core nodes 523 to 214; 203 are animation contrast false positives. Critical nodes 18 to 0.";

const pageUrl =
  "https://www.marioskanellopoulos.com/case-studies/theodosiantenti";
const ogImage =
  "https://www.marioskanellopoulos.com/case-studies/theodosiantenti/og.png";

export const metadata: Metadata = {
  title: {
    absolute: `${title} | Marios Kanellopoulos`,
  },
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    type: "article",
    url: pageUrl,
    siteName: "Marios Kanellopoulos",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Case study of theodosiantenti.gr: axe-core violation nodes 523 to 214, critical-impact nodes 18 to 0.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

const keyResults = [
  ["Violation nodes", "523", "214"],
  ["Critical-impact nodes", "18", "0"],
  ["Distinct rules failing", "20", "3"],
  ["Nodes outside contrast and landmark-region rules", "80", "1"],
];

const pageResults = [
  ["Home", "22", "2", "17", "3"],
  ["Collection", "81", "45", "85", "57"],
  ["Product", "40", "9", "52", "10"],
  ["Search", "81", "38", "89", "46"],
  ["Cart", "27", "2", "29", "2"],
];

const criteria = [
  ["1.1.1 Non-text Content", "Fail", "Pass"],
  ["1.3.1 Info and Relationships", "Fail", "Pass"],
  ["1.4.3 Contrast (Minimum)", "Fail", "Pass"],
  ["2.1.1 Keyboard", "Fail", "Pass"],
  ["2.1.2 No Keyboard Trap", "Fail", "Pass"],
  ["2.2.2 Pause, Stop, Hide", "Fail", "Pass"],
  ["2.4.1 Bypass Blocks", "Partial", "Pass"],
  ["2.4.3 Focus Order", "Fail", "Pass"],
  ["2.4.6 Headings and Labels", "Fail", "Partial"],
  ["2.4.7 Focus Visible", "Fail", "Pass"],
  ["3.1.2 Language of Parts", "Partial", "Partial"],
  ["4.1.2 Name, Role, Value", "Fail", "Pass"],
  ["4.1.3 Status Messages", "Fail", "Pass"],
];

const figures = [
  {
    title: "Skip link",
    before:
      "On focus, the skip link measured 130×1 px, so it was effectively invisible.",
    after:
      "The skip link measures 208×37 px and is visible. It targets the main content.",
  },
  {
    title: "Sale price contrast",
    before: "The sale price colour #e95144 measured 3.66:1.",
    after:
      "The sale price colour #b3261e measures 6.15:1 against #f8f8f8.",
  },
  {
    title: "Focus on navigation",
    before:
      "Navigation and buttons used no outline, so keyboard focus was not visible. In the navigation comparison, Clothing has no focus indicator.",
    after:
      "Theme controls use a solid 2–3 px focus indicator plus a shadow. In the navigation comparison, Clothing shows that indicator.",
  },
  {
    title: "Mobile menu",
    before:
      'The menu button’s accessible name was the English word “menu”. It did not expose an expanded state, focus was not trapped, and Escape did not close it.',
    after:
      "The accessible name is the Greek word Μενού. The button exposes expanded and controls. Focus moves to the close control, Tab stays inside, and Escape closes the menu and returns focus to the menu button.",
  },
];

function Th({
  children,
  scope,
}: {
  children: React.ReactNode;
  scope: "col" | "row";
}) {
  return (
    <th
      scope={scope}
      className="border-b border-white/15 px-3 py-3 align-top font-semibold text-emerald-300"
    >
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="border-b border-white/10 px-3 py-3 align-top tabular-nums text-white">
      {children}
    </td>
  );
}

function RowHeader({ children }: { children: React.ReactNode }) {
  return (
    <th
      scope="row"
      className="border-b border-white/10 px-3 py-3 align-top font-semibold text-white"
    >
      {children}
    </th>
  );
}

export default function TheodosiaCaseStudyPage() {
  return (
    <div className="case-study">
      <Header skipLinkHref="#main-content" />
      <main id="main-content" tabIndex={-1} className="pb-8 pt-28 md:pt-36">
        <article className="break-words">
          <div className="container">
            <header className="mx-auto max-w-3xl text-center">
              <p className="uppercase font-semibold tracking-widest text-emerald-300">
                Case study
              </p>
              <h1 className="mt-6 font-serif text-3xl tracking-wide md:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-white/60 md:text-lg">
                Measured with axe-core 4.13 on five pages (home, collection,
                product, search, and cart) at 1280 px and 390 px. The method
                was the same before, on 14 October 2026, and after, on 17
                October 2026.
              </p>
            </header>

            <div className="mt-10 flex flex-col gap-8 md:mt-16">
              <Card className="px-6 py-8 sm:px-8 md:px-10 md:py-12">
                <h2 className="font-serif text-2xl md:text-4xl">Key numbers</h2>
                <div className="mt-6 max-w-full overflow-x-auto">
                  <table className="w-full table-fixed border-collapse text-left text-sm md:text-base">
                    <caption className="caption-top mb-4 text-left font-serif text-xl text-white md:text-2xl">
                      Automated axe-core results, before and after
                    </caption>
                    <colgroup>
                      <col className="w-[46%]" />
                      <col className="w-[27%]" />
                      <col className="w-[27%]" />
                    </colgroup>
                    <thead>
                      <tr>
                        <Th scope="col">Measure</Th>
                        <Th scope="col">Before, 14 Oct 2026</Th>
                        <Th scope="col">After, 17 Oct 2026</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {keyResults.map((row) => (
                        <tr key={row[0]}>
                          <RowHeader>{row[0]}</RowHeader>
                          <Td>{row[1]}</Td>
                          <Td>{row[2]}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-6 text-white/60 md:text-lg">
                  Of the 214 nodes left, 203 are colour-contrast false
                  positives from the theme’s fade-in animations. When the scan
                  is re-run with the animations settled, that colour-contrast
                  count is 0. Ten are the “region” best-practice rule, from the
                  skip link sitting outside the header. That placement is
                  intentional. One is an intermittent best-practice duplicate
                  landmark label. A repeat run that did not hit that label
                  recorded 213 nodes.
                </p>
              </Card>

              <Card className="px-6 py-8 sm:px-8 md:px-10 md:py-12">
                <h2 className="font-serif text-2xl md:text-4xl">
                  Results by page
                </h2>
                <p className="mt-4 text-white/60 md:text-lg">
                  The audit chart is not embedded on this page. The original
                  image was not available when the page was built. The table
                  is the same per-page data. Intermediate totals on that chart
                  were 301 on 16 October, after publish, and 218 on the morning
                  of 17 October. The settled re-run totals 11 nodes: the 10
                  region findings and the 1 intermittent duplicate label.
                  Colour-contrast in that re-run is 0. There is no settled
                  baseline for the original theme. These are automated results
                  only.
                </p>
                <figure className="mt-6">
                  <div className="rounded-2xl border border-dashed border-white/25 px-5 py-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                      Chart placeholder
                    </p>
                    <p className="mt-3 text-white/80">
                      Placeholder for the axe before/after chart. It compared
                      violation nodes for each page at 1280 px and 390 px, and
                      the totals 523 before and 214 after.
                    </p>
                  </div>
                  <figcaption className="mt-3 text-sm text-white/60">
                    Reserved for the original chart, to be added as an
                    optimised WebP or AVIF file.
                  </figcaption>
                </figure>
                <div
                  className="mt-8 max-w-full overflow-x-auto"
                  tabIndex={0}
                >
                  <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                    <caption className="caption-top mb-4 text-left font-serif text-xl text-white md:text-2xl">
                      Violation nodes by page and viewport
                    </caption>
                    <thead>
                      <tr>
                        <Th scope="col">Page</Th>
                        <Th scope="col">Before, 1280 px</Th>
                        <Th scope="col">After, 1280 px</Th>
                        <Th scope="col">Before, 390 px</Th>
                        <Th scope="col">After, 390 px</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageResults.map((row) => (
                        <tr key={row[0]}>
                          <RowHeader>{row[0]}</RowHeader>
                          <Td>{row[1]}</Td>
                          <Td>{row[2]}</Td>
                          <Td>{row[3]}</Td>
                          <Td>{row[4]}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              <Card className="px-6 py-8 sm:px-8 md:px-10 md:py-12">
                <h2 className="font-serif text-2xl md:text-4xl">Context</h2>
                <div className="mt-4 space-y-4 text-white/60 md:text-lg">
                  <p>
                    <a
                      href="https://www.theodosiantenti.gr/"
                      className="font-semibold text-emerald-300 underline decoration-emerald-300/70 underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      theodosiantenti.gr
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>{" "}
                    is a Shopify store on the Ella theme. The target was WCAG
                    2.2 AA.
                  </p>
                  <p>
                    There is no overlay and no widget. The fixes are in the
                    theme code: one JavaScript file and one CSS file of
                    numbered fixes (F01–F28), plus content fixes for
                    alternative text, colours, and section settings.
                  </p>
                  <p className="text-white">
                    This is my wife Theodosia&apos;s store; published with her
                    consent.
                  </p>
                </div>
              </Card>

              <Card className="px-6 py-8 sm:px-8 md:px-10 md:py-12">
                <h2 className="font-serif text-2xl md:text-4xl">
                  Before and after
                </h2>
                <p className="mt-4 text-white/60 md:text-lg">
                  Four comparisons from the 14 October and 17 October audits.
                  The screenshots are not shown: the image files were not
                  available to save as WebP or AVIF. Each figure states the
                  measured difference.
                </p>
                <div className="mt-8 flex flex-col gap-10">
                  {figures.map((figure) => (
                    <figure key={figure.title}>
                      <h3 className="font-serif text-xl md:text-2xl">
                        {figure.title}
                      </h3>
                      <div className="mt-4 rounded-2xl border border-dashed border-white/25 px-5 py-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                          Screenshot placeholder
                        </p>
                        <p className="mt-3 text-white/80">
                          Placeholder for the before (14 Oct) and after (17
                          Oct) screenshot of the {figure.title.toLowerCase()}.
                        </p>
                      </div>
                      <figcaption className="mt-4 space-y-2 text-white/80">
                        <p>
                          <span className="font-semibold text-white">
                            Before, 14 Oct 2026.{" "}
                          </span>
                          {figure.title === "Mobile menu" ? (
                            <MobileMenuBefore />
                          ) : (
                            figure.before
                          )}
                        </p>
                        <p>
                          <span className="font-semibold text-white">
                            After, 17 Oct 2026.{" "}
                          </span>
                          {figure.title === "Mobile menu" ? (
                            <MobileMenuAfter />
                          ) : (
                            figure.after
                          )}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </Card>

              <Card className="px-6 py-8 sm:px-8 md:px-10 md:py-12">
                <h2 className="font-serif text-2xl md:text-4xl">Method</h2>
                <div className="mt-4 space-y-4 text-white/60 md:text-lg">
                  <p>
                    axe-core 4.13, with WCAG 2.0–2.2 A and AA plus
                    best-practice rules, on 5 pages at 1280×800 and 390×844.
                    The same method was used before (14 October 2026, original
                    theme) and after (17 October 2026, live theme).
                  </p>
                  <p>
                    Automated tools catch only part of real-world issues, so
                    keyboard, focus, motion, and contrast were also checked
                    with scripted tests. I tested each proposed fix first by
                    overriding the fix files in an automated browser (Playwright
                    request interception). The store owner then applied it in
                    the theme editor. I re-verified it on the live site with
                    cache-busted requests.
                  </p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Breadcrumb contrast went from 2.68:1 (#999 on #f8f8f8)
                      to 7.96:1 (#4d4d4d).
                    </li>
                    <li>
                      The cart drawer, mobile menu, desktop search, mobile
                      search, and mobile product-tab popups now move focus
                      inside, keep Tab inside, close on Escape, and return
                      focus to the trigger.
                    </li>
                    <li>
                      Pause controls were added for the slideshow, the marquee,
                      and the video. prefers-reduced-motion is respected.
                    </li>
                    <li>
                      The add-to-cart action is announced through a live
                      region.
                    </li>
                    <li>
                      Every visible image across the 10 page and width runs
                      has meaningful alternative text.
                    </li>
                  </ul>
                </div>

                <h3 className="mt-10 font-serif text-xl md:text-2xl">
                  WCAG 2.2 AA criteria
                </h3>
                <p className="mt-4 text-white/60 md:text-lg">
                  Eleven criteria moved to Pass. 2.4.6 and 3.1.2 are still
                  Partial. 2.1.2 was a fail before because focus could leave
                  the modals. Focus now stays inside until Escape closes the
                  dialog and returns focus to the trigger.
                </p>
                <div className="mt-6 max-w-full overflow-x-auto">
                  <table className="w-full table-fixed border-collapse text-left text-sm md:text-base">
                    <caption className="caption-top mb-4 text-left font-serif text-xl text-white md:text-2xl">
                      Storefront criteria before and after the remediation
                    </caption>
                    <colgroup>
                      <col className="w-[46%]" />
                      <col className="w-[27%]" />
                      <col className="w-[27%]" />
                    </colgroup>
                    <thead>
                      <tr>
                        <Th scope="col">Criterion</Th>
                        <Th scope="col">14 Oct 2026</Th>
                        <Th scope="col">17 Oct 2026</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {criteria.map((row) => (
                        <tr key={row[0]}>
                          <RowHeader>{row[0]}</RowHeader>
                          <Td>{row[1]}</Td>
                          <Td>{row[2]}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-white/60 md:text-base">
                  1.4.10 Reflow passed in the 14 October 2026 audit and was
                  not re-tested.
                </p>
              </Card>

              <Card className="px-6 py-8 sm:px-8 md:px-10 md:py-12">
                <h2 className="font-serif text-2xl md:text-4xl">
                  Screen reader testing
                </h2>
                <div className="mt-6 rounded-2xl border border-dashed border-emerald-300/60 px-5 py-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                    Placeholder
                  </p>
                  <p className="mt-3 text-white md:text-lg">
                    VoiceOver testing is pending, by Marios. No screen-reader
                    testing has been done, including VoiceOver and NVDA.
                  </p>
                </div>
              </Card>

              <Card className="px-6 py-8 sm:px-8 md:px-10 md:py-12">
                <h2 className="font-serif text-2xl md:text-4xl">
                  What remains
                </h2>
                <div className="mt-4 space-y-4 text-white/60 md:text-lg">
                  <p>Shopify-hosted checkout is outside the theme’s scope:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>An English “Shipping” rate name.</li>
                    <li>
                      A pre-ticked marketing checkbox. It is a GDPR concern,
                      and it was kept by owner choice.
                    </li>
                    <li>Help icons at 18×18 px (success criterion 2.5.8).</li>
                  </ul>
                  <p>
                    English navigation labels are a branding choice.
                  </p>
                </div>
              </Card>

              <section
                className="relative z-0 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-8 text-center text-gray-900 sm:px-10 md:text-left"
                aria-labelledby="store-cta"
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{ backgroundImage: `url(${grainImage.src})` }}
                />
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-16">
                  <div>
                    <h2
                      id="store-cta"
                      className="font-serif text-2xl md:text-3xl"
                    >
                      Want the same for your store?
                    </h2>
                    <p className="mt-2 text-sm md:text-base">
                      I am an IAAP WAS certified Web Accessibility Specialist. I
                      audit storefronts and fix the code.
                    </p>
                  </div>
                  <div>
                    <a
                      href="mailto:mariosknl@outlook.com"
                      className="inline-flex h-12 w-max items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 font-semibold text-white"
                    >
                      <span>Contact Me</span>
                      <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

function MobileMenuBefore() {
  return (
    <>
      The menu button’s accessible name was the English word “menu”. It did
      not expose an expanded state, focus was not trapped, and Escape did not
      close it.
    </>
  );
}

function MobileMenuAfter() {
  return (
    <>
      The accessible name is the Greek word{" "}
      <span lang="el">Μενού</span>. The button exposes expanded and controls.
      Focus moves to the close control, Tab stays inside, and Escape closes
      the menu and returns focus to the menu button.
    </>
  );
}
