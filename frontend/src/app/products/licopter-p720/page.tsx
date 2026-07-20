import React from "react";
import Navbar from "@/components/Navbar";
import ProductHero from "@/components/products/licopter-p720/ProductHero";
import KeyHighlights from "@/components/products/licopter-p720/KeyHighlights";
import ProductOverview from "@/components/products/licopter-p720/ProductOverview";
import IndustryApplications from "@/components/products/licopter-p720/IndustryApplications";
import FlightWorkflow from "@/components/products/licopter-p720/FlightWorkflow";
import PerformanceBanner from "@/components/products/licopter-p720/PerformanceBanner";
import GallerySection from "@/components/products/licopter-p720/GallerySection";
import ModularPayloads from "@/components/products/licopter-p720/ModularPayloads";
import DownloadsStrip from "@/components/products/licopter-p720/DownloadsStrip";
import FaqSection from "@/components/products/licopter-p720/FaqSection";
import BottomCtaBanner from "@/components/products/licopter-p720/BottomCtaBanner";
import RelatedProducts from "@/components/products/licopter-p720/RelatedProducts";
import Footer from "@/components/Footer";

export default function LiCopterPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#da291c] selection:text-white">
      <Navbar />

      <ProductHero />
      <KeyHighlights />
      <ProductOverview />
      <IndustryApplications />
      <FlightWorkflow />
      <PerformanceBanner />
      <GallerySection />
      <ModularPayloads />
      <DownloadsStrip />
      <FaqSection />
      <BottomCtaBanner />
      <RelatedProducts />
      
      {/* Using the global immersive footer */}
      <Footer />
    </main>
  );
}
