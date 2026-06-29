export const metadata = {
  title: "Contact — Vishnu Nambiar",
};

export default function ContactPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="max-w-xl">
          <p className="text-xs tracking-widest uppercase text-[#888] mb-6">
            Contact
          </p>
          <h1 className="text-3xl md:text-5xl font-light text-[#111] mb-10">
            Get in touch
          </h1>
          <p className="text-base text-[#555] leading-relaxed mb-12">
            For collaborations, licensing, or just to say hello — I'd love to
            hear from you.
          </p>

          <div className="space-y-8">
            <div className="border-t border-[#e5e5e5] pt-6">
              <p className="text-xs tracking-widest uppercase text-[#aaa] mb-2">
                Email
              </p>
              <a
                href="mailto:vishnu@nambiar.xyz"
                className="text-sm text-[#111] hover:text-[#888] transition-colors"
              >
                vishnu@nambiar.xyz
              </a>
            </div>

            <div className="border-t border-[#e5e5e5] pt-6">
              <p className="text-xs tracking-widest uppercase text-[#aaa] mb-2">
                Based in
              </p>
              <p className="text-sm text-[#555]">Kuala Lumpur / Manila</p>
            </div>

            <div className="border-t border-[#e5e5e5] pt-6">
              <p className="text-xs tracking-widest uppercase text-[#aaa] mb-4">
                Social
              </p>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-[#888] hover:text-[#111] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-[#888] hover:text-[#111] transition-colors"
                >
                  X / Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
