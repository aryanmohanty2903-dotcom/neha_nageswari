import React, { useEffect, useState } from "react";
import { personal } from "../mock/mock";

const Preloader = () => {
  const [exit, setExit] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let v = 0;
    const iv = setInterval(() => {
      v += Math.random() * 12 + 6;
      if (v >= 100) {
        v = 100;
        clearInterval(iv);
        setTimeout(() => setExit(true), 500);
      }
      setProgress(Math.min(100, v));
    }, 160);
    return () => clearInterval(iv);
  }, []);

  const letters = personal.shortName.split("");

  return (
    <div className={`preloader ${exit ? "exit" : ""}`}>
      <div className="text-center px-6">
        <div className="mb-4" style={{ color: "var(--gold)" }}>
          <span className="font-accent tracking-wider-x text-xs">EST. 2023 · BHUBANESWAR</span>
        </div>
        <h1 className="font-display text-6xl md:text-8xl leading-none overflow-hidden">
          <span className="inline-flex overflow-hidden align-bottom">
            {letters.map((ch, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  animation: `letterIn 900ms ${i * 55}ms cubic-bezier(.2,.7,.2,1) both`,
                  whiteSpace: ch === " " ? "pre" : "normal",
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>
        </h1>
        <div className="mt-10 w-[260px] md:w-[420px] mx-auto">
          <div className="flex justify-between mb-3 font-accent tracking-luxe text-xs" style={{ color: "var(--gold-soft)" }}>
            <span>LOADING</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="h-[2px] w-full bg-white/10 overflow-hidden">
            <div
              className="h-full"
              style={{ width: `${progress}%`, background: "var(--gold)", transition: "width 150ms ease" }}
            />
          </div>
        </div>
        <p className="mt-8 font-script text-2xl" style={{ color: "var(--gold)" }}>
          the portfolio of an artist
        </p>
      </div>
    </div>
  );
};

export default Preloader;
