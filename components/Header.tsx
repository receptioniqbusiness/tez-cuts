export default function Header() {
  return (
    <header className="border-b border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="/"
          className="text-xl font-semibold tracking-[0.28em] text-[#d4af37]"
        >
          TEZ CUTS
        </a>

        <nav className="hidden gap-8 text-sm text-white/75 md:flex">
          <a href="/" className="transition hover:text-[#d4af37]">
            Home
          </a>
          <a href="/services" className="transition hover:text-[#d4af37]">
            Services
          </a>
          <a href="/gallery" className="transition hover:text-[#d4af37]">
            Gallery
          </a>
          <a href="/contact" className="transition hover:text-[#d4af37]">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
