import React from "react";
import { press } from "../mock/mock";
import { Quote } from "lucide-react";

const Press = () => {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--ivory-2)" }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="mb-10 md:mb-14 reveal">
          <span className="chip mb-5"><Quote size={12} /> WHAT THEY SAY</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]" style={{ color: "var(--ink)" }}>
            Press &amp; <em style={{ color: "var(--wine)" }}>whispers.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {press.map((p, i) => (
            <blockquote key={i} className="relative bg-white/50 border border-[var(--ink)]/10 p-8 md:p-10 reveal">
              <span className="absolute -top-4 left-8 font-display text-6xl" style={{ color: "var(--wine)" }}>“</span>
              <p className="font-display text-xl md:text-2xl leading-snug" style={{ color: "var(--ink)" }}>
                {p.quote}
              </p>
              <footer className="mt-6 font-accent tracking-luxe text-xs" style={{ color: "var(--muted-ink)" }}>
                — {p.source}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
