import React, { useEffect, useRef, useState } from "react";
import { ArrowDownRight, Play, Sparkles } from "lucide-react";
import { personal, heroStats, heroImages } from "../mock/mock";
import Magnetic from "./Magnetic";

const Hero = () => {
  const [y, setY] = useState(0);
  const stageRef = useRef(null);

  useEffect(() => {
    let rafId;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Parallax translations
  const mainY = y * 0.08;
  const secY = y * -0.12;
  const wordY = y * -0.25;

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-14 overflow-hidden" style={{ background: "var(--ivory)" }} ref={stageRef}>
      {/* Decorative side label */}
      <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 origin-left -rotate-90">
        <span className="font-accent tracking-wider-x text-[10px]" style={{ color: "var(--muted-ink)" }}>
          SCROLL TO EXPLORE &nbsp;— &nbsp; NEHA NAGESWARI MOHANTY
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          {/* Left text */}
          <div className="col-span-12 lg:col-span-7 relative">
            <div className="flex items-center gap-3 mb-8 reveal">
              <span className="divider-dot" />
              <span className="font-accent tracking-wider-x text-xs" style={{ color: "var(--wine)" }}>
                ODIA TV · CINEMA · MUSIC
              </span>
              <span className="hidden sm:inline-block hr-gold flex-1 w-16" />
              <span className="hidden sm:inline font-accent tracking-wider-x text-[10px]" style={{ color: "var(--muted-ink)" }}>
                PORTFOLIO · 25
              </span>
            </div>

            <h1 className="font-display leading-[0.88] text-[14vw] sm:text-[11vw] lg:text-[8.6vw] tracking-tight">
              <span className="mask-line reveal" style={{ "--i": 0 }}>
                <span style={{ color: "var(--ink)" }}>Neha</span>
              </span>
              <span className="mask-line reveal" style={{ "--i": 1 }}>
                <span className="italic" style={{ color: "var(--wine)" }}>
                  Nageswari<span className="font-script not-italic" style={{ color: "var(--gold)" }}>.</span>
                </span>
              </span>
              <span className="mask-line reveal" style={{ "--i": 2 }}>
                <span style={{ color: "var(--ink)" }}>Mohanty</span>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-[15px] md:text-base leading-relaxed reveal" style={{ color: "var(--muted-ink)" }}>
              {personal.tagline} — currently headlining <strong style={{ color: "var(--ink)" }}>{personal.currentlyStarring}</strong> on {personal.network}. A two-time Best Heroine and the face of modern Odia storytelling.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 reveal">
              <Magnetic>
                <a href="#now" className="btn-primary">
                  Now Playing <ArrowDownRight size={16} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#music" className="btn-ghost">
                  <Play size={14} /> Watch Showreel
                </a>
              </Magnetic>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 stagger reveal">
              {heroStats.map((s, i) => (
                <div key={i} className="relative pt-5" style={{ "--i": i }}>
                  <div className="absolute left-0 right-0 top-0 h-px grow-line" style={{ background: "var(--ink)", animationDelay: `${i * 120}ms` }} />
                  <div className="font-display text-2xl md:text-3xl" style={{ color: "var(--ink)" }}>{s.value}</div>
                  <div className="font-accent tracking-luxe text-[10px] mt-1" style={{ color: "var(--muted-ink)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right collage */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative h-[560px] md:h-[680px] reveal">
              {/* Main portrait */}
              <div className="tile absolute top-0 right-0 w-[78%] h-[78%] shadow-2xl" style={{ transform: `translateY(${mainY}px)` }}>
                <div className="w-full h-full clip-reveal">
                  <img src={heroImages.main} alt="Neha portrait" className="w-full h-full object-cover animate-kenburns" />
                </div>
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)" }} />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="chip chip-dark">
                    <Sparkles size={12} /> FEATURED
                  </span>
                  <span className="font-display italic text-white text-xl">2025</span>
                </div>
              </div>
              {/* Secondary */}
              <div
                className="tile absolute bottom-0 left-0 w-[52%] h-[42%] shadow-xl"
                style={{ border: "6px solid var(--ivory)", transform: `translateY(${secY}px)` }}
              >
                <img src={heroImages.secondary} alt="Neha editorial" className="w-full h-full object-cover" />
              </div>
              {/* Accent label */}
              <div className="absolute left-0 top-0 w-[38%] h-[28%] flex flex-col justify-between" style={{ transform: `translateY(${wordY}px)` }}>
                <div className="font-script text-3xl md:text-4xl leading-tight" style={{ color: "var(--wine)" }}>
                  Best Heroine
                </div>
                <div className="font-accent tracking-wider-x text-[10px]" style={{ color: "var(--ink)" }}>
                  — 2024 &amp; 2025 (CONSECUTIVE)
                </div>
              </div>
            </div>

            {/* Floating signature badge */}
            <div className="hidden md:flex absolute -bottom-8 right-6 items-center gap-3 animate-float">
              <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ background: "var(--ink)", color: "var(--gold)" }}>
                <Sparkles size={18} />
              </div>
              <div>
                <div className="font-accent tracking-wider-x text-[10px]" style={{ color: "var(--muted-ink)" }}>AVAILABLE FOR</div>
                <div className="font-display text-base" style={{ color: "var(--ink)" }}>Brand Films · Serials</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
