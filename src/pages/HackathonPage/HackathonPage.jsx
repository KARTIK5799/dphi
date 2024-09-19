import HeroSection from "../../components/HeroSection/HeroSection";
import "./HackathonPage.scss";
import Participate from "../../components/Participate/Participate";
import FeatureSection from "../../components/FeatureSection/FeatureSection";


import FilterHackthon from "../../components/FilterHackthon/FilterHackthon";

const HackathonPage = () => {
  return (
    <div className="hackathon-page">
      <HeroSection/>
      <FeatureSection />
      <Participate />
    
      <FilterHackthon />
    </div>
  );
};

export default HackathonPage;
