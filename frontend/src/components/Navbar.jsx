import React, { useEffect, useState } from "react";
import { Menu, X, Instagram, Youtube } from "lucide-react";
import { personal } from "../mock/mock";

const items = [
  { label: "About", href: "#about" },
  { label: "Now Playing", href: "#now" },
  { label: "Music", href: "#music" },
  { label: "Works", href: "#works" },
  { label: "Brands", href: "#brands" },
  { label: "Gallery", href: "#gallery" },
  { label: "Awards", href: "#awards" },
  { label: "Connect", href: "#connect" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-[rgba(245,240,232,0.85)] border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-2xl md:text-3xl leading-none" style={{ color: "var(--ink)" }}>
            Neha<span style={{ color: "var(--wine)" }}>.</span>
          </span>
          <span className="hidden md:inline font-accent tracking-wider-x text-[10px]" style={{ color: "var(--muted-ink)" }}>
            NAGESWARI MOHANTY
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              className="font-accent tracking-luxe text-xs text-[var(--ink)] hover:text-[var(--wine)] transition-colors"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={personal.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[var(--ink)] hover:text-[var(--wine)] transition-colors">
            <Instagram size={18} />
          </a>
          <a href={personal.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="text-[var(--ink)] hover:text-[var(--wine)] transition-colors">
            <Youtube size={18} />
          </a>
          <a href="#connect" className="btn-primary" style={{ padding: "0.65rem 1.1rem" }}>
            Book Neha
          </a>
        </div>

        <button className="lg:hidden p-2 text-[var(--ink)]" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--ivory)] border-t border-black/5">
          <div className="px-6 py-6 flex flex-col gap-5">
            {items.map((it) => (
              <a
                key={it.label}
                href={it.href}
                onClick={() => setOpen(false)}
                className="font-accent tracking-luxe text-sm text-[var(--ink)] hover:text-[var(--wine)]"
              >
                {it.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-black/10">
              <a href={personal.socials.instagram} target="_blank" rel="noreferrer" className="text-[var(--ink)]"><Instagram size={18} /></a>
              <a href={personal.socials.youtube} target="_blank" rel="noreferrer" className="text-[var(--ink)]"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
