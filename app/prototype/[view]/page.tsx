import { notFound } from "next/navigation";
import { PrototypeShell } from "@/components/prototype/PrototypeShell";
import {
  isPrototypeView,
  prototypeViews,
} from "@/lib/prototype-data";

type PrototypeViewPageProps = {
  params: Promise<{ view: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return prototypeViews
    .filter((view) => view.slug !== "this-month")
    .map((view) => ({ view: view.slug }));
}

export default async function PrototypeViewPage({
  params,
}: PrototypeViewPageProps) {
  const { view } = await params;

  if (!isPrototypeView(view)) {
    notFound();
  }

  return <PrototypeShell view={view} />;
}
