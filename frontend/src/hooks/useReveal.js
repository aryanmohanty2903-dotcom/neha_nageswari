import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Safety fallback: after 4s, reveal anything still not shown
    // (handles cases where IntersectionObserver misses fast-loaded content)
    const fallback = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
    }, 4000);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);
}
