import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import LoadingSpinner from "../components/LoadingSpinner";

const lazy = (loader) =>
  dynamic(loader, { loading: () => <LoadingSpinner color="danger" /> });

const BasicSection1 = lazy(() => import("../components/BasicSection1"));
const BasicSection2 = lazy(() => import("../components/BasicSection2"));
const BasicSection3 = lazy(() => import("../components/BasicSection3"));
const BasicSection4 = lazy(() => import("../components/BasicSection4"));

const DynamicTest = () => (
  <main>
    <HeroSection
      color="info"
      title="Dynamic Test"
      subtitle="Fetching Components On Initial Client Render"
    />
    <BasicSection1 />
    <BasicSection2 />
    <BasicSection3 />
    <BasicSection4 />
  </main>
);

export default DynamicTest;
