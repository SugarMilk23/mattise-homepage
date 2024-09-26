"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Dog() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLImageElement>(null);
  const middleImageRef = useRef<HTMLImageElement>(null);
  const rightImageRef = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const leftImage = leftImageRef.current;
    const middleImage = middleImageRef.current;
    const rightImage = rightImageRef.current;
    const textContainer = textContainerRef.current;

    if (
      !container ||
      !leftImage ||
      !middleImage ||
      !rightImage ||
      !textContainer
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "center+=100px center",
        scrub: 1,
        markers: true, // Uncomment for debugging
      },
    });

    // Initial state
    gsap.set([leftImage, rightImage], { y: -120, autoAlpha: 0 });
    gsap.set(middleImage, { y: 120, autoAlpha: 0 });
    gsap.set(textContainer, { x: 100, autoAlpha: 0 });

    // Animation
    tl.to(
      [leftImage, rightImage],
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
      },
      "<"
    )
      .to(
        middleImage,
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        textContainer,
        {
          x: 200,
          autoAlpha: 1,
          duration: 0.3,
          zIndex: 30,
          ease: "power2.out",
        },
        "<"
      ); // The "<" makes this animation start at the same time as the previous one

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center items-top h-[2000px] w-full"
    >
      {/* Overlay text container */}
      <div
        ref={textContainerRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4"
      >
        <h1 className="text-white text-3xl w-full text-center">
          当たり前じゃないトコロにマチスのIT
        </h1>
        <p className="text-white w-full text-center">
          おや、動物たちまでいきいきとITを使いこなしていますね！
          <br />
          そう、株式会社マチス教育システムはどんな「当たり前じゃないトコロ」にも
          <br />
          驚きの便利さを提案する、IT企業！その一部をご紹介します
        </p>
      </div>

      {/* Image elements */}
      <img
        ref={leftImageRef}
        src="/matissepr_dog.jpg"
        alt="dog"
        className="w-1/3 h-screen sticky top-0 z-10"
      />
      <img
        ref={middleImageRef}
        src="/matissepr_kingyo.jpg"
        alt="golden fish"
        className="w-1/3 h-screen sticky top-0 z-10"
      />
      <img
        ref={rightImageRef}
        src="/matissepr_panda.jpg"
        alt="panda"
        className="w-1/3 h-screen sticky top-0 z-10"
      />
    </div>
  );
}
