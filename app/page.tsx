export default function Home() {
  const services = [
    {
      title: "Signature Fade",
      description:
        "Clean, precise fade work finished with sharp detailing and a polished look.",
      price: "$45",
    },
    {
      title: "Skin Taper & Lineup",
      description:
        "A crisp taper with a detailed lineup for a fresh, refined everyday style.",
      price: "$35",
    },
    {
      title: "Loc Retwist",
      description:
        "Professional retwist service focused on clean parts, neat roots, and healthy presentation.",
      price: "$85",
    },
    {
      title: "Loc Style & Cleanup",
      description:
        "Keep your locs styled, shaped, and photo-ready with a clean luxury finish.",
      price: "$70",
    },
    {
      title: "Beard Sculpting",
      description:
        "Detailed beard shaping and cleanup designed to sharpen your full look.",
      price: "$25",
    },
  ];

  const reviews = [
    {
      name: "Jordan M.",
      text: "Best fade I’ve had in a long time. Clean work, smooth experience, and the whole vibe feels premium.",
    },
    {
      name: "Marcus T.",
      text: "Tez really pays attention to detail. My lineup was sharp, and my loc cleanup came out perfect.",
    },
    {
      name: "Andre L.",
      text: "The shop feels elevated and the service matches it. Definitely the kind of barber you stay with.",
    },
  ];

  const gallery = [
    "Precision Fade",
    "Luxury Taper",
    "Loc Retwist",
    "Sharp Lineup",
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-xl font-semibold tracking-[0.25em] text-[#d4af37]">
              TEZ CUTS
            </p>
          </div>

          <nav className="hidden gap-8 text-sm text-white/80 md:flex">
            <a href="#services" className="transition hover:text-[#d4af37]">
              Services
            </a>
            <a href="#gallery" className="transition hover:text-[#d4af37]">
              Gallery
            </a>
            <a href="#reviews" className="transition hover:text-[#d4af37]">
              Reviews
            </a>
            <a href="#contact" className="transition hover:text-[#d4af37]">
              Contact
            </a>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_40%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              Luxury Grooming Experience
            </p>
            <h1 className="max-w-2xl text-5xl font-bold leading-tight md:text-6xl">
              Precision fades. Elevated loc care. Premium results.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Tez Cuts delivers sharp fades, clean linework, and refined loc
              maintenance in a luxury barbershop setting built for confidence
              and consistency.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/60">
              <span>Luxury Atmosphere</span>
              <span>Loc Specialists</span>
              <span>Precision Finishing</span>
            </div>
          </div>

          <div className="relative z-10">
            <div className="grid gap-4">
              <div className="rounded-3xl border border-[#d4af37]/20 bg-white/5 p-8 shadow-2xl shadow-black/40">
                <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#1a1a1a,#111,#1f1a0a)] p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                        Featured Experience
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold">
                        Crafted for clients who care about the details.
                      </h2>
                    </div>
                    <p className="max-w-md text-white/70">
                      From first impression to final lineup, every service is
                      designed to feel clean, consistent, and premium.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-3xl font-bold text-[#d4af37]">5★</p>
                  <p className="mt-2 text-white/70">Premium client experience</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-3xl font-bold text-[#d4af37]">Fresh</p>
                  <p className="mt-2 text-white/70">
                    Fades, loc care, and sharp finishing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                Why Tez Cuts
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                A modern barbershop brand with a premium edge.
              </h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-xl font-semibold">Specialized Craft</h3>
              <p className="mt-3 text-white/70">
                Focused on fades, lineups, and loc maintenance instead of trying
                to be everything for everyone.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-xl font-semibold">Luxury Feel</h3>
              <p className="mt-3 text-white/70">
                A polished atmosphere, elevated presentation, and service that
                feels intentional from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-semibold">Premium grooming menu</h2>
          <p className="mt-4 text-white/70">
            A focused service lineup built around sharp cuts, clean detailing,
            and healthy loc presentation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#d4af37]/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <span className="rounded-full border border-[#d4af37]/30 px-3 py-1 text-sm text-[#d4af37]">
                  {service.price}
                </span>
              </div>
              <p className="mt-4 text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              Gallery
            </p>
            <h2 className="mt-4 text-4xl font-semibold">Looks that speak for themselves</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-black/40"
              >
                <div className="flex aspect-[4/5] items-end bg-[linear-gradient(180deg,#1a1a1a,#0f0f0f,#201a08)] p-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                      Tez Cuts
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">{item}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
            Reviews
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            Trusted by clients who want consistent results
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-white/80">“{review.text}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[#d4af37]">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-[#d4af37]/20 bg-[linear-gradient(135deg,#181818,#0f0f0f,#1c1708)] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
            Mock Booking
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            Ready for your next cut?
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            This is a mock booking section for the demo site. Later, we can hook
            this up to a real booking platform or contact form.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
              Book Your Appointment
            </button>
            <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]">
              Call the Shop
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4 lg:px-8">
          <div>
            <p className="text-xl font-semibold tracking-[0.25em] text-[#d4af37]">
              TEZ CUTS
            </p>
            <p className="mt-4 text-sm text-white/60">
              Precision fades, elevated loc care, and a luxury grooming
              experience.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#d4af37]">
              Hours
            </h3>
            <p className="mt-4 text-sm text-white/70">Mon–Sat: 9AM – 7PM</p>
            <p className="mt-2 text-sm text-white/70">Sunday: Closed</p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#d4af37]">
              Location
            </h3>
            <p className="mt-4 text-sm text-white/70">123 Luxe Avenue</p>
            <p className="mt-2 text-sm text-white/70">Atlanta, GA 30303</p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#d4af37]">
              Contact
            </h3>
            <p className="mt-4 text-sm text-white/70">(404) 555-0199</p>
            <p className="mt-2 text-sm text-white/70">book@tezcuts.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}