import { InView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import pMinDelay from "p-min-delay";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";


const BasicSection1 = dynamic(
  () => pMinDelay(import("../components/BasicSection1"), 1000),
  { loading: () => <Loader /> }
);
const BasicSection2 = dynamic(
  () => pMinDelay(import("../components/BasicSection2"), 1000),
  { loading: () => <Loader /> }
);
const BasicSection3 = dynamic(
  () => pMinDelay(import("../components/BasicSection3"), 1000),
  { loading: () => <Loader /> }
);
const BasicSection4 = dynamic(
  () => pMinDelay(import("../components/BasicSection4"), 1000),
  { loading: () => <Loader /> }
);

const ObserveTest = () => (
  <main>
    <HeroSection title="Observe Test" subtitle="Loading on Scroll" />
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>{inView ? <BasicSection1 /> : <Loader />}</div>
      )}
    </InView>
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>{inView ? <BasicSection2 /> : <Loader />}</div>
      )}
    </InView>
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>{inView ? <BasicSection3 /> : <Loader />}</div>
      )}
    </InView>
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>{inView ? <BasicSection4 /> : <Loader />}</div>
      )}
    </InView>
  </main>
);

export default ObserveTest;
