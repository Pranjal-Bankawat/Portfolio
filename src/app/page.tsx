import LandingPageAboutMe from "@/components/LandingPageAboutMe/Landing PageAboutMe";
import LandingPageWelcome from "@/components/LandingPageWelcome/LandingPageWelcome";
import MagneticCursorPlayground from "@/components/MagneticCursorPlayground/MagneticCursorPlayground";

const Home = () => {
  return (
    <div className="w-full ">
      <LandingPageWelcome />
      <LandingPageAboutMe />
      {/* <MagneticCursorPlayground /> */}
    </div>
  );
}

export default Home;