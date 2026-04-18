import React from "react";
import { personal } from "../mock/mock";
import { Instagram, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ background: "var(--ink-2)", color: "var(--ivory)" }} className="pt-20 pb-10 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-7">
            <h3 className="font-display text-6xl md:text-[9rem] leading-[0.9]">
              Neha <em style={{ color: "var(--gold)" }}>Nageswari</em>
            </h3>
            <p className="mt-4 font-script text-2xl" style={{ color: "var(--gold-soft)" }}>
              a story still being written.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col gap-5 md:items-end">
            <div className="flex items-center gap-3">
              <a href={personal.socials.instagram} target="_blank" rel="noreferrer" className="h-11 w-11 rounded-full flex items-center justify-center border border-white/20 hover:border-[var(--gold)] transition-colors">
                <Instagram size={17} />
              </a>
              <a href={personal.socials.youtube} target="_blank" rel="noreferrer" className="h-11 w-11 rounded-full flex items-center justify-center border border-white/20 hover:border-[var(--gold)] transition-colors">
                <Youtube size={17} />
              </a>
              <a href="#top" className="h-11 w-11 rounded-full flex items-center justify-center border border-white/20 hover:border-[var(--gold)] transition-colors" aria-label="To top">
                <ArrowUp size={17} />
              </a>
            </div>
            <div className="font-accent tracking-wider-x text-[11px]" style={{ color: "var(--gold-soft)" }}>
              BHUBANESWAR · ODISHA · INDIA
            </div>
          </div>
        </div>

        <div className="hr-gold my-14" />

        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-6 font-body text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            © {new Date().getFullYear()} Neha Nageswari Mohanty. All rights reserved.
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right font-accent tracking-wider-x text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            DESIGNED WITH CARE · FOR THE CAMERA &amp; THE STAGE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
