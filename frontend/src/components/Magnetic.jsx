import React, { useRef } from "react";

const Magnetic = ({ children, strength = 18, className = "" }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <span
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  );
};

export default Magnetic;
