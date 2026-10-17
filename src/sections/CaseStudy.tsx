import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";
import Link from "next/link";

const stats = [
  { label: "Violation nodes", before: "523", after: "214" },
  { label: "Critical-impact nodes", before: "18", after: "0" },
  { label: "Failing rules", before: "20", after: "3" },
  {
    label: "Nodes outside contrast and landmark-region rules",
    before: "80",
    after: "1",
  },
];

export const CaseStudySection = () => {
  return (
    <section className="pb-16 lg:pb-24" id="case-study">
      <div className="container">
        <Card className="px-6 py-8 sm:px-8 md:px-10 md:py-12">
          <p className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
            Case study
          </p>
          <h2 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
            Accessibility remediation
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/60 md:text-base">
            Shopify fashion store (theodosiantenti.gr), Ella theme, WCAG 2.2 AA
            target. Same axe-core 4.13 method on 14 Oct 2026 and 17 Oct 2026.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-white/60">{stat.label}</dt>
                <dd className="mt-1 font-serif text-2xl text-white md:text-3xl">
                  {stat.before}{" "}
                  <span className="text-emerald-300">to</span> {stat.after}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            href="/case-studies/theodosiantenti"
            className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 md:w-auto"
          >
            <span>Read the case study</span>
            <ArrowUpRightIcon className="size-4" aria-hidden="true" />
          </Link>
        </Card>
      </div>
    </section>
  );
};
