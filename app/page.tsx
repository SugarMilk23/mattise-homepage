import IntroVideo from "@/components/introVideo";
import MatissePr from "@/components/matissePr";
import Services from "@/components/services";
import Recruit from "@/components/recruit";

import Solutions from "@/components/solutions";
import { About } from "@/components/about";

export default function Home() {
  return (
    <>
      <IntroVideo />
      <About />
      <MatissePr />
      <Services />
      <Solutions />

      <Recruit />
    </>
  );
}
