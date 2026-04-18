import React from "react";
import { brands } from "../mock/mock";
import { Diamond } from "lucide-react";

const Brands = () => {
  return (
    <section id="brands" className="py-16 md:py-24" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-12 gap-8 items-end mb-14">
          <div className="col-span-12 md:col-span-7 reveal">
            <span className="chip mb-5"><Diamond size={12} /> BRAND FILMS &amp; ENDORSEMENTS</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]" style={{ color: "var(--ink)" }}>
              The face of <em style={{ color: "var(--wine)" }}>fine brands.</em>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-5 text-[15px]" style={{ color: "var(--muted-ink)" }}>
            From India's most iconic jewellery houses to leading lifestyle and education platforms — an endorsement roster built on credibility.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-px" style={{ background: "rgba(10,9,8,0.15)" }}>
          {brands.map((b, i) => (
            <div
              key={i}
              className="col-span-6 md:col-span-4 lg:col-span-3 bg-[var(--ivory)] p-8 md:p-10 flex flex-col justify-between h-[220px] group hover:bg-[var(--ink)] transition-colors duration-500 cursor-default reveal"
            >
              <div className="font-accent tracking-wider-x text-[10px] text-[var(--muted-ink)] group-hover:text-[var(--gold)] transition-colors">
                {String(i + 1).padStart(2, "0")} / {String(brands.length).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-[var(--ink)] group-hover:text-[var(--ivory)] transition-colors leading-tight">
                  {b.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <div className="font-accent tracking-luxe text-[10px] text-[var(--wine)] group-hover:text-[var(--gold)] transition-colors">
                    {b.category}
                  </div>
                  <div className="font-body text-[10px] text-[var(--muted-ink)] group-hover:text-[var(--ivory)]/80 transition-colors">
                    {b.note}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Closing CTA tile */}
          <div className="col-span-12 md:col-span-12 lg:col-span-3 bg-[var(--wine)] text-[var(--ivory)] p-8 md:p-10 flex flex-col justify-between h-[220px] reveal">
            <span className="font-accent tracking-wider-x text-[10px]" style={{ color: "var(--gold-soft)" }}>
              BRAND ENQUIRIES
            </span>
            <div>
              <div className="font-display text-2xl md:text-3xl leading-tight">Collaborate with Neha.</div>
              <a href="#connect" className="mt-4 inline-block font-accent tracking-luxe text-xs border-b border-[var(--gold)] pb-1">
                START A CONVERSATION →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
