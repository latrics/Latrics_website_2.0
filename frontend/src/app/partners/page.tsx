import React from "react";
import Navbar from "@/components/Navbar";
import PartnersHero from "@/components/partners/PartnersHero";
import WhyPartnerSection from "@/components/partners/WhyPartnerSection";
import PartnerTiersSection from "@/components/partners/PartnerTiersSection";
import ApplyFormSection from "@/components/partners/ApplyFormSection";
import FaqSection from "@/components/partners/FaqSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Channel Partner Program | Latrics",
  description: "Grow your business with autonomous geospatial intelligence. Resell, integrate, or deliver Latrics' drone, LiDAR, and Terrain Desk platform.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative z-10 bg-white flex-1">
        <Navbar />
      <PartnersHero />
      <WhyPartnerSection />
      <PartnerTiersSection />
      <ApplyFormSection />
      <FaqSection />
      </div>
      <Footer />
    </main>
  );
}
