"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="about1.webp"
        subheading="私たちについて"
        heading="株式会社マチス教育システム"
      >
        <Content1 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="about2.avif"
        subheading="経営理念"
        heading="自己成長で未来を創る"
      >
        <Content2 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const TextParallaxContent: React.FC<TextParallaxContentProps> = ({
  imgUrl,
  subheading,
  heading,
  children,
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

interface StickyImageProps {
  imgUrl: string;
}

export const StickyImage: React.FC<StickyImageProps> = ({ imgUrl }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const OverlayCopy: React.FC<OverlayCopyProps> = ({ subheading, heading }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-6xl">{heading}</p>
    </motion.div>
  );
};

const Content1: React.FC = () => (
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-2 pb-24 pt-12 md:grid-cols-8 lg:grid-cols-12">
    <h2 className="col-span-1 text-2xl w-max md:text-4xl lg:text-3xl font-fredoka font-bold text-gray md:col-span-4">
      学ぶ力を作る企業
      <br />
      知識欲が生きる社会を創る
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 font-ptSerif ">
        株式会社マチス教育システムのWebサイトをご覧いただきありがとうございます。
      </p>
      <p className="mb-4 text-xl text-neutral-600 font-ptSerif ">
        弊社の設立は1990年です。すでに30年以上が経過しました。
        弊社はパソコンスクールの運営から始まりました。
        当時はパソコン時代であり、一般人向けにワープロ、パソコン、CAD、DTP、Web、プロミング、eラーニングなどのコースをとりそろえ、首都圏に25校を展開していました。
        15年目に入る頃、弊社は業態の変換を果たします。パソコン教育からIT業務への転換です。それはパソコン時代が終わり、
        日本社会はネット時代に突入したからです。
        社会の要請に従い、弊社は大きく変わりました。
        現在、弊社はシステム開発を中心とするIT企業となっています。
        金融系システム、医療系システム、小売系システムの開発などが主流です。
        ベトナムの子会社も補完勢力としてIT業務に張り切っています。
        弊社はこの他に、企業向けにパソコン教育を継続し、フィリピンやインドネシアの地においてエビ事業を展開し、そして各種アプリの開発などを手掛けています。
      </p>

      <p className="mb-8 text-xl text-neutral-600 font-ptSerif ">
        弊社の企業経営のモットーは誠実さと真剣さです。
        それは仕事に対する基本の姿勢です。弊社の社員は皆、この精神に則ってIT業務に邁進しています。
        それはお客様の信頼を勝ち得る唯一の方法だからです。これからも大切に堅持していきます。
        今後も日本社会の変化や世界の情勢に目を配りながら慎重に、そして時には果敢に会社経営にチャレンジして参ります。
      </p>
      <div className="flex justify-end">
        <img
          src="kakisuCoin.jpg"
          alt="kakisuCoin"
          className="w-12 h-12 rounded-full border-none mr-2 -mt-3"
        />
        <p className="text-medium text-right text-neutral-600 mb-4">
          代表取締役　柿栖　恒昭
        </p>
      </div>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more
      </button>
    </div>
  </div>
);

const Content2: React.FC = () => (
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-2 pb-24 pt-12 md:grid-cols-8 lg:grid-cols-12">
    <h2 className="col-span-1 font-fredoka text-gray text-2xl w-max md:text-4xl lg:text-3xl font-bold md:col-span-4">
      人と技術で広がる可能性、
      <br />
      成長する社会へ。
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 font-ptSerif ">
        株式会社マチス教育システムは、すべてのお客様のために
        顧客満足度最大化を目指し、IT・教育関連ソリューションサービスを展開し、お客様のさまざまなご要望に新たなアイディアを発揮してお応えします。
      </p>
      <p className="mb-4 text-xl text-neutral-600 font-ptSerif ">
        社員の自己実現を通じての社会貢献のために
        <br />
        ひとりひとりの社員の自主性や能力を高めることこそ社会成長の基本と考えます。
      </p>
      <p className="mb-4 text-xl text-neutral-600 font-ptSerif ">
        マチスの教育・研修制度は、ITスキルだけではなく、ヒューマンスキル、マネージメント力も合わせて磨きます。
      </p>
      <p className="mb-4 text-xl text-neutral-600 font-ptSerif ">
        Education First マチス教育システム
        マチス教育システムは首都圏に展開する個人向けパソコンスクール【マチスアカデミー】を活用するところに特色があります。
      </p>
      <p className="mb-8 text-xl text-neutral-600 font-ptSerif ">
        ここでは、多くのシステムエンジニアを育成し、日々、IT教育やPC教育の品質向上に努めています。
      </p>

      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more
      </button>
    </div>
  </div>
);
