import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import EligibilityPopup from "@/components/Modal/EligibilityPopup";
import Urgency from "@/components/Modal/UrgencyModal";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

// Define the base URL for your live site (Replace with your actual domain)
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://qubindia.gradglobe.org";

export const viewport: Viewport = {
  themeColor: "#D6000D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Queen's University Belfast | GIFT City Campus",
    template: "%s | Queen's University Belfast",
  },
  description:
    "Globally Top 200 University offering MSc in Business Analytics, Finance, and Management. Apply for up to 100% Scholarship in GIFT City, Gujarat.",
  keywords: [
    "Queen's University Belfast",
    "GIFT City",
    "MSc Finance",
    "Business Analytics",
    "Study in India",
    "UK University India",
    "Scholarships",
    "MBA Gujarat",
  ],
  authors: [{ name: "GradGlobe Org" }],
  creator: "GradGlobe Org",
  publisher: "GradGlobe Org",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Queen's University Belfast | GIFT City Campus",
    description:
      "Join a Russell Group university in India. 100% Scholarships Available for Master's programs.",
    url: SITE_URL,
    siteName: "Queen's University Belfast - GIFT City",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Queen's University Belfast GIFT City Campus",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Queen's University Belfast | GIFT City Campus",
    description: "Study at a Top 200 UK University in GIFT City, Gujarat.",
    images: ["/hero.png"],
    creator: "@QUBelfast",
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
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${jakarta.className} antialiased bg-slate-50 text-slate-900`}
      >
        <ModalProvider>
          {children}
          <EligibilityPopup />
          <Urgency />
        </ModalProvider>
      </body>
    </html>
  );
}
