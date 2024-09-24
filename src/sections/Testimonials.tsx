import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Nick Aivalis",
    position: "CEO @Inoxtec",
    text: "Marios is a talented developer who is always willing to go the extra mile to deliver high-quality work. He's a great communicator and a pleasure to work with. I highly recommend him.",
    avatar: memojiAvatar1,
  },
  {
    name: "Theodosia Ntenti",
    position: "Owner @Theodosia Ntenti Fashion Brand",
    text: "Marios is a true professional. He's a talented designer who is able to take our ideas and turn them into beautiful designs. We're thrilled with the work he's done for us.",
    avatar: memojiAvatar2,
  },
  {
    name: "Vas Modinos",
    position: "CEO @Blockready",
    text: "Marios is a very talented personality and a great team player. Initially hired as a developer, but his skills and dedication to the project made him a valuable asset to the team. I highly recommend him.",
    avatar: memojiAvatar3,
  },
  {
    name: "Chris",
    position: "Founder @On Thorns I Lay",
    text: "Marios created a professional website for our band and surely exceeded our expectations. With his creativity and suggestions, he managed to deliver a website that represents our music and style. Highly recommended!",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Client Say about Me"
          description="Don't just take my word for it. See what my clients have to say
      about my work."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>
                        <div className="">
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </section>
  );
};
