import React from "react";
import { filmography } from "../mock/mock";

const Filmography = () => {
  return (
    <section id="works" className="py-24 md:py-32" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <span className="chip mb-5">SELECT WORKS</span>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]" style={{ color: "var(--ink)" }}>
              Selected <em style={{ color: "var(--wine)" }}>Filmography</em>
            </h2>
          </div>
          <div className="hidden md:block font-accent tracking-wider-x text-xs text-right" style={{ color: "var(--muted-ink)" }}>
            2023 — 2025<br />CURATED
          </div>
        </div>

        <div className="border-t" style={{ borderColor: "rgba(10,9,8,0.2)" }}>
          {filmography.map((f, i) => (
            <div
              key={i}
              className="group grid grid-cols-12 items-start md:items-center gap-4 md:gap-8 py-8 border-b transition-colors reveal"
              style={{ borderColor: "rgba(10,9,8,0.15)" }}
            >
              <div className="col-span-3 md:col-span-2 font-accent tracking-luxe text-sm" style={{ color: "var(--wine)" }}>
                {f.year}
              </div>
              <div className="col-span-9 md:col-span-5">
                <h3 className="font-display text-2xl md:text-4xl leading-tight group-hover:italic transition-all" style={{ color: "var(--ink)" }}>
                  {f.title}
                </h3>
                <p className="mt-2 text-sm md:text-base" style={{ color: "var(--muted-ink)" }}>
                  {f.note}
                </p>
              </div>
              <div className="col-span-6 md:col-span-3 font-body text-sm md:text-base" style={{ color: "var(--ink)" }}>
                {f.role}
              </div>
              <div className="col-span-6 md:col-span-2 text-right font-accent tracking-luxe text-xs" style={{ color: "var(--muted-ink)" }}>
                {f.platform}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filmography;
