import React from "react";
import Navbar from "@/components/Navbar";
import PartnersHero from "@/components/partners/PartnersHero";
import WhyPartnerSection from "@/components/partners/WhyPartnerSection";
import PartnerTiersSection from "@/components/partners/PartnerTiersSection";
import ApplyFormSection from "@/components/partners/ApplyFormSection";
import FaqSection from "@/components/partners/FaqSection";
import PartnersFooter from "@/components/partners/PartnersFooter";

export const metadata = {
  title: "Channel Partner Program | Latrics",
  description: "Grow your business with autonomous geospatial intelligence. Resell, integrate, or deliver Latrics' drone, LiDAR, and Terrain Desk platform.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <PartnersHero />
      <WhyPartnerSection />
      <PartnerTiersSection />
      <ApplyFormSection />
      <FaqSection />
      <PartnersFooter />
    </main>
  );
}
