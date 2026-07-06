import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Month 6 Product Preview | DevelopMonth",
  description:
    "A static DevelopMonth research prototype with fictional Month 6 content. It saves nothing and is not medical or developmental assessment.",
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
