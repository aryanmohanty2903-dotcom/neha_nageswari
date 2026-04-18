import React from "react";
import { musicVideos } from "../mock/mock";
import { Play, Music2 } from "lucide-react";

const MusicVideos = () => {
  return (
    <section id="music" className="py-24 md:py-32" style={{ background: "var(--ivory-2)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <span className="chip mb-5"><Music2 size={12} /> MUSIC &amp; DANCE</span>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]" style={{ color: "var(--ink)" }}>
              Sound of <em style={{ color: "var(--wine)" }}>a moment.</em>
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm" style={{ color: "var(--muted-ink)" }}>
            Viral singles and dance hits that set social media on fire across Odisha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {musicVideos.map((m, idx) => (
            <article key={m.id} className="reveal group">
              <div className="tile relative h-[460px] md:h-[540px]">
                <img src={m.cover} alt={m.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.8) 100%)" }} />
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <span className="chip chip-dark">{m.tag}</span>
                  <span className="chip chip-dark">#{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{ background: "var(--gold)", color: "var(--ink)" }}>
                  <Play size={26} fill="currentColor" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-accent tracking-wider-x text-[11px]" style={{ color: "var(--gold-soft)" }}>
                    {m.featuring}
                  </div>
                  <h3 className="font-display text-white text-4xl md:text-5xl mt-2 leading-none">{m.title}</h3>
                </div>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--muted-ink)" }}>
                {m.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicVideos;
