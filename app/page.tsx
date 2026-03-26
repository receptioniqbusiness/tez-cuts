import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_40%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
              Luxury Grooming Brand
            </p>

            <h1 className="max-w-2xl text-5xl font-bold md:text-6xl">
              Premium fades, clean linework, and elevated loc care.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/70">
              Built for clients who care about precision, presentation, and
              consistency.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-black"
              >
                Book Appointment
              </a>
              <a
                href="/services"
                className="rounded-full border border-white/20 px-6 py-3"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-semibold">Services</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-white/70">{service.description}</p>
              <p className="mt-4 text-[#d4af37] font-bold">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-semibold">Gallery</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 p-6"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-semibold">Reviews</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="border p-6 rounded-2xl">
              <p>"{review.text}"</p>
              <p className="mt-4 text-[#d4af37]">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-semibold">FAQ</h2>

        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-white/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
