"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Set up video event listeners
    const handleVideoLoaded = () => {
      setVideoLoaded(true);
    };

    video.addEventListener("loadeddata", handleVideoLoaded);

    // Set up scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom 80%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.fromTo(
      video,
      { scale: 1, autoAlpha: 1 },
      { scale: 0.8, autoAlpha: 0.4, ease: "power2.inOut" }
    );

    return () => {
      video.removeEventListener("loadeddata", handleVideoLoaded);
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-full flex justify-center">
          <video
            ref={videoRef}
            className={`pointer-events-none w-full ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            playsInline={true}
            preload="auto"
            // Add loop to ensure continuous playback
          >
            <source src="/intro3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
