"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/style.css";

gsap.registerPlugin(ScrollTrigger);

function Demo() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = svg?.querySelector("path");
    const textContainer = textContainerRef.current;
    const textElements = textContainer?.querySelectorAll("p");

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
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          end: "top 10%",
          scrub: true,
          duration: 0.8,
          toggleActions: "play none none reverse",
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
      <section className="grid min-h-screen place-items-center py-16">
        <p className="mb-8 max-w-[15ch] text-balance text-center text-[5vw] font-bold leading-[1]">
          Scroll-driven path animations
          <span className="my-6 block font-mono text-[3vw]">
            🍏{" "}
            <a
              href="https://www.apple.com/ipad-10.9/"
              target="_blank"
              className="underline"
            >
              Apple Style
            </a>{" "}
            🔗
          </span>
          <a
            className="block text-lg font-normal underline"
            href="https://www.frontend.fyi"
            target="_blank"
          >
            By frontend.fyi
          </a>
        </p>
        <p>Time to do the scrolly-scrolly 👇</p>
      </section>
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
        <div className="video-container">
          <img src="/matissepr_dog.jpg" alt="Finance" />
        </div>
        <div ref={textContainerRef} className="text-container">
          <p className="fade-text">All screen. All colorful.</p>
          <p className="fade-text">Jot it down. Type it up.</p>
          <p className="fade-text">Take it with you.</p>
        </div>
      </section>
      <section className="h-screen bg-gray-100"></section>
    </div>
  );
}

export default Demo;
