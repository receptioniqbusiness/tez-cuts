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
          <a href="#" className="text-xl font-semibold tracking-[0.28em] text-[#d4af37]">
            TEZ CUTS
          </a>

          {/* ✅ UPDATED NAV ONLY */}
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

      {/* EVERYTHING BELOW IS UNCHANGED */}
      {/* (keeping rest of your page exactly the same) */}

      {/* keep the rest of your existing code here exactly as-is */}
    </main>
  );
}
