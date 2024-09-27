"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MatissePr() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLImageElement>(null);
  const middleImageRef = useRef<HTMLImageElement>(null);
  const rightImageRef = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const sloganRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const leftImage = leftImageRef.current;
    const middleImage = middleImageRef.current;
    const rightImage = rightImageRef.current;
    const textContainer = textContainerRef.current;
    const slogan = sloganRef.current;

    if (
      !container ||
      !leftImage ||
      !middleImage ||
      !rightImage ||
      !textContainer ||
      !slogan
    )
      return;

    // Image animations
    const imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "center center+=200px",
        scrub: 1,
      },
    });

    // Initial state for images
    gsap.set([leftImage, rightImage], { y: -120, autoAlpha: 0 });
    gsap.set(middleImage, { y: 120, autoAlpha: 0 });

    // Image animation
    imageTl
      .to(
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
      );

    // Text animations
    const textElements = textContainer.querySelectorAll("p");
    gsap.set(textElements, { x: -100, opacity: 0 });
    gsap.set(slogan, { opacity: 0, x: -100 });

    gsap.to(slogan, {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: slogan,
        start: "top bottom-=80px",
        end: "top 50%",
        scrub: 1,
      },
    });

    textElements.forEach((text: Element) => {
      gsap.to(text, {
        opacity: 1,
        x: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "top 50%",
          scrub: 1,
        },
      });
    });

    return () => {
      imageTl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center items-top h-[250vh] w-full"
    >
      {/* Text container */}

      {/* Image elements */}
      <img
        ref={leftImageRef}
        src="/matissepr_dog.png"
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
        src="/matissepr_panda.png"
        alt="panda"
        className="w-[33.333334%] h-screen sticky top-0 z-10"
      />
      <div
        ref={textContainerRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-container w-full  "
      >
        <img
          src="matissepr_slogan.png"
          alt="slogan"
          ref={sloganRef}
          className="pb-5"
        />
        <p className="text-white text-small text-left fade-text lg:text-xl md:text-lg ">
          おや、動物たちまでいきいきとITを使いこなしていますね！
          <br />
          そう、株式会社マチス教育システムはどんな「当たり前じゃないトコロ」にも
          <br />
          驚きの便利さを提案する、IT企業！その一部をご紹介します
        </p>
      </div>
    </div>
  );
}
