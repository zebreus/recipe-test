import FormulaDetailClient from "./formula-detail";

export function generateStaticParams() {
  return [{ id: "formula-1" }];
}

export default async function FormulaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <FormulaDetailClient id={id} />;
}
