import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/collections";

export const metadata = {
  title: "Work — Vishnu Nambiar",
  description: "Photography collections by Vishnu Nambiar.",
};

export default function WorkPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mb-12 sm:mb-16">
          <p className="text-xs tracking-widest uppercase text-[#888] mb-4">
            Portfolio
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-[#111]">Work</h1>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {collections.map((col, i) => (
            <Link
              key={col.slug}
              href={`/work/${col.slug}`}
              className="group block"
            >
              {/* Always stack on mobile, side-by-side on lg+ */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center gap-6">
                <div className={`relative aspect-[4/3] overflow-hidden bg-[#eee] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={col.coverImage}
                    alt={col.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-xs tracking-widest uppercase text-[#888] mb-3">
                    {col.location} · {col.year}
                  </p>
                  <h2 className="text-xl sm:text-3xl font-light text-[#111] mb-4 group-hover:text-[#555] transition-colors">
                    {col.title}
                  </h2>
                  <p className="text-sm text-[#666] leading-relaxed mb-6">
                    {col.description}
                  </p>
                  <span className="text-xs tracking-widest uppercase text-[#111] border-b border-[#111] pb-1 group-hover:text-[#888] group-hover:border-[#888] transition-colors">
                    View Collection →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
