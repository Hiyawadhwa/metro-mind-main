"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b1324] text-slate-100">
      
      {/* Hero */}
      <section className="px-6 md:px-16 lg:px-24 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-cyan-400 text-lg font-semibold mb-4">
              About MetroMind
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The Intelligence Behind
              <span className="block text-cyan-400">
                Every Train Move
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed">
              MetroMind is an intelligent metro operations platform designed
              to help operators make faster, safer and more informed
              operational decisions.
            </p>

            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              From train readiness and maintenance to parking, cleaning and
              operational planning, MetroMind brings critical information
              together into one centralized system.
            </p>
          </div>
        </div>
      </section>

      {/* What MetroMind does */}
      <section className="px-6 md:px-16 lg:px-24 py-16 bg-[#111b30]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              One Platform. Complete Operations.
            </h2>

            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              MetroMind connects different operational workflows to create a
              clearer picture of the entire metro ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="rounded-2xl border border-slate-700/60 bg-[#0d1729] p-7">
              <div className="text-cyan-400 text-3xl mb-5">◉</div>

              <h3 className="text-xl font-semibold mb-3">
                Operational Intelligence
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Convert operational data into actionable insights for
                day-to-day metro decision making.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/60 bg-[#0d1729] p-7">
              <div className="text-emerald-400 text-3xl mb-5">◆</div>

              <h3 className="text-xl font-semibold mb-3">
                Smarter Optimization
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Optimize train movements, maintenance activities and depot
                operations while considering real operational constraints.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/60 bg-[#0d1729] p-7">
              <div className="text-amber-400 text-3xl mb-5">◇</div>

              <h3 className="text-xl font-semibold mb-3">
                Connected Workflows
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Bring scheduling, readiness, maintenance, parking and other
                operational workflows together in one system.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-cyan-400 font-semibold mb-4">
            Our Vision
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Making metro operations
            <span className="text-cyan-400"> smarter, safer and simpler.</span>
          </h2>

          <p className="mt-7 text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
            MetroMind is built around a simple idea: operational teams should
            have the right information at the right time to make better
            decisions.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="max-w-6xl mx-auto rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-10 md:p-14 text-center">

          <h2 className="text-3xl font-bold">
            Explore MetroMind
          </h2>

          <p className="mt-4 text-slate-400">
            Discover how intelligent operations can transform metro
            management.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/en"
              className="px-7 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
            >
              Back to Home
            </Link>

            <Link
              href="/en/security"
              className="px-7 py-3 rounded-xl border border-slate-600 text-slate-200 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Security
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
