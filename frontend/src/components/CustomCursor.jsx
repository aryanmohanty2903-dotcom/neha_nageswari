import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      const t = e.target;
      if (!t || typeof t.closest !== "function") return;
      const hoverable = t.closest("a, button, [data-cursor='hover'], .tile, .music-card");
      document.body.classList.toggle("cursor-hover", !!hoverable);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    loop();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};

export default CustomCursor;
