import React from "react";
import { currentlyStarring } from "../mock/mock";
import { Tv, ArrowUpRight, CircleDot } from "lucide-react";

const CurrentlyStarring = () => {
  const c = currentlyStarring;
  return (
    <section id="now" className="py-16 md:py-24" style={{ background: "var(--ink)" }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-center gap-3 mb-10 reveal">
          <CircleDot size={14} style={{ color: "var(--gold)" }} />
          <span className="font-accent tracking-wider-x text-xs" style={{ color: "var(--gold-soft)" }}>
            NOW PLAYING · PRIMETIME
          </span>
        </div>
        <div className="grid grid-cols-12 gap-8 md:gap-14 items-center">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 reveal">
            <h2 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
              <span>Tori Pai</span>
              <br />
              <span className="italic" style={{ color: "var(--gold)" }}>To Pai</span>
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="chip chip-dark">{c.role}</span>
              <span className="chip chip-dark">{c.network}</span>
              <span className="chip chip-dark">{c.year}</span>
            </div>
            <p className="mt-8 text-white/75 max-w-xl leading-relaxed">{c.description}</p>

            <ul className="mt-10 space-y-4">
              {c.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-[6px] w-[6px] rounded-full" style={{ background: "var(--gold)" }} />
                  <span className="text-white/80">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-4">
              <a href="#works" className="btn-dark-ghost">
                <Tv size={14} /> All Works
              </a>
              <a href="https://www.youtube.com/channel/UCnemgse7egsa8w54eFkVDEA" target="_blank" rel="noreferrer" className="btn-dark-ghost">
                Watch Clips <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 reveal">
            <div className="relative h-[540px] md:h-[640px]">
              <div className="tile absolute inset-0">
                <img src={c.image} alt="Tori Pai To Pai" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)" }} />
                <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                  <span className="chip chip-dark">S2 · TARANG TV</span>
                  <div className="text-right">
                    <div className="font-accent tracking-wider-x text-[10px] text-white/70">EPISODES</div>
                    <div className="font-display text-2xl" style={{ color: "var(--gold)" }}>500+</div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-script text-3xl" style={{ color: "var(--gold)" }}>fan-favourite</div>
                  <div className="font-display text-white text-3xl mt-1">Every night, 8 PM.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyStarring;
