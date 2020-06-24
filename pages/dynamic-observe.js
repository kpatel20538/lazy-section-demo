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

const BasicSection1 = lazy(() => import("../components/BasicSection1"));
const BasicSection2 = lazy(() => import("../components/BasicSection2"));
const BasicSection3 = lazy(() => import("../components/BasicSection3"));
const BasicSection4 = lazy(() => import("../components/BasicSection4"));

const DynamicObserveTest = () => (
  <main>
    <HeroSection
      color="primary"
      title="Dynamic + Observe Test"
      subtitle="Fetching Components on Scroll"
    />
    <BasicSection1 />
    <BasicSection2 />
    <BasicSection3 />
    <BasicSection4 />
  </main>
);

export default DynamicObserveTest;
