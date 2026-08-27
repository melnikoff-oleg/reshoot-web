import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reshootonline.org"),
  title: {
    default: "ReShoot.Start: Pistol Basics for Beginners",
    template: "%s",
  },
  description:
    "Build a safety-first pistol foundation with European Champion Dmitrii Stafura through 36 clear topics, 71 visual videos, and 20 guided exercises.",
  openGraph: {
    type: "website",
    siteName: "ReShoot",
    title: "From curious to confident before your first range trip",
    description:
      "A safety-first visual pistol course for complete beginners by European Champion Dmitrii Stafura.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "ReShoot.Start beginner pistol course" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReShoot.Start: Pistol Basics for Beginners",
    description: "36 clear topics. 71 visual videos. A safer, more confident first step.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/brand/favicon.ico",
    shortcut: "/brand/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
