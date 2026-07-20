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
      <div className={`w-full md:w-[20%] p-6 md:p-6 border-b md:border-b-0 md:border-r ${dark ? 'border-gray-800' : 'border-gray-200'} shrink-0`}>
        <div className="sticky top-24">
          <h2 className={`font-heading text-sm tracking-widest font-bold uppercase mb-2 ${dark ? 'text-white' : 'text-brand-charcoal'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-sm ${dark ? 'text-gray-400' : 'text-brand-olive'}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full md:w-[80%]">
        {children}
      </div>
    </section>
  );
}
