import React from "react";
import { personal, heroImages } from "../mock/mock";
import { Quote, MapPin, Globe2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-36" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10 md:gap-16">
          <div className="col-span-12 lg:col-span-5 reveal">
            <div className="sticky top-28">
              <span className="chip mb-8"><Quote size={12} /> THE ARTIST</span>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95]" style={{ color: "var(--ink)" }}>
                A voice <em style={{ color: "var(--wine)" }}>of a new</em> Odisha.
              </h2>
              <div className="mt-8 tile h-[420px] frame-gold">
                <img src={heroImages.tertiary} alt="Neha editorial about" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 reveal">
            <p className="font-display text-2xl md:text-3xl leading-snug" style={{ color: "var(--ink)" }}>
              {personal.bio}
            </p>
            <div className="hr-gold my-10" />
            <p className="text-[15px] md:text-base leading-8 whitespace-pre-line" style={{ color: "var(--muted-ink)" }}>
              {personal.longBio}
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-black/10 p-6">
                <div className="flex items-center gap-2 font-accent tracking-luxe text-[11px]" style={{ color: "var(--wine)" }}>
                  <MapPin size={13} /> BASED IN
                </div>
                <div className="mt-2 font-display text-2xl" style={{ color: "var(--ink)" }}>{personal.location}</div>
              </div>
              <div className="border border-black/10 p-6">
                <div className="flex items-center gap-2 font-accent tracking-luxe text-[11px]" style={{ color: "var(--wine)" }}>
                  <Globe2 size={13} /> SPEAKS
                </div>
                <div className="mt-2 font-display text-2xl" style={{ color: "var(--ink)" }}>{personal.languages.join(" · ")}</div>
              </div>
            </div>

            <div className="mt-14 flex items-center gap-6">
              <div className="font-script text-4xl" style={{ color: "var(--wine)" }}>{personal.signature}</div>
              <div className="hr-gold flex-1" />
              <div className="font-accent tracking-wider-x text-xs" style={{ color: "var(--muted-ink)" }}>SINCE 2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
