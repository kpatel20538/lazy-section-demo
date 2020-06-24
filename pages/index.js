import HeroSection from "../components/HeroSection";
import CarouselSection from "../components/CarouselSection";
import VideoSection from "../components/VideoSection";
import CardSection from "../components/CardSection";
import BasicSection1 from "../components/BasicSection1";
import BasicSection2 from "../components/BasicSection2";
import BasicSection3 from "../components/BasicSection3";
import FooterSection from "../components/FooterSection";

const Baseline = () => (
  <main>
    <HeroSection
      color="white"
      title="Baseline Test"
      subtitle="No Lazy Loading"
    />
    <CardSection />
    <CarouselSection />
    <VideoSection />
    <BasicSection1 />
    <BasicSection2 />
    <BasicSection3 />
    <FooterSection />
  </main>
);

export default Baseline;
