import { InView } from "react-intersection-observer";
import HeroSection from "../components/HeroSection";
import BasicSection1 from "../components/BasicSection1";
import BasicSection2 from "../components/BasicSection2";
import BasicSection3 from "../components/BasicSection3";
import BasicSection4 from "../components/BasicSection4";
import Loader from "../components/Loader";

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
