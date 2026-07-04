import type { Metadata } from "next";
import { PasswordGate } from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "Private preview — DevelopMonth",
  robots: { index: false, follow: false },
};

type AccessPageProps = {
  searchParams: Promise<{ next?: string }>;
};

export default async function AccessPage({
  searchParams,
}: AccessPageProps) {
  const params = await searchParams;

  return <PasswordGate nextPath={params.next ?? "/"} />;
}
