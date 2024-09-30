import IntroVideo from "@/components/IntroVideo";
import MatissePr from "@/components/MatissePr";
import Services from "@/components/Services";
import Recruit from "@/components/Recruit";
import { Solutions } from "@/components/Solutions";
import Example from "@/components/HorizontalScrollCarousel";
// import { About } from "@/components/About";

export default function Home() {
  return (
    <>
      <IntroVideo />
      {/* <About /> */}
      <MatissePr />
      <Services />
      <Example />

      {/* <BackgroundBeamsWithCollision className=" mx-auto"> */}
      <Solutions />
      {/* </BackgroundBeamsWithCollision> */}
      <Recruit />
    </>
  );
}
