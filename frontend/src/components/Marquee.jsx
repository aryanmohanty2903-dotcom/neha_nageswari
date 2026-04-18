import React from "react";
import { Star } from "lucide-react";

const Marquee = () => {
  const items = [
    "Tori Pai To Pai",
    "Tarang TV",
    "Best Jodi · Tarang Parivaar 2025",
    "Kamala Rasa",
    "Tate Jebe Bhala Paeili",
    "Women of Substance 2024",
    "Tanishq",
    "Mia by Tanishq",
    "CaratLane",
    "Helios by Titan",
    "Arundhati Jewellers",
    "Chandi Bhandar",
    "Nucleon Kota",
  ];
  const row = [...items, ...items];
  return (
    <section className="strip py-5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-5 px-6">
            <Star size={14} style={{ color: "var(--gold)" }} />
            <span className="font-accent tracking-wider-x text-sm md:text-base" style={{ color: "var(--ivory)" }}>
              {t}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
