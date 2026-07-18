import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between bg-black/50 backdrop-blur-sm">
      <div className="flex items-center gap-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/Latrics_white&red_logo.png" alt="Latrics Logo" className="h-8 object-contain" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm text-gray-300 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-white transition-colors">
            Products
          </Link>
          <Link href="/partners" className="hover:text-white transition-colors">
            Partners
          </Link>
          <Link href="/case-studies" className="hover:text-white transition-colors">
            Case Studies
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </div>
      </div>

      {/* CTA Button */}
      <div>
        <button className="bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-gray-100 transition-colors">
          Request a demo
        </button>
      </div>
    </nav>
  );
}
