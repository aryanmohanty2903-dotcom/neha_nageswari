import React from "react";
import { awards } from "../mock/mock";
import { Award, Crown } from "lucide-react";

const Awards = () => {
  return (
    <section id="awards" className="py-16 md:py-24" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 md:col-span-7 reveal">
            <span className="chip mb-5"><Crown size={12} /> HONOURS &amp; ACCOLADES</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]" style={{ color: "var(--ink)" }}>
              Recognised. <em style={{ color: "var(--wine)" }}>Twice over.</em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-end reveal">
            <p className="text-[15px]" style={{ color: "var(--muted-ink)" }}>
              Recognised for performance, presence, and cultural influence — including <strong style={{ color: "var(--ink)" }}>Women of Substance 2024</strong> and two consecutive Best Heroine wins.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {awards.map((a, i) => (
            <div
              key={a.id}
              className="group border border-[var(--ink)]/15 hover:border-[var(--wine)] transition-colors p-7 md:p-9 flex items-start gap-6 reveal bg-white/30"
            >
              <div className="h-16 w-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--ink)", color: "var(--gold)" }}>
                <Award size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  <div className="font-accent tracking-wider-x text-[11px]" style={{ color: "var(--wine)" }}>
                    {a.category}
                  </div>
                  <div className="font-display text-3xl italic" style={{ color: "var(--ink)" }}>{a.year}</div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl mt-3 leading-tight" style={{ color: "var(--ink)" }}>
                  {a.title}
                </h3>
                <p className="mt-3 text-sm" style={{ color: "var(--muted-ink)" }}>{a.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
