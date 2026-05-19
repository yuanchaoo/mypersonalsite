"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const aboutIcons = [
  {
    src: "/about-qunar-icon.png",
    alt: "Qunar",
    className: "size-[90px] rounded-[20px] rotate-[5.54deg]",
  },
  {
    src: "/about-pinduoduo-icon.png",
    alt: "Pinduoduo",
    className: "size-[71px] rounded-xl rotate-[5.54deg]",
  },
  {
    src: "/about-meituan-icon.png",
    alt: "Meituan",
    className: "size-[70px] rounded-[20px] rotate-[5.54deg] opacity-80",
  },
  {
    src: "/zelos-icon.png",
    alt: "Zelos",
    className: "size-[82px] rounded-2xl rotate-[-16.81deg]",
  },
];

const cardTransition = {
  duration: 0.85,
  ease: [0.22, 1, 0.36, 1] as const,
};

type AboutSectionProps = {
  title: string[];
  intro: string;
  strengthsTitle: string;
  strengths: Array<{
    lead: string;
    body: string;
  }>;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    icon: string;
    bullets: string[];
  }>;
};

export function AboutSection({
  title,
  intro,
  strengthsTitle,
  strengths,
  experience,
}: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const cards = [
    {
      id: "intro",
      content: (
        <AboutIntroCard
          intro={intro}
          strengths={strengths}
          strengthsTitle={strengthsTitle}
        />
      ),
    },
    {
      id: "experience",
      content: <ExperienceCard experience={experience} />,
    },
  ];

  useEffect(() => {
    let animationFrame = 0;

    const updateCard = () => {
      animationFrame = 0;

      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(
        Math.max(-rect.top / window.innerHeight, 0),
        1,
      );
      const nextCard = Math.min(
        Math.floor(progress * cards.length),
        cards.length - 1,
      );

      setActiveCard(nextCard);
    };

    const handleScroll = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateCard);
    };

    updateCard();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [cards.length]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#504fed] px-6 text-white sm:px-10 lg:px-20"
      style={{ minHeight: `${cards.length * 100}svh` }}
    >
      <div className="sticky top-0 mx-auto grid min-h-svh w-full max-w-[1440px] items-center gap-12 py-16 lg:grid-cols-[360px_minmax(0,762px)] lg:justify-between lg:py-[63px]">
        <h2 className="font-sans text-[clamp(3.5rem,7.3vw,80px)] font-medium leading-[1.125] tracking-normal">
          {title.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
        </h2>

        <CardStack cards={cards} activeCard={activeCard} />
      </div>
    </section>
  );
}

function CardStack({
  cards,
  activeCard,
}: {
  cards: Array<{ id: string; content: ReactNode }>;
  activeCard: number;
}) {
  return (
    <div className="relative min-h-[687px] overflow-visible">
      {cards.map((card, index) => {
        const isActive = index === activeCard;
        const isPrevious = index < activeCard;
        const isFuture = index > activeCard;

        return (
          <motion.div
            key={card.id}
            className={`absolute inset-0 origin-center ${
              isFuture ? "pointer-events-none" : ""
            }`}
            initial={false}
            animate={{
              y: isPrevious ? "-28%" : isFuture ? "100vh" : "0%",
              scale: isPrevious ? 0.92 : 1,
              opacity: isPrevious ? 0.35 : isFuture ? 1 : 1,
              filter: isPrevious ? "blur(1px)" : "blur(0px)",
              zIndex: isPrevious ? index : isActive ? 20 + index : 10 + index,
            }}
            transition={cardTransition}
          >
            {card.content}
          </motion.div>
        );
      })}
    </div>
  );
}

function AboutIntroCard({
  intro,
  strengthsTitle,
  strengths,
}: Pick<AboutSectionProps, "intro" | "strengthsTitle" | "strengths">) {
  return (
    <div className="h-full rounded-[21px] bg-white px-6 py-8 text-black sm:px-10 lg:min-h-[687px] lg:px-10 lg:py-10">
      <div className="max-w-[682px] text-[20px] leading-normal">
        <p className="font-semibold">{intro}</p>

        <p className="mt-[18px] font-extrabold">{strengthsTitle}</p>

        <ul className="mt-[15px] flex list-disc flex-col gap-[15px] pl-[30px]">
          {strengths.map((strength) => (
            <li key={strength.lead}>
              <strong className="text-[#7a05ff]">{strength.lead}</strong>{" "}
              {strength.body}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-8 pl-0 sm:pl-10 lg:mt-10 lg:gap-10">
        {aboutIcons.map((icon) => (
          <div
            key={icon.src}
            className={`relative shrink-0 overflow-hidden shadow-[0_8px_8px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-out hover:rotate-0 ${icon.className}`}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              fill
              sizes="90px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  experience,
}: Pick<AboutSectionProps, "experience">) {
  return (
    <div className="h-full rounded-[21px] bg-white px-6 py-8 text-black sm:px-[30px] lg:min-h-[687px] lg:py-10">
      <div className="flex flex-col gap-5">
        {experience.map((item, index) => (
          <div key={`${item.company}-${item.period}`}>
            <div className="grid grid-cols-[40px_minmax(0,1fr)] gap-[10px]">
              <div className="relative size-10 overflow-hidden rounded shadow-[0_5px_5px_rgba(0,0,0,0.05)]">
                <Image
                  src={item.icon}
                  alt={item.company}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-[20px] font-extrabold leading-normal">
                  {item.company} · {item.role} {item.period}
                </h3>
                <ul className="mt-[14px] list-disc pl-[18px] text-[12px] leading-normal text-black/50">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>

            {index < experience.length - 1 ? (
              <div className="ml-0 mt-5 h-px bg-black/10 sm:ml-0" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
