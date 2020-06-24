import { InView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import LoadingSpinner from "../components/LoadingSpinner";

const lazy = (loader) => {
  const Component = dynamic(loader, {
    loading: () => <LoadingSpinner color="danger" />,
  });

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

const CardSection = lazy(() => import("../components/CardSection"));
const CarouselSection = lazy(() => import("../components/CarouselSection"));
const VideoSection = lazy(() => import("../components/VideoSection"));
const BasicSection1 = lazy(() => import("../components/BasicSection1"));
const BasicSection2 = lazy(() => import("../components/BasicSection2"));
const BasicSection3 = lazy(() => import("../components/BasicSection3"));
const FooterSection = lazy(() => import("../components/FooterSection"));


const DynamicObserveTest = () => (
  <main>
    <HeroSection
      color="primary"
      title="Dynamic + Observe Test"
      subtitle="Fetching Components on Scroll"
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

export default DynamicObserveTest;
