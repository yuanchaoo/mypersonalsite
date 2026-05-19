"use client";

import { useState } from "react";
import Image from "next/image";
import { AboutSection } from "./about-section";
import { HomeHero } from "./home-hero";
import { Signature } from "./signature";

type Locale = "en" | "cn";

const appIcons = [
  {
    src: "/qunar-icon.png",
    alt: "Qunar app icon",
    className:
      "left-[calc(50%+418px)] top-[202px] size-[90px] rounded-[20px] opacity-80",
  },
  {
    src: "/meituan-icon.png",
    alt: "Meituan app icon",
    className:
      "left-[calc(50%+397px)] top-[353px] size-[71px] rounded-xl",
  },
  {
    src: "/pinduoduo-icon.png",
    alt: "Pinduoduo app icon",
    className:
      "left-[calc(50%+263px)] top-[262px] size-[90px] rounded-[20px]",
  },
];

const homeCopy = {
  en: {
    titleLines: ["Designing simplicity", "out of complexity."],
    subtitle: '"Exploring how AI expands what designers can create."',
    signatureLabels: [
      "AI",
      "UX/UI Design",
      "Vibe Coding",
      "Creative Direction",
      "Design Systems",
    ],
    about: {
      title: ["/About", "me."],
      intro:
        "UX/Product Designer with 6+ years at China's top tech companies (Pinduoduo, Meituan, NIO), specializing in B2B enterprise systems and complex product workflows.",
      strengthsTitle: "Core strengths:",
      strengths: [
        {
          lead: "0-1 product design",
          body: "across data platforms, logistics operations, and autonomous driving subscription flows",
        },
        {
          lead: "B-side system design",
          body: "- building design systems, component libraries, and measurement frameworks at scale",
        },
        {
          lead: "Research-driven approach",
          body: "- field research, user interviews, and data-informed iteration",
        },
        {
          lead: "Currently at Zelostech (China)",
          body: "- a leading autonomous vehicle company - leading the design of domestic and international official websites.",
        },
      ],
      experience: [
        {
          company: "Zelostech",
          role: "UX Designer",
          period: "2025/7 -today",
          icon: "/zelos-icon.png",
          bullets: [
            "Led the overall design of the company's official website system, establishing a distinctive Zelostech design language to strengthen brand recognition and enhance external communication of brand and business.",
          ],
        },
        {
          company: "NIO",
          role: "UX Designer",
          period: "2022/2 -2025/3",
          icon: "/about-qunar-icon.png",
          bullets: [
            "Led the 0-to-1 design of the data tracking platform based on user research and competitive analysis, saving 3M+ RMB in third-party costs post-launch.",
            "Designed the company-level data platform, driving an AI+Data approach with smart suggestions and dynamic visualization, achieving a user satisfaction score of 4.2+.",
            "Designed the smart driving subscription flow and ADAS feature visualization across App and in-car touchpoints, improving user engagement and feature activation rates.",
            "Led the 0-to-1 build of the AO operations platform, establishing B-side component standards and an experience measurement framework to improve design efficiency.",
          ],
        },
        {
          company: "Meituan",
          role: "UX Designer",
          period: "2021/5 -2022/3",
          icon: "/about-meituan-icon.png",
          bullets: [
            "Redesigned the driver logistics app, simplifying product structure and boosting operational efficiency by 73.6%.",
            "Drove digitization of business workflows and data collection, significantly improving overall operational efficiency.",
            "Conducted in-depth field research and user interviews to uncover issues and drive product experience improvements.",
          ],
        },
        {
          company: "PDD",
          role: "UX Designer",
          period: "2019/7 -2021/5",
          icon: "/about-pinduoduo-icon.png",
          bullets: [
            "Designed the merchant ad platform (App & PC), balancing business goals with user experience.",
            "Led Double 11 campaign design, driving 200K+ merchant participation and improving advertiser retention.",
            "Designed Duoduo Grocery's logistics back-office system based on on-site user research.",
          ],
        },
      ],
      skills: [
        { label: "UI", value: 7 },
        { label: "UX", value: 9 },
        { label: "User research", value: 7 },
        { label: "AI", value: 8 },
        { label: "Vibe coding", value: 7.5 },
        { label: "HTML/CSS", value: 5 },
        { label: "Next.js", value: 6.5 },
      ],
    },
  },
  cn: {
    titleLines: ["从复杂中", "设计出简单。"],
    subtitle: "「探索 AI 如何拓展设计师的创造边界。」",
    signatureLabels: [
      "人工智能",
      "用户体验与界面设计",
      "氛围编程",
      "创意指导",
      "设计系统",
    ],
    about: {
      title: ["/关于", "我。"],
      intro:
        "拥有 6 年以上中国头部科技公司（拼多多、美团、蔚来）经验的 UX/Product Designer，专注于 B2B 企业系统与复杂产品流程设计。",
      strengthsTitle: "核心能力：",
      strengths: [
        {
          lead: "0 到 1 产品设计",
          body: "覆盖数据平台、物流运营、自动驾驶订阅流程等复杂业务场景",
        },
        {
          lead: "B 端系统设计",
          body: "- 构建设计系统、组件库与规模化度量框架",
        },
        {
          lead: "研究驱动的方法",
          body: "- 通过实地调研、用户访谈与数据分析推动迭代",
        },
        {
          lead: "目前任职于 Zelostech",
          body: "- 一家领先的自动驾驶公司，负责国内与国际官网设计工作。",
        },
      ],
      experience: [
        {
          company: "Zelostech",
          role: "UX 设计师",
          period: "2025/7 -至今",
          icon: "/zelos-icon.png",
          bullets: [
            "主导公司官网体系的整体设计，建立具有 Zelostech 识别度的设计语言，强化品牌认知与对外业务沟通效率。",
          ],
        },
        {
          company: "蔚来",
          role: "UX 设计师",
          period: "2022/2 -2025/3",
          icon: "/about-qunar-icon.png",
          bullets: [
            "基于用户研究与竞品分析，从 0 到 1 设计数据追踪平台，上线后节省 300 万以上第三方成本。",
            "设计公司级数据平台，推动 AI+Data 的智能建议与动态可视化体验，用户满意度达到 4.2+。",
            "设计智能驾驶订阅流程与 ADAS 功能可视化体验，覆盖 App 与车机触点，提升用户参与和功能激活。",
            "主导 AO 运营平台从 0 到 1 建设，建立 B 端组件标准与体验度量框架，提升设计效率。",
          ],
        },
        {
          company: "美团",
          role: "UX 设计师",
          period: "2021/5 -2022/3",
          icon: "/about-meituan-icon.png",
          bullets: [
            "重设计司机物流 App，简化产品结构，运营效率提升 73.6%。",
            "推动业务流程与数据采集数字化，显著提升整体运营效率。",
            "开展深入实地调研与用户访谈，定位问题并推动产品体验改进。",
          ],
        },
        {
          company: "拼多多",
          role: "UX 设计师",
          period: "2019/7 -2021/5",
          icon: "/about-pinduoduo-icon.png",
          bullets: [
            "设计商家广告平台（App 与 PC），平衡业务目标与用户体验。",
            "主导双 11 活动设计，带动 20 万以上商家参与并提升广告主留存。",
            "基于现场用户研究，设计多多买菜物流后台系统。",
          ],
        },
      ],
      skills: [
        { label: "界面设计", value: 7 },
        { label: "体验设计", value: 9 },
        { label: "用户研究", value: 7 },
        { label: "人工智能", value: 8 },
        { label: "氛围编程", value: 7.5 },
        { label: "HTML/CSS", value: 5 },
        { label: "Next.js", value: 6.5 },
      ],
    },
  },
} satisfies Record<
  Locale,
  {
    titleLines: string[];
    subtitle: string;
    signatureLabels: string[];
    about: {
      title: string[];
      intro: string;
      strengthsTitle: string;
      strengths: Array<{ lead: string; body: string }>;
      experience: Array<{
        company: string;
        role: string;
        period: string;
        icon: string;
        bullets: string[];
      }>;
      skills: Array<{
        label: string;
        value: number;
      }>;
    };
  }
>;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = homeCopy[locale];

  return (
    <main className="min-h-svh bg-white text-black">
      <header className="flex h-12 items-center justify-between border-b border-[#d9d9d9] px-6 sm:px-10 lg:px-20">
        <Image
          src="/yuanchao-mark.svg"
          alt="Yuanchao"
          width={32}
          height={32}
          priority
        />

        <nav
          aria-label="Language"
          className="font-pixel text-xl text-black opacity-20"
        >
          {locale === "en" ? (
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => setLocale("cn")}
            >
              CN
            </button>
          ) : (
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => setLocale("en")}
            >
              EN
            </button>
          )}
        </nav>
      </header>

      <section className="relative mx-auto flex min-h-[calc(100svh-48px)] w-full max-w-[1440px] flex-col justify-between overflow-hidden px-6 py-16 sm:px-10 sm:py-24 lg:px-20 lg:pb-10 lg:pt-[202px]">
        <HomeHero titleLines={copy.titleLines} subtitle={copy.subtitle} />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
        >
          {appIcons.map((icon) => (
            <div
              key={icon.src}
              className={`pointer-events-auto absolute rotate-[5.54deg] overflow-hidden transition-transform duration-300 ease-out hover:rotate-0 ${icon.className}`}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                fill
                sizes="90px"
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>

        <Signature key={locale} labels={copy.signatureLabels} />
      </section>

      <AboutSection {...copy.about} />
    </main>
  );
}
