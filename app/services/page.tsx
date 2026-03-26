import Header from "../../components/Header";
import Footer from "../../components/Footer";

const services = [
  {
    title: "Signature Fade",
    price: "$45",
    time: "45 min",
    description:
      "A precision fade with clean blending, sharp detailing, and a polished luxury finish.",
  },
  {
    title: "Skin Taper & Lineup",
    price: "$35",
    time: "30 min",
    description:
      "Crisp taper work paired with a sharp lineup for an everyday clean look.",
  },
  {
    title: "Loc Retwist",
    price: "$85",
    time: "90 min",
    description:
      "Professional retwist service focused on neat parts, healthy roots, and refreshed presentation.",
  },
  {
    title: "Loc Style & Cleanup",
    price: "$70",
    time: "75 min",
    description:
      "Keep your locs styled, shaped, and photo-ready with a clean finished look.",
  },
  {
    title: "Beard Sculpting",
    price: "$25",
    time: "20 min",
    description:
      "Detailed beard shaping and cleanup designed to sharpen your full look.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h1 className="text-5xl font-bold md:text-6xl">Services</h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Premium grooming services focused on fades, loc care, and sharp finishing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-3 text-white/70">{service.description}</p>
                </div>

                <div className="text-right">
                  <p className="text-xl text-[#d4af37] font-bold">
                    {service.price}
                  </p>
                  <p className="text-sm text-white/60">{service.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
