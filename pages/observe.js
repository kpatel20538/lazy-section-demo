import { InView } from "react-intersection-observer";
import HeroSection from "../components/HeroSection";
import CarouselSection from "../components/CarouselSection";
import VideoSection from "../components/VideoSection";
import CardSection from "../components/CardSection";
import BasicSection1 from "../components/BasicSection1";
import BasicSection2 from "../components/BasicSection2";
import BasicSection3 from "../components/BasicSection3";
import FooterSection from "../components/FooterSection";
import LoadingSpinner from "../components/LoadingSpinner";

const lazy = (Component) => {
  return () => (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref}>
          {inView ? <Component /> : <LoadingSpinner color="primary" />}
        </div>
      )}
    </InView>
  );
};

const LazyCardSection = lazy(CardSection);
const LazyCarouselSection = lazy(CarouselSection);
const LazyVideoSection = lazy(VideoSection);
const LazyBasicSection1 = lazy(BasicSection1);
const LazyBasicSection2 = lazy(BasicSection2);
const LazyBasicSection3 = lazy(BasicSection3);
const LazyFooterSection = lazy(FooterSection);

const ObserveTest = () => (
  <main>
    <HeroSection
      color="warning"
      title="Observe Test"
      subtitle="Rendering Components on Scroll"
    />
    <LazyCardSection />
    <LazyCarouselSection />
    <LazyVideoSection />
    <LazyBasicSection1 />
    <LazyBasicSection2 />
    <LazyBasicSection3 />
    <LazyFooterSection />
  </main>
);

export default ObserveTest;
