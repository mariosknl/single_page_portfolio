import inoxtecLandingPage from "@/assets/images/inoxtec.png";
import ylgLandingPage from "@/assets/images/ylg.png";
import theodosiaWebsite from "@/assets/images/theodosiantenti.png";
import onthornsWebsite from "@/assets/images/onthorns.png";
import go4petsWebsite from "@/assets/images/go4pets.png";
import mariadempegiotiWebsite from "@/assets/images/mariadempegioti.png";
import blockreadyWebsite from "@/assets/images/blockready.png";
import cognityWebsite from "@/assets/images/cognity.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Cognity",
    year: "Mar 2022",
    title: "Web & Mobile Developer",
    results: [
      { title: "Worked on projects using various technology stacks" },
      {
        title: "Collaborated on projects for major Greek companies",
      },
      {
        title: "Proficient in Frontend Development",
      },
    ],
    link: "https://www.cognity.gr",
    image: cognityWebsite,
  },
  {
    company: "Blockready",
    year: "Mar 2021 - Apr 2022",
    title: "Online Blockchain Courses",
    results: [
      { title: "Created a website using the Kajabi platform" },
      { title: "Produced over 12 hours of video courses" },
      { title: "Implemented email marketing automations" },
    ],
    link: "https://www.blockready.com",
    image: blockreadyWebsite,
  },
  {
    company: "Inoxtec",
    year: "2023",
    title: "Greek Business Website",
    results: [
      { title: "Enhanced website performance with NextJS" },
      { title: "Utilized Sanity CMS for data management" },
      { title: "Designed to be responsive across multiple screen sizes" },
    ],
    link: "https://www.inoxtec.gr",
    image: inoxtecLandingPage,
  },
  {
    company: "YLG",
    year: "2022",
    title: "NFT Game Landing Page",
    results: [
      { title: "Developed front-end applications using ReactJS" },
      { title: "Created animations using Framer Motion" },
      { title: "Styled application using TailwindCSS" },
    ],
    link: "https://www.yourlifegames.com/",
    image: ylgLandingPage,
  },
  {
    company: "Theodosia Ntenti",
    year: "2023",
    title: "Fashion Designer Website",
    results: [
      { title: "Developed a Shopify website for women's fashion" },
      { title: "Implemented email marketing automations" },
      { title: "Integrated payment systems with Viva Wallet" },
    ],
    link: "https://www.theodosiantenti.gr",
    image: theodosiaWebsite,
  },
  {
    company: "On Thorns I Lay",
    year: "2023",
    title: "Music Band Website",
    results: [
      { title: "Developed a WordPress website for a music band" },
      { title: "Integrated shopping cart with PayPal" },
      { title: "Managed discography, upcoming events, and inventory" },
    ],
    link: "https://www.onthornsilay.live/",
    image: onthornsWebsite,
  },
  {
    company: "Go4Pets",
    year: "2025",
    title: "Pet Lovers Community",
    results: [
      { title: "Developed with NextJS, TailwindCSS, and TypeScript" },
      { title: "Integrated SanityCMS for content management" },
      { title: "Managed user authentication with Clerk" },
    ],
    link: "https://www.go4pets.gr/",
    image: go4petsWebsite,
  },
  {
    company: "Maria Dempegioti",
    year: "2025",
    title: "Clothing Manufacturer Website",
    results: [
      { title: "Developed with NextJS" },
      { title: "Using TailwindCSS4 for styling" },
      { title: "Typescript for type safety" },
    ],
    link: "https://www.mariadempegioti.gr/",
    image: mariadempegiotiWebsite,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold
                uppercase tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 items-center text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold
                inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
