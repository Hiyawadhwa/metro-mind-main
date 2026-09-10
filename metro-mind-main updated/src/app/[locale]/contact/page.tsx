"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b1324] text-slate-100">
      {/* Hero */}
      <section className="px-6 md:px-16 lg:px-24 pt-24 pb-14">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-400 font-semibold mb-4">
            Contact MetroMind
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Let's build smarter
            <span className="block text-cyan-400">
              metro operations.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Have a question about MetroMind, its operational capabilities, or
            how it can support your metro network? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="px-6 md:px-16 lg:px-24 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Contact information */}
          <div className="rounded-2xl border border-slate-700/60 bg-[#111b30] p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Get in touch
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <p className="text-slate-200">
                  support@metromind.com
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">Operations</p>
                <p className="text-slate-200">
                  Metro Operations &amp; Intelligence
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">Availability</p>
                <p className="text-slate-200">
                  Available for operational enquiries and platform support.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-slate-700/60 bg-[#111b30] p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Send us a message
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been received.");
              }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-700 bg-[#0b1324] px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-[#0b1324] px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-slate-700 bg-[#0b1324] px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            Want to learn more about MetroMind?
          </p>

          <Link
            href="/en/about"
            className="inline-block mt-4 text-cyan-400 font-semibold hover:text-cyan-300 transition"
          >
            Learn more about MetroMind →
          </Link>
        </div>
      </section>
    </main>
  );
}
