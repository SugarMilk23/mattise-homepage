"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import React from "react";
import { useRef } from "react";

const Solutions = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-bold font-ptSerif text-4xl italic uppercase text-neutral-500">
          Solutions
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        {/* <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span> */}
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
      className="group relative h-[400px] w-[350px] overflow-hidden bg-neutral-200 rounded-xl cursor-pointer shadow-lg"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-all duration-300"
      ></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
        <h2 className="text-[27px] text-left font-bold font-ptSerif absolute uppercase text-white transition-all duration-300 group-hover:translate-y-[-313px] backdrop-blur-xl py-1 px-2 group-hover:backdrop-blur-none">
          {card.title}
        </h2>
        <p className="text-white opacity-0 font-ptSerif w-full transition-opacity duration-300 ease-in-out group-hover:opacity-100 ">
          {card.content}
        </p>
        <a
          href="#"
          className="text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 mt-3 "
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Solutions;

const cards = [
  {
    url: "/dx.webp",
    title: "DX",
    content:
      "デジタルトランスフォーメーション（DX）を通じて、お客様の業務効率を飛躍的に向上させる支援を行っています。最新のテクノロジーを活用し、従来のビジネスプロセスをデジタル化・自動化することで、生産性を高め、コスト削減や新しいビジネスモデルの構築をサポートします。また、データ分析やクラウド技術を駆使して、迅速な意思決定や柔軟な対応が可能な企業へと変革を推進します。",
    id: 1,
  },
  {
    url: "/webDev.webp",
    title: "Web 開発",
    content:
      "最新の技術とユーザー中心のデザインを融合させ、企業や個人向けに高品質なウェブ開発サービスを提供しています。クライアントのビジネスニーズを的確に捉え、モダンなウェブアプリケーションやレスポンシブなウェブサイトを、迅速かつ効率的に構築します。また、シームレスなユーザー体験を実現するためのフロントエンドから、堅牢なデータ管理を支えるバックエンドまで、幅広いソリューションを一貫して提供いたします。",
    id: 2,
  },
  {
    url: "/iot.gif",
    title: "IoT/人工知能",
    content:
      "私たちの会社が提供するIoTサービスは、あらゆるデバイスやセンサーをインターネットに接続し、データの収集・分析を通じて、業務の効率化や新しい価値創造をサポートするものです。スマートホームから産業機械まで、さまざまな分野に対応し、リアルタイムでのデータ管理やリモート制御が可能です。これにより、企業や個人はよりインテリジェントで効率的な運用を実現できます。",
    id: 3,
  },
  {
    url: "/finance.avif",
    title: "金融",
    content:
      "当社は、金融業界向けに最先端のITソリューションを提供し、業務効率化やセキュリティ強化を支援しています。システムの自動化やデータ分析ツールを通じて、顧客体験の向上やリスク管理の最適化を実現します。また、当社のクラウドベースのサービスは、柔軟なインフラストラクチャを提供し、急速に変化する市場ニーズに対応可能です。高い信頼性と迅速なサポートで、金融機関のデジタル化を推進しています。",
    id: 4,
  },
  {
    url: "/infra.jpg",
    title: "インフラストラクチャー",
    content:
      "当社が提供しているITインフラストラクチャー業務は、企業がビジネスを円滑に運営できるよう、基盤となるIT環境を整備し、サポートするサービスです。これには、サーバーやネットワークの設計・構築、クラウドサービスの導入、データベース管理、セキュリティ対策の強化などが含まれます。",
    id: 5,
  },
  {
    url: "/distribution.jpg",
    title: "流通",
    content:
      "流通業界に特化した革新的なソリューションを提供し、業務の効率化と最適化を実現します。リアルタイムでの在庫管理、注文処理、物流追跡を強化し、データ分析に基づく意思決定を支援することで、企業が迅速かつ効果的に市場の変化に対応できるようサポートします。また、顧客体験の向上を図り、デジタル化を通じて競争力のあるビジネス成長を促進します。",
    id: 6,
  },
  {
    url: "/support.jpg",
    title: "企業サポート",
    content:
      "ITを活用して企業の成長と効率化を支援する包括的なサービスを提供しています。システム開発やクラウドソリューション、セキュリティ対策など、ビジネスニーズに合わせた最適なITインフラを構築し、業務プロセスの自動化やデータ分析を通じて、企業の競争力を高めます。さらに、ITコンサルティングやサポートを通じて、技術的な課題解決とともに、クライアントの持続的な成長を支えます。",
    id: 7,
  },
];
