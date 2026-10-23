import Hero from "@/components/Hero";
import Worlds from "@/components/Worlds";
import LatestBuilds from "@/components/LatestBuilds";
import ThreeBuilds from "@/components/ThreeBuilds";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Worlds />
      <LatestBuilds />
      <ThreeBuilds />
      <Newsletter />
    </>
  );
}
