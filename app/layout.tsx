import type { Metadata } from "next";
import { Geist, Geist_Mono, Staatliches } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const staatliches = Staatliches({
  variable: "--font-staatliches",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "VergeX - Your Palette, Perfected.",
  description:
    "Generate beautiful, accessible color palettes for your design projects. Create harmonious color schemes with real-time preview and export to multiple formats.",
  keywords: [
    "color palette",
    "color generator",
    "design tools",
    "accessibility",
    "WCAG",
    "color harmony",
    "design system",
    "CSS colors",
    "Tailwind colors",
  ],
  authors: [{ name: "Aditi Singh" }],
  creator: "Aditi Singh",
  publisher: "Aditi Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://verge-x.vercel.app/"),
  alternates: {
    canonical: "/",
  },
    openGraph: {
    title: "VergeX - Your Palette, Perfected.",
    description:
      "Generate beautiful, accessible color palettes for your design projects. Create harmonious color schemes with real-time preview and export to multiple formats.",
    url: "https://verge-x.vercel.app",
    siteName: "VergeX",
    images: [
      {
          url: "https://verge-x.vercel.app/vergex.png",
        width: 1200,
        height: 630,
          alt: "VergeX - Color Palette Generator",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VergeX - Your Palette, Perfected.",
    description:
      "Generate beautiful, accessible color palettes for your design projects. Create harmonious color schemes with real-time preview and export to multiple formats.",
    images: ["/verge.png"],
    creator: "@aditisingh012",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${staatliches.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
