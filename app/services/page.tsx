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
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Tez Cuts
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
            Premium Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            A focused luxury grooming menu built around fades, linework, loc care,
            and sharp finishing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-semibold">{service.title}</h2>
                  <p className="mt-4 text-white/70">{service.description}</p>
                </div>

                <div className="min-w-[140px] rounded-2xl border border-[#d4af37]/20 bg-black/30 p-5">
                  <p className="text-2xl font-bold text-[#d4af37]">
                    {service.price}
                  </p>
                  <p className="mt-2 text-sm text-white/60">{service.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#d4af37]/20 bg-[linear-gradient(135deg,#181818,#0f0f0f,#1c1708)] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
            Booking
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            Ready to book your next look?
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            This mock services page is ready for a real booking link whenever you
            want to connect one.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Contact the Shop
            </a>
            <a
              href="/"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
