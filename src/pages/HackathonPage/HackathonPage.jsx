import HeroSection from "../../components/HeroSection/HeroSection";
import "./HackathonPage.scss";
import Participate from "../../components/Participate/Participate";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import FilterSection from "../../components/FilterSection/FilterSection";
import HackathonSection from "../../components/HackathonSection/HackathonSection";

const HackathonPage = () => {
  return (
    <div className="">
      <HeroSection />
      <FeatureSection />
      <Participate />
      <FilterSection />
      <HackathonSection />
    </div>
  );
};

export default HackathonPage;
