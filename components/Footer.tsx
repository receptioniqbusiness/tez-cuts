export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
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
  );
}
