const galleryItems = [
  "Precision Fade",
  "Luxury Taper",
  "Loc Retwist",
  "Sharp Lineup",
  "Clean Beard Sculpt",
  "Styled Loc Finish",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Tez Cuts
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
            Gallery
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            A showcase of the looks, finishes, and premium grooming style behind
            the Tez Cuts brand.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40"
            >
              <div className="flex aspect-[4/5] items-end bg-[linear-gradient(180deg,#1a1a1a,#0f0f0f,#201a08)] p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                    Tez Cuts
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold">{item}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <h2 className="text-3xl font-semibold">Ready for real photos</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            These are premium placeholders for now. Later we can replace them with
            real haircut and loc photos to make the gallery feel fully authentic.
          </p>
        </div>
      </section>
    </main>
  );
}
