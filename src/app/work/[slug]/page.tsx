import Image from "next/image";
import Link from "next/link";
import { getCollection, collections } from "@/lib/collections";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = getCollection(slug);
  if (!col) return {};
  return {
    title: `${col.title} ${col.year} — Vishnu Nambiar`,
    description: col.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = getCollection(slug);
  if (!col) notFound();

  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
        <Link
          href="/work"
          className="text-xs tracking-widest uppercase text-[#888] hover:text-[#111] transition-colors mb-8 inline-block"
        >
          ← Work
        </Link>
        <div className="max-w-xl">
          <p className="text-xs tracking-widest uppercase text-[#888] mb-4">
            {col.location} · {col.year}
          </p>
          <h1 className="text-2xl sm:text-5xl font-light text-[#111] mb-5">
            {col.title}
          </h1>
          <p className="text-sm sm:text-base text-[#666] leading-relaxed">
            {col.description}
          </p>
        </div>
      </section>

      {/* Photo grid — single column on mobile, masonry on sm+ */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {col.photos.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid relative overflow-hidden bg-[#eee]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto block hover:opacity-95 transition-opacity duration-300"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e5e5e5] py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link
            href="/work"
            className="text-xs tracking-widest uppercase text-[#888] hover:text-[#111] transition-colors"
          >
            View All Collections →
          </Link>
        </div>
      </section>
    </div>
  );
}
