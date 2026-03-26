import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h1 className="text-5xl font-bold md:text-6xl">Contact</h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Get in touch for appointments or questions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="text-[#d4af37]">Phone</p>
              <p>(404) 555-0199</p>
            </div>

            <div>
              <p className="text-[#d4af37]">Email</p>
              <p>book@tezcuts.com</p>
            </div>

            <div>
              <p className="text-[#d4af37]">Location</p>
              <p>123 Luxe Avenue</p>
              <p>Atlanta, GA</p>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-black border border-white/10"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-black border border-white/10"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-3 rounded bg-black border border-white/10"
            />
            <button className="bg-[#d4af37] text-black px-6 py-3 rounded font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
