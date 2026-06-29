import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/collections";

export default function Home() {
  const featured = collections[0];

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-56 lg:pb-36">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest uppercase text-[#888] mb-5">
            Street & Travel Photography
          </p>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-light leading-snug mb-6 text-[#111]">
            Capturing the rhythm of the world.
          </h1>
          <p className="text-sm sm:text-base text-[#555] leading-relaxed max-w-xl">
            One street, one frame, one fleeting moment at a time. Wandering
            through cityscapes and quiet backstreets — documenting the stories
            that unfold in everyday life.
          </p>
          <div className="mt-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-[#111] border-b border-[#111] pb-1 hover:text-[#888] hover:border-[#888] transition-colors"
            >
              View Work
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured image — full bleed */}
      <section className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
        <Image
          src={featured.coverImage}
          alt={featured.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-6 left-6">
          <p className="text-xs tracking-widest uppercase text-white/70 mb-1">
            Latest collection
          </p>
          <Link
            href={`/work/${featured.slug}`}
            className="text-base sm:text-2xl font-light text-white hover:opacity-70 transition-opacity"
          >
            {featured.title} — {featured.year}
          </Link>
        </div>
      </section>

      {/* Collections grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs tracking-widest uppercase text-[#888]">
            Collections
          </h2>
          <Link
            href="/work"
            className="text-xs tracking-widest uppercase text-[#888] hover:text-[#111] transition-colors"
          >
            All Work →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {collections.map((col) => (
            <Link
              key={col.slug}
              href={`/work/${col.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eee] mb-3">
                <Image
                  src={col.coverImage}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-sm font-medium text-[#111]">
                  {col.title}
                </h3>
                <span className="text-xs text-[#888]">
                  {col.location} · {col.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
