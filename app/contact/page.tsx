export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Tez Cuts
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
            Contact
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Reach out for appointments, questions, or future booking setup.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              Shop Info
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Visit Tez Cuts</h2>

            <div className="mt-8 space-y-6 text-white/75">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#d4af37]">
                  Phone
                </p>
                <p className="mt-2">(404) 555-0199</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#d4af37]">
                  Email
                </p>
                <p className="mt-2">book@tezcuts.com</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#d4af37]">
                  Address
                </p>
                <p className="mt-2">123 Luxe Avenue</p>
                <p>Atlanta, GA 30303</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#d4af37]">
                  Hours
                </p>
                <p className="mt-2">Mon–Sat: 9AM – 7PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d4af37]/20 bg-[linear-gradient(135deg,#181818,#0f0f0f,#1c1708)] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              Mock Inquiry Form
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Send a message</h2>
            <p className="mt-4 text-white/70">
              This is a visual placeholder form for now. Later we can make it send
              real messages.
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
              />
              <textarea
                placeholder="Tell us what you need"
                rows={5}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
              />
              <button
                type="button"
                className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
