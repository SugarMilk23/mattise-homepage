"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionStyle,
  useSpring,
  useInView,
} from "framer-motion";
import "../styles/services.css";

function Services() {
  return (
    <div className="h-[200vh] flex items-center justify-center ">
      <FoldableMap />
    </div>
  );
}

const FoldableMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  const [isFolded, setIsFolded] = useState(true);

  // Create a motion value based on inView state
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { damping: 20, stiffness: 100 });

  // Transform progress value to map expansion values
  const xLeftSection = useTransform(smoothProgress, [0, 1], ["100%", "0%"]);
  const xRightSection = useTransform(smoothProgress, [0, 1], ["-100%", "0%"]);
  const centerScale = useTransform(smoothProgress, [0.5, 1], [0, 1]);
  const centerBrightness = useTransform(smoothProgress, [0.5, 1], [0.2, 1]);

  useEffect(() => {
    if (isInView) {
      progress.set(1);
      setIsFolded(false);
    } else {
      progress.set(0);
      setIsFolded(true);
    }
  }, [isInView, progress]);

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center">
      <div className="overflow-x-clip  w-full">
        <p className="rounded-2xl text-3xl bg-white w-[38%] mx-auto mt-32 mb-6 px-10 py-5 text-[hsl(73_69%_26%)]">
          マチスのサービスをご紹介! 👇
        </p>
        <motion.div
          animate={isFolded ? "folded" : "open"}
          variants={{
            open: { scale: 1 },
            folded: { scale: 0.9 },
          }}
          initial="folded"
          className="relative  flex flex-col items-center"
        >
          <motion.div
            variants={{ open: { rotate: 0 }, hovering: { rotate: 0 } }}
            whileHover="hovering"
            initial={{ rotate: 3 }}
            className="grid aspect-video  w-[600px] md:w-[960px] lg:w-[1200px] xl:w-[1500px] p-8"
          >
            <div className="grid grid-cols-3  [grid-area:1/1]">
              <motion.div
                style={{ x: xLeftSection, skewY: "-1deg" }}
                className="map-image  origin-bottom-right border-r border-[rgba(255,255,255,.1)] shadow-2xl "
              />
              <motion.div
                style={
                  {
                    scaleX: centerScale,
                    "--brightness": centerBrightness,
                  } as MotionStyle
                }
                className="map-image  brightness-[--brightness]"
              />
              <motion.div
                style={{ x: xRightSection, skewY: "1deg" }}
                className="map-image h[723px] origin-bottom-left border-l border-[rgba(255,255,255,.1)] shadow-xl"
              />
            </div>
          </motion.div>
          <motion.div
            variants={{
              folded: {
                opacity: 0,
                scale: 0.9,
                y: 30,
              },
              open: {
                opacity: 1,
                scale: 1,
                y: 0,
              },
            }}
            className="flex w-full justify-center text-xl font-semibold md:text-4xl"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
