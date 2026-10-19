import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Visibility Studio | Professional Photography & Videography",
    template: "%s | Visibility Studio",
  },
  description:
    "Visibility Studio is a premier dark-themed professional photography and cinematic videography studio. Equipped with cyclorama soundstage, state-of-the-art strobe systems, and bespoke creative production sets.",
  keywords: [
    "Visibility Studio",
    "Photography Studio",
    "Videography",
    "Cyclorama Stage",
    "Fashion Photography",
    "Commercial Production",
    "Soundstage Rental",
    "Creative Studio",
  ],
  authors: [{ name: "Visibility Studio Team" }],
  creator: "Visibility Studio",
  publisher: "Visibility Studio",
  openGraph: {
    title: "Visibility Studio | Professional Photography & Videography",
    description:
      "A premier studio space engineered for cinematic imagery, editorial fashion, and high-impact commercial production.",
    url: "https://visibilitystudio.com",
    siteName: "Visibility Studio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-[#FAFAFA] font-sans antialiased selection:bg-[#F8FAFC] selection:text-black min-h-screen flex flex-col overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full relative flex flex-col pt-16">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
