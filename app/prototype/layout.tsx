import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Month 6 Product Preview | DevelopMonth",
  description:
    "A static DevelopMonth product concept showing Month 6 support, journal, calendar, check-ins, Companion, and monthly summary.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrototypeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
