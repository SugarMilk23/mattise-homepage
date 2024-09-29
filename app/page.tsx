import IntroVideo from "@/components/IntroVideo";
import MatissePr from "@/components/MatissePr";
import Services from "@/components/Services";
import Recruit from "@/components/Recruit";
import { Solutions } from "@/components/Solutions";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <>
      <IntroVideo />
      <MatissePr />
      <Services />
      <BackgroundBeamsWithCollision className=" h-full mx-auto">
        <Solutions />
      </BackgroundBeamsWithCollision>
      <Recruit />
    </>
  );
}
