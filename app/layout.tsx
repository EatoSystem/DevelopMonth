import type { Metadata, Viewport } from "next";
import developMonthIcon from "../DevelopMonth - Icon.png";
import "./globals.css";

const title = "DevelopMonth — Child development and parenting, month by month.";
const description =
  "Calm, evidence-informed child development and parenting support, packaged month by month for families after birth.";

export const metadata: Metadata = {
  metadataBase: new URL("https://developmonth.com"),
  title,
  description,
  applicationName: "DevelopMonth",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      {
        url: developMonthIcon.src,
        type: "image/png",
        sizes: "1254x1254",
      },
    ],
    shortcut: [
      {
        url: developMonthIcon.src,
        type: "image/png",
      },
    ],
    apple: [
      {
        url: developMonthIcon.src,
        type: "image/png",
        sizes: "1254x1254",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "DevelopMonth",
    title,
    description,
    // TODO: Add a branded 1200 × 630 Open Graph image before launch.
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
