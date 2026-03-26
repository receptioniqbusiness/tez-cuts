const services = [
  {
    title: "Signature Fade",
    description:
      "Precision fade service with clean blending, sharp detailing, and a polished luxury finish.",
    price: "$45",
  },
  {
    title: "Skin Taper & Lineup",
    description:
      "Crisp taper and razor-sharp lineup for clients who want a fresh, refined everyday look.",
    price: "$35",
  },
  {
    title: "Loc Retwist",
    description:
      "Professional retwist service focused on neat parts, healthy roots, and a clean overall presentation.",
    price: "$85",
  },
  {
    title: "Loc Style & Cleanup",
    description:
      "Styled and cleaned locs finished with shape, symmetry, and attention to detail.",
    price: "$70",
  },
  {
    title: "Beard Sculpting",
    description:
      "Detailed beard shaping and cleanup designed to sharpen your profile and complete the look.",
    price: "$25",
  },
];

const reviews = [
  {
    name: "Jordan M.",
    text: "Best fade I’ve had in a long time. The attention to detail is different here.",
  },
  {
    name: "Marcus T.",
    text: "Clean lineup, smooth experience, and my loc retwist came out looking sharp and professional.",
  },
  {
    name: "Andre L.",
    text: "The whole brand feels premium. It’s the kind of barber experience you keep coming back to.",
  },
];

const gallery = [
  "Precision Fade",
  "Luxury Taper",
  "Loc Retwist",
  "Sharp Lineup",
];

const faqs = [
  {
    question: "Do I need an appointment?",
    answer:
      "For this mock site, booking is just a demo. On a real version, appointments would be strongly recommended.",
  },
  {
    question: "What is Tez Cuts known for?",
    answer:
      "Tez Cuts is positioned as a luxury barbershop brand specializing in precision fades, clean linework, and elevated loc care.",
  },
  {
    question: "Can this site connect to real booking later?",
    answer:
      "Yes. We can later connect it to Booksy, StyleSeat, Calendly, a form, or a custom booking flow.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="/"
            className="text-xl font-semibold tracking-[0.28em] text-[#d4af37]"
          >
            TEZ CUTS
          </a>

          <nav className="hidden gap-8 text-sm text-white/75 md:flex">
            <a href="/services" className="transition hover:text-[#d4af37]">
              Services
            </a>
            <a href="/gallery" className="transition hover:text-[#d4af37]">
              Gallery
            </a>
            <a href="#reviews" className="transition hover:text-[#d4af37]">
              Reviews
            </a>
            <a href="/contact" className="transition hover:text-[#d4af37]">
              Contact
            </a>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_40%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
              Luxury Grooming Brand
            </p>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight md:text-6xl">
              Premium fades, clean linework, and elevated loc care.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Tez Cuts is built for clients who care about precision,
              presentation, and consistency. Every service is designed to look
              sharp, feel premium, and leave a lasting impression.
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
                Explore Services
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold text-[#d4af37]">5★</p>
                <p className="mt-2 text-sm text-white/60">Luxury experience</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold text-[#d4af37]">Sharp</p>
                <p className="mt-2 text-sm text-white/60">
                  Precision finishing
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold text-[#d4af37]">Locs</p>
                <p className="mt-2 text-sm text-white/60">Care & maintenance</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-[#d4af37]/20 bg-white/5 p-8 shadow-2xl shadow-black/40">
                <div className="flex aspect-[4/3] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,#1a1a1a,#111,#1f1a0a)] p-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                      Featured Experience
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold leading-tight">
                      Crafted for clients who care how they show up.
                    </h2>
                  </div>

                  <p className="max-w-md text-white/70">
                    Tez Cuts combines style, detail, and premium presentation in
                    one modern grooming experience.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">
                    Atmosphere
                  </p>
                  <p className="mt-3 text-xl font-semibold">
                    Clean, modern, elevated
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">
                    Specialty
                  </p>
                  <p className="mt-3 text-xl font-semibold">
                    Fades, locs, finishing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">
              Brand Standard
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Specialized craft</h3>
            <p className="mt-3 text-white/70">
              Focused on the services that matter most: fades, lineups, loc
              care, and clean finishing.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">
              Experience
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Luxury feel</h3>
            <p className="mt-3 text-white/70">
              A polished atmosphere and elevated presentation built to feel
              premium from start to finish.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">
              Consistency
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Reliable results</h3>
            <p className="mt-3 text-white/70">
              Clean execution, careful detailing, and a look clients can trust
              every time.
            </p>
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
            A focused service lineup built for clients who want more than a
            basic cut.
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
        id="experience"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              The Experience
            </p>
            <h2 className="mt-4 text-4xl font-semibold">
              More than a cut. A polished routine.
            </h2>
            <p className="mt-6 text-white/70">
              Tez Cuts is positioned as a premium grooming destination where
              style, upkeep, and confidence come together. This layout is built
              to feel intentional, not generic.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-xl font-semibold">Consultation-first feel</h3>
              <p className="mt-3 text-white/70">
                Services are presented with clarity so clients know what to
                expect.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-xl font-semibold">
                Image-conscious branding
              </h3>
              <p className="mt-3 text-white/70">
                The messaging is designed for clients who care about style and
                presentation.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-xl font-semibold">Built for future upgrades</h3>
              <p className="mt-3 text-white/70">
                This mock site can later expand into real booking, forms,
                photos, and new pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
            Gallery
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            Looks that speak for themselves
          </h2>
          <p className="mt-4 text-white/70">
            Placeholder showcase cards for now. Later we can replace these with
            real haircut photos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-3xl border border-white/10 bg-black/40"
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
      </section>

      <section
        id="reviews"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              Reviews
            </p>
            <h2 className="mt-4 text-4xl font-semibold">
              Trusted by clients who expect quality
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-3xl border border-white/10 bg-black/30 p-6"
              >
                <p className="text-white/80">“{review.text}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[#d4af37]">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-[#d4af37]/20 bg-[linear-gradient(135deg,#181818,#0f0f0f,#1c1708)] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
            Mock Booking
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            Ready for your next appointment?
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            This is a demo booking area for the mock site. Later we can connect
            it to a real booking system or contact form.
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

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-semibold">Common questions</h2>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-3 text-white/70">{faq.answer}</p>
            </div>
          ))}
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
