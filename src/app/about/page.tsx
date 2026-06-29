export const metadata = {
  title: "About — Vishnu Nambiar",
};

export default function AboutPage() {
  return (
    <div className="pt-14">
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-xs tracking-widest uppercase text-[#888] mb-6">
              About
            </p>
            <h1 className="text-3xl sm:text-5xl font-light text-[#111] mb-8">
              Vishnu Nambiar
            </h1>
            <div className="space-y-5 text-[#555] leading-relaxed text-sm sm:text-base">
              <p>
                Photography is my way of capturing the rhythm of the world — one
                street, one frame, one fleeting moment at a time. Whether
                wandering through bustling cityscapes or quiet backstreets, I
                seek to document the stories, contrasts, and emotions that unfold
                in everyday life.
              </p>
              <p>
                My work focuses on street and travel photography, blending
                spontaneity with composition to reveal the essence of a place and
                its people. I shoot in both colour and black & white — each medium
                bringing out a different dimension of a scene.
              </p>
              <p>Based between Kuala Lumpur and Manila. Always moving.</p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#e5e5e5]">
              <p className="text-xs tracking-widest uppercase text-[#888] mb-4">
                Specialities
              </p>
              <ul className="space-y-2 text-sm text-[#555]">
                <li>Street Photography</li>
                <li>Travel & Documentary</li>
                <li>Motorsport</li>
                <li>Urban Landscapes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-0 lg:pt-16">
            {[
              { label: "Based in", value: "Kuala Lumpur / Manila" },
              { label: "Active since", value: "2015" },
              { label: "Style", value: "Colour & Black & White" },
              { label: "Focus", value: "Street, Travel, Motorsport" },
            ].map((item) => (
              <div key={item.label} className="border-t border-[#e5e5e5] py-5">
                <p className="text-xs tracking-widest uppercase text-[#aaa] mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-[#333]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
