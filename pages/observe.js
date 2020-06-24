import { InView } from "react-intersection-observer";
import HeroSection from "../components/HeroSection";
import BasicSection1 from "../components/BasicSection1";
import BasicSection2 from "../components/BasicSection2";
import BasicSection3 from "../components/BasicSection3";
import BasicSection4 from "../components/BasicSection4";
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

const LazyBasicSection1 = lazy(BasicSection1);
const LazyBasicSection2 = lazy(BasicSection2);
const LazyBasicSection3 = lazy(BasicSection3);
const LazyBasicSection4 = lazy(BasicSection4);

const ObserveTest = () => (
  <main>
    <HeroSection
      color="warning"
      title="Observe Test"
      subtitle="Rendering Components on Scroll"
    />
    <LazyBasicSection1 />
    <LazyBasicSection2 />
    <LazyBasicSection3 />
    <LazyBasicSection4 />
  </main>
);

export default ObserveTest;
