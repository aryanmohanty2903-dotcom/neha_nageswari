import React, { useState } from "react";
import { musicVideos } from "../mock/mock";
import { Play, Music2, ArrowUpRight, Disc3 } from "lucide-react";

const MusicVideos = () => {
  const [active, setActive] = useState(0);
  const v = musicVideos[active];

  return (
    <section id="music" className="py-16 md:py-24 relative overflow-hidden" style={{ background: "var(--ink)" }}>
      {/* Decorative vinyl (subtle, hidden on mobile) */}
      <div
        className="hidden lg:block absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none opacity-15 spin-slow"
        style={{
          background:
            "radial-gradient(circle at center, var(--gold) 0%, transparent 58%), repeating-radial-gradient(circle at center, transparent 0 8px, rgba(0,0,0,0.35) 8px 9px)",
        }}
      />

      <div className="max-w-[1500px] mx-auto px-5 md:px-10 relative">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-end mb-8 md:mb-12 reveal">
          <div className="col-span-12 md:col-span-8">
            <span className="chip chip-dark mb-4 md:mb-6">
              <Music2 size={12} /> MUSIC VIDEOGRAPHY
            </span>
            <h2 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.95]">
              The sound of a <em style={{ color: "var(--gold)" }}>generation.</em>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 text-white/70 text-sm md:text-[15px]">
            Six chart-topping music videos — from tender ballads to viral dance anthems. Each frame a film, each hook a trend.
          </p>
        </div>

        {/* Featured display */}
        <div className="grid grid-cols-12 gap-5 md:gap-8">
          <div className="col-span-12 lg:col-span-8 reveal">
            <div className="music-card relative h-[380px] sm:h-[460px] md:h-[560px] lg:h-[620px] tilt">
              <img src={v.cover} alt={v.title} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,9,8,0.1) 0%, rgba(10,9,8,0.15) 50%, rgba(10,9,8,0.92) 100%)",
                }}
              />
              <div className="ring" />

              {/* Top chips */}
              <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                <div className="flex gap-2 flex-wrap">
                  <span className="chip chip-dark">{v.tag}</span>
                  <span className="chip chip-dark">{v.year}</span>
                  <span className="chip chip-dark">{v.runtime}</span>
                </div>
                <div className="text-right">
                  <div className="font-accent tracking-wider-x text-[10px]" style={{ color: "var(--gold-soft)" }}>
                    VIEWS
                  </div>
                  <div className="font-display text-3xl md:text-4xl" style={{ color: "var(--gold)" }}>
                    {v.views}
                  </div>
                </div>
              </div>

              {/* Play button */}
              <button
                aria-label="Play"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "var(--gold)", color: "var(--ink)" }}
              >
                <span
                  className="absolute inset-0 rounded-full animate-ping opacity-30"
                  style={{ background: "var(--gold)" }}
                />
                <Play size={24} fill="currentColor" className="md:hidden" />
                <Play size={30} fill="currentColor" className="hidden md:block" />
              </button>

              {/* Bottom info */}
              <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 right-5 md:right-7">
                <div className="font-accent tracking-wider-x text-[10px] md:text-[11px]" style={{ color: "var(--gold-soft)" }}>
                  {v.featuring}
                </div>
                <h3 className="font-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1.5 md:mt-2 leading-none">{v.title}</h3>
                <p className="mt-2 md:mt-3 max-w-xl text-white/75 text-[13px] md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">{v.description}</p>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="col-span-12 lg:col-span-4 reveal">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <Disc3 size={18} style={{ color: "var(--gold)" }} className="spin-slow" />
                <span className="font-accent tracking-wider-x text-[11px]" style={{ color: "var(--gold-soft)" }}>
                  ALL TRACKS · {musicVideos.length}
                </span>
              </div>
              <a
                href="https://www.youtube.com/channel/UCnemgse7egsa8w54eFkVDEA"
                target="_blank"
                rel="noreferrer"
                className="font-accent tracking-luxe text-[10px] text-white/70 hover:text-[var(--gold)] transition-colors"
              >
                YOUTUBE <ArrowUpRight size={12} className="inline" />
              </a>
            </div>
            <ul className="space-y-2">
              {musicVideos.map((m, i) => {
                const isActive = i === active;
                return (
                  <li key={m.id}>
                    <button
                      onClick={() => setActive(i)}
                      className={`w-full text-left flex items-center gap-4 p-3 md:p-4 border transition-all ${
                        isActive
                          ? "border-[var(--gold)] bg-white/[0.04]"
                          : "border-white/10 hover:border-white/40"
                      }`}
                    >
                      <div className="w-14 h-14 flex-shrink-0 overflow-hidden">
                        <img src={m.cover} alt={m.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className="font-accent tracking-luxe text-[10px]"
                            style={{ color: isActive ? "var(--gold)" : "rgba(255,255,255,0.5)" }}
                          >
                            #{String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-accent tracking-luxe text-[10px] text-white/40">· {m.year}</span>
                          <span className="ml-auto font-accent tracking-luxe text-[10px] text-white/40">{m.runtime}</span>
                        </div>
                        <div className="font-display text-lg md:text-xl text-white mt-1 truncate">{m.title}</div>
                        <div className="text-[11px] mt-0.5 truncate" style={{ color: "var(--gold-soft)" }}>
                          {m.featuring}
                        </div>
                      </div>
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                          isActive ? "bg-[var(--gold)] text-[var(--ink)]" : "bg-white/10 text-white"
                        }`}
                      >
                        <Play size={12} fill="currentColor" />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicVideos;
