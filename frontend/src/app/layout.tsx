import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import FloatingLogos from "@/components/FloatingLogos";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Latrics | Building Better Tomorrow",
  description: "DGCA-certified LiDAR drone platform made in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <FloatingLogos />
        {children}
      </body>
    </html>
  );
}
