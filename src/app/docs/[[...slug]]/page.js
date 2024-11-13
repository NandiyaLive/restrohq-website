import { getAllDocs } from "@/lib/docs";
import { notFound } from "next/navigation";

export default async function DocPage({ params }) {
  const { slug } = await params;
  const joinedSlug = slug?.join("/") || "index";

  const allDocs = await getAllDocs();
  const doc = allDocs.find((doc) => doc.slug === joinedSlug);

  if (!doc) {
    notFound();
  }

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      {doc.content}
    </article>
  );
}

// Add a generateStaticParams function for static generation
export async function generateStaticParams() {
  const allDocs = await getAllDocs();

  return allDocs.map((doc) => ({
    slug: doc.slug.split("/"),
  }));
}
