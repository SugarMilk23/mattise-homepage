import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Particles from "./ui/particles";

export function Solutions() {
  return (
    <div className="h-full w-full mx-auto mt-20">
      <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-zinc-400 via-gray to-black py-4">
        <span className="text-6xl font-ptSerif flex ml-12 mb-5 font-bold">
          Solutions
        </span>
      </div>
      {/* <h1 className="text-3xl font-ptSerif flex justify-center mb-5">
        Solutions
      </h1> */}{" "}
      <BentoGrid className="w-[95%] mb-20 mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2 " : " "}
          />
        ))}
        {/* particles on homepage top */}
        <Particles
          className="absolute inset-0 h-full w-full z-0"
          quantity={100}
          ease={80}
          color="#FFFFFF"
          refresh
        />
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <img src="/infra.jpg" className="rounded-2xl" />
  </div>
);
const Skeleton2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <img src="/finance.avif" className="rounded-2xl" />
  </div>
);
const Skeleton3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <img src="/distribution.jpg" className="rounded-2xl" />
  </div>
);
const Skeleton4 = () => (
  <div className="flex flex-1 w-[98%] h-full min-h-[6rem] rounded-xl ">
    <img src="/dx.webp" className="w-full rounded-2xl" />
  </div>
);
const Skeleton5 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <img src="/webDev.webp" className="rounded-2xl" />
  </div>
);
const Skeleton6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <img src="/iot.gif" className="rounded-2xl" />
  </div>
);
const Skeleton7 = () => (
  <div className="flex flex-1 w-[98%] h-full min-h-[6rem] rounded-xl">
    <img src="/support.jpg" className="w-full rounded-2xl" />
  </div>
);

const items = [
  {
    title: "インフラストラクチャー",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "金融",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "流通",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton3 />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "DX",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton4 />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Web 開発",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton5 />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "IoT/人工知能",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton6 />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "企業サポート",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

// "use client";
// import Image from "next/image";
// import React from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// export function Solutions() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} layout={true} />
//   ));

//   return (
//     <div className="w-full h-full py-20">
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
//         Get to know your iSad.
//       </h2>
//       <Carousel items={cards} />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const data = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "/infra.jpg",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "/finance.avif",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "/distribution.jpg",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "/dx.webp",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "/webDev.webp",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "/iot.gif",
//     content: <DummyContent />,
//   },
// ];
