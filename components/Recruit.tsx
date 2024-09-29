"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/recruit.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Recruit() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = svg?.querySelector("path");
    const textContainer = textContainerRef.current;
    const textElements = textContainer?.querySelectorAll("p, button, span");

    // Set initial states
    gsap.set(path as any, { strokeDasharray: 9300, strokeDashoffset: 9300 });
    gsap.set(textElements as any, { opacity: 0 });

    // Animate SVG path
    gsap.to(path as any, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".ipad-section",
        start: "top 50%",
        end: "top 20%",
        scrub: 1,
      },
    });

    // Animate text elements
    textElements?.forEach((text: any) => {
      gsap.to(text, {
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          end: "top 10%",
          scrub: 1,
          // toggleActions: "play none none reverse",
        },
      });
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section className="ipad-section">
        <div className="svg-container">
          <svg
            ref={svgRef}
            viewBox="0 0 1400 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M817.502 79.4996C817.502 79.4996 471.288 64.9987 508.395 94.9995C545.503 125 591.503 107 759.003 136.5C1250.34 223.034 668.039 234.994 416.503 192C135.711 167.202 650.004 358.498 1035 268C1152.35 253.448 1361.42 429.964 803.003 370.5C394.503 327 280.856 305.789 226.503 327C165.003 351 1129.5 469.998 1253.5 460.5C1357.5 438.5 1690.5 582 888.503 542L118.503 430C-33.4972 406.5 -217.997 565 872.003 582L1357.5 565C1511.5 626 1623 719.5 118.503 613.5C60.9675 609.446 -289 592 388 727"
              stroke="black"
              strokeWidth="130"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="image-container ">
          <img src="/recruit.png" alt="Finance" className="w-full" />
        </div>
        <div ref={textContainerRef} className="text-container">
          <p className="text-2xl font-ptSerif font-semibold">
            もっと上を目指したい！新しい技術、知識を付けたい！
            そんな方ならマチスにぴったりです。
          </p>

          {/* <p className="fade-text text-5xl font-bold font-ptSerif ">
            <Link href="/recruit">RECRUIT 👈</Link>
          </p> */}
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <p className="button-text font-ptSerif font-semibold italic">
              RECRUIT
            </p>
          </button>

          <p className="fade-text text-2xl font-serif">
            マチス教育システムでは、一緒に働く仲間を募集しています。
          </p>
        </div>
      </section>
      <section className="h-screen bg-gray-100"></section>
    </div>
  );
}

export default Recruit;
