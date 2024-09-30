"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import React from "react";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] flex w-[350px] overflow-hidden bg-neutral-200 rounded-3xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 flex justify-center items-end">
        <p className="bg-gradient-to-br w-full text-center h-min from-white/20 to-white/0 p-8 text-[32px] font-black uppercase text-black backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/dx.webp",
    title: "DX",
    id: 1,
  },
  {
    url: "/webDev.webp",
    title: "Web 開発",
    id: 2,
  },
  {
    url: "/iot.gif",
    title: "IoT/人工知能",
    id: 3,
  },
  {
    url: "/finance.avif",
    title: "金融",
    id: 4,
  },
  {
    url: "/infra.jpg",
    title: "インフラストラクチャー",
    id: 5,
  },
  {
    url: "/distribution.jpg",
    title: "流通",
    id: 6,
  },
  {
    url: "/support.jpg",
    title: "企業サポート",
    id: 7,
  },
];
