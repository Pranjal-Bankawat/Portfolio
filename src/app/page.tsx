import LandingPageAboutMe from "@/components/LandingPageAboutMe/Landing PageAboutMe";
import LandingPageMyWork from "@/components/LandingPageMyWork/LandingPageMyWork";
import LandingPageWelcome from "@/components/LandingPageWelcome/LandingPageWelcome";
import MagneticCursorPlayground from "@/components/MagneticCursorPlayground/MagneticCursorPlayground";

const Home = () => {
  return (
    <div className="w-full ">
      <LandingPageWelcome />
      <LandingPageAboutMe />
      <LandingPageMyWork />
      {/* <MagneticCursorPlayground /> */}
    </div>
  );
}

export default Home;