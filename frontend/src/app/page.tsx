import Navbar from "@/components/Navbar";
import Hero from "@/components/homescreen/Hero";
import TrustBar from "@/components/homescreen/TrustBar";
import TerrainDeskSection from "@/components/homescreen/TerrainDeskSection";
import SolutionsSection from "@/components/homescreen/SolutionsSection";
import StatsSection from "@/components/homescreen/StatsSection";
import IndustriesSection from "@/components/homescreen/IndustriesSection";
import CaseStudiesSection from "@/components/homescreen/CaseStudiesSection";
import NewsroomSection from "@/components/homescreen/NewsroomSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative z-10 bg-white flex-1">
        <Navbar />
      <Hero />
      <TrustBar />
      <TerrainDeskSection />
      {/* <SolutionsSection /> */}
      {/* <StatsSection /> */}
      <IndustriesSection />
      <CaseStudiesSection />
      <NewsroomSection />
      </div>
      <Footer />
    </main>
  );
}
