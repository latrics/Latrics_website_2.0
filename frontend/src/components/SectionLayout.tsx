import React from "react";

interface SectionLayoutProps {
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export default function SectionLayout({ number, title, subtitle, children, dark = false }: SectionLayoutProps) {
  return (
    <section className={`w-full flex flex-col md:flex-row border-b border-gray-200 ${dark ? 'bg-black text-white' : 'bg-white'}`}>
      {/* Left Sidebar */}
      <div className={`w-full md:w-[25%] p-8 border-b md:border-b-0 md:border-r ${dark ? 'border-gray-800' : 'border-gray-200'} shrink-0`}>
        <div className="sticky top-24">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-brand-red font-semibold text-sm">
              {number.includes("/") ? number.split("/")[0].trim() : number}
            </span>
            <span className="text-brand-silver text-sm">/</span>
            <h2 className={`font-heading text-sm tracking-widest font-semibold uppercase ${dark ? 'text-gray-400' : 'text-brand-olive'}`}>
              {number.includes("/") ? number.split("/")[1].trim() : title}
            </h2>
          </div>
          {title && !number.includes("/") && (
            <h3 className={`text-lg font-bold ${dark ? 'text-white' : 'text-brand-charcoal'}`}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className={`mt-2 text-sm ${dark ? 'text-gray-400' : 'text-brand-olive'}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full md:w-[75%]">
        {children}
      </div>
    </section>
  );
}
