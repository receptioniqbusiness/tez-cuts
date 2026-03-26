import Header from "../../components/Header";
import Footer from "../../components/Footer";

const galleryItems = [
  "Precision Fade",
  "Luxury Taper",
  "Loc Retwist",
  "Sharp Lineup",
  "Beard Sculpt",
  "Styled Locs",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h1 className="text-5xl font-bold md:text-6xl">Gallery</h1>
          <p className="mt-6 max-w-2xl text-white/70">
            A showcase of our signature work, clean finishes, and premium style.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-black/40 overflow-hidden"
            >
              <div className="aspect-[4/5] flex items-end p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
                <h2 className="text-2xl font-semibold">{item}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
