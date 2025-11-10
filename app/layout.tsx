import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ZUSI - All-in-one Utility & Shared Payment Platform for Africa",
    template: "%s | ZUSI",
  },
  description: "ZUSI is Africa's all-in-one utility platform that combines bill payments, shared expenses, and financial management. Pay electricity, cable, internet, airtime, and more in one place. Split expenses seamlessly with friends and family. Automated payments, financial tracking, and more.",
  keywords: [
    "bill payments",
    "utility payments",
    "shared payments",
    "expense splitting",
    "bill automation",
    "Africa payments",
    "electricity bills",
    "cable bills",
    "internet bills",
    "airtime",
    "financial management",
    "payment platform",
    "bill tracking",
    "automated payments",
  ],
  authors: [{ name: "ZUSI" }],
  creator: "ZUSI",
  publisher: "ZUSI",
  metadataBase: new URL("https://www.zusiafrica.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.zusiafrica.com",
    siteName: "ZUSI",
    title: "ZUSI - All-in-one Utility & Shared Payment Platform for Africa",
    description: "Pay bills. Split expenses. All Automated. Simplify your bill payments with ZUSI - Africa's comprehensive utility payment platform.",
    images: [
      {
        url: "/assets/Zusi new logo no backgrd.svg",
        width: 1200,
        height: 630,
        alt: "ZUSI - All-in-one Utility & Shared Payment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZUSI - All-in-one Utility & Shared Payment Platform for Africa",
    description: "Pay bills. Split expenses. All Automated. Simplify your bill payments with ZUSI.",
    images: ["/assets/Zusi new logo no backgrd.svg"],
    creator: "@zusiafrica",
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

