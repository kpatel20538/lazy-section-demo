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

const DynamicTest = () => (
  <main>
    <HeroSection
      title="Dynamic Test"
      subtitle="Code-Splitting via next/dynamic"
    />
    <BasicSection1 />
    <BasicSection2 />
    <BasicSection3 />
    <BasicSection4 />
  </main>
);

export default DynamicTest;
