"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: video,
        start: "top top",
        end: "center bottom",
        scrub: 1, // Smooth scrubbing effect
        // markers: true,
      },
    });

    tl.to(video, {
      scale: 0.8,
      autoAlpha: 0.4,
      ease: "power2.inOut", // Easing function for smooth transition
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section>
      <div className="h-6/6 w-full flex justify-center ">
        <div className="w-full flex justify-center">
          <video
            ref={videoRef}
            className="pointer-events-none w-full flex justify-center "
            autoPlay
            muted
            playsInline={true}
          >
            <source src="/intro3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
