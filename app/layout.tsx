import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Albert Jayson Arguelles | Senior Full Stack & AI Engineer",
  description: "Senior Full Stack and AI Automation Engineer with 10+ years of experience building SaaS, travel, and healthcare applications.",
  metadataBase: new URL("https://github.com/touridev"),

  applicationName: "Albert Jayson Arguelles Portfolio",
  authors: [{ name: "Albert Jayson Arguelles" }],
  keywords: ["Full Stack Engineer", "AI Engineer", "Automation", "Next.js", "React", "Python", "Node.js", "Cloud"],

  openGraph: {
    type: "website",
    url: "https://github.com/touridev",
    title: "Albert Jayson Arguelles | Senior Full Stack & AI Engineer",
    description: "Full Stack, AI automation, cloud, and DevOps engineering portfolio.",
    siteName: "Albert Jayson Arguelles",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Albert Jayson Arguelles - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://github.com/touridev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}