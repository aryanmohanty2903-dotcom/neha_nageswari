import React, { useState } from "react";
import { gallery } from "../mock/mock";
import { X } from "lucide-react";

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="py-16 md:py-24" style={{ background: "var(--ink)" }}>
      <div className="max-w-[1500px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14 reveal">
          <div>
            <span className="chip chip-dark mb-5">FROM THE LENS</span>
            <h2 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
              The <em style={{ color: "var(--gold)" }}>Neha</em> lookbook.
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <div className="font-accent tracking-wider-x text-xs" style={{ color: "var(--gold-soft)" }}>
              {gallery.length} FRAMES · CURATED
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(g)}
              className={`tile reveal ${g.span === "tall" ? "row-span-2 h-[520px]" : "h-[250px] md:h-[320px]"}`}
            >
              <img src={g.src} alt={g.tag} className="w-full h-full object-cover" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 100%)" }} />
              <div className="absolute bottom-3 left-3">
                <span className="chip chip-dark text-[9px]">{g.tag}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-14"
          style={{ background: "rgba(10,9,8,0.92)" }}
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center"
            style={{ background: "var(--gold)", color: "var(--ink)" }}
          >
            <X size={20} />
          </button>
          <img
            src={active.src}
            alt={active.tag}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
