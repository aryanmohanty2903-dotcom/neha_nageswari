import React from "react";
import { personal, heroImages } from "../mock/mock";
import { Quote, MapPin, Globe2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          <div className="col-span-12 lg:col-span-5 reveal">
            <div className="lg:sticky lg:top-28">
              <span className="chip mb-6 md:mb-8"><Quote size={12} /> THE ARTIST</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]" style={{ color: "var(--ink)" }}>
                A voice <em style={{ color: "var(--wine)" }}>of a new</em> Odisha.
              </h2>
              <div className="mt-6 md:mt-8 tile h-[320px] md:h-[420px] frame-gold">
                <img src={heroImages.tertiary} alt="Neha editorial about" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 reveal">
            <p className="font-display text-xl sm:text-2xl md:text-3xl leading-snug" style={{ color: "var(--ink)" }}>
              {personal.bio}
            </p>
            <div className="hr-gold my-8 md:my-10" />
            <p className="text-sm md:text-[15px] lg:text-base leading-7 md:leading-8 whitespace-pre-line" style={{ color: "var(--muted-ink)" }}>
              {personal.longBio}
            </p>

            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="border border-black/10 p-5 md:p-6">
                <div className="flex items-center gap-2 font-accent tracking-luxe text-[11px]" style={{ color: "var(--wine)" }}>
                  <MapPin size={13} /> BASED IN
                </div>
                <div className="mt-2 font-display text-xl md:text-2xl" style={{ color: "var(--ink)" }}>{personal.location}</div>
              </div>
              <div className="border border-black/10 p-5 md:p-6">
                <div className="flex items-center gap-2 font-accent tracking-luxe text-[11px]" style={{ color: "var(--wine)" }}>
                  <Globe2 size={13} /> SPEAKS
                </div>
                <div className="mt-2 font-display text-xl md:text-2xl" style={{ color: "var(--ink)" }}>{personal.languages.join(" · ")}</div>
              </div>
            </div>

            <div className="mt-12 md:mt-14 flex items-center gap-4 md:gap-6">
              <div className="font-script text-3xl md:text-4xl" style={{ color: "var(--wine)" }}>{personal.signature}</div>
              <div className="hr-gold flex-1" />
              <div className="font-accent tracking-wider-x text-[10px] md:text-xs" style={{ color: "var(--muted-ink)" }}>SINCE 2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
