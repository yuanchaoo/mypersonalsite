"use client";

import { useEffect, useMemo, useState } from "react";

type HomeHeroProps = {
  titleLines: string[];
  subtitle: string;
};

export function HomeHero({ titleLines, subtitle }: HomeHeroProps) {
  const fullTitle = titleLines.join("\n");
  const titleCharacters = useMemo(() => Array.from(fullTitle), [fullTitle]);
  const [typing, setTyping] = useState({
    fullTitle,
    visibleCharacters: 0,
  });

  if (typing.fullTitle !== fullTitle) {
    setTyping({
      fullTitle,
      visibleCharacters: 0,
    });
  }

  const visibleCharacters =
    typing.fullTitle === fullTitle ? typing.visibleCharacters : 0;
  const titleComplete = visibleCharacters >= titleCharacters.length;

  useEffect(() => {
    if (visibleCharacters >= titleCharacters.length) {
      return;
    }

    const timer = window.setTimeout(() => {
      setTyping((current) => {
        if (current.fullTitle !== fullTitle) {
          return current;
        }

        return {
          ...current,
          visibleCharacters: current.visibleCharacters + 1,
        };
      });
    }, 58);

    return () => window.clearTimeout(timer);
  }, [fullTitle, titleCharacters.length, visibleCharacters]);

  const visibleTitle = titleCharacters.slice(0, visibleCharacters).join("");
  const visibleLines = visibleTitle.split("\n");

  return (
    <div className="relative z-10 max-w-[819px]">
      <h1
        aria-label={titleLines.join(" ")}
        className="max-w-[12.8em] font-sans text-[clamp(3rem,7.3vw,80px)] font-medium leading-[1.125] tracking-normal"
      >
        {titleLines.map((line, index) => (
          <span
            aria-hidden="true"
            className="block min-h-[1.125em]"
            key={`${line}-${index}`}
          >
            {visibleLines[index] ?? ""}
          </span>
        ))}
      </h1>

      {titleComplete ? (
        <p className="hero-subtitle mt-8 flex max-w-[819px] items-start gap-[13px] font-sans text-[clamp(1.25rem,2.1vw,30px)] font-medium leading-normal text-black/70">
          <span
            className="mt-[0.55em] size-4 shrink-0 rounded-full bg-[#7a05ff] shadow-[inset_0_0_0_4px_#ead8ff]"
            aria-hidden="true"
          />
          <span>{subtitle}</span>
        </p>
      ) : null}
    </div>
  );
}
