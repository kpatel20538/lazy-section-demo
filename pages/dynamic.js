import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import LoadingSpinner from "../components/LoadingSpinner";

const lazy = (loader) =>
  dynamic(loader, { loading: () => <LoadingSpinner color="danger" /> });

const CardSection = lazy(() => import("../components/CardSection"));
const CarouselSection = lazy(() => import("../components/CarouselSection"));
const VideoSection = lazy(() => import("../components/VideoSection"));
const BasicSection1 = lazy(() => import("../components/BasicSection1"));
const BasicSection2 = lazy(() => import("../components/BasicSection2"));
const BasicSection3 = lazy(() => import("../components/BasicSection3"));
const FooterSection = lazy(() => import("../components/FooterSection"));

const DynamicTest = () => (
  <main>
    <HeroSection
      color="info"
      title="Dynamic Test"
      subtitle="Fetching Components On Initial Client Render"
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

export default DynamicTest;
