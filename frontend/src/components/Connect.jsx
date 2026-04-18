import React, { useState } from "react";
import { personal } from "../mock/mock";
import { Instagram, Youtube, Mail, Send, ExternalLink } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Connect = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please complete the form", description: "Name, email and message are required." });
      return;
    }
    // Save locally as mock
    try {
      const existing = JSON.parse(localStorage.getItem("neha_enquiries") || "[]");
      existing.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("neha_enquiries", JSON.stringify(existing));
    } catch {
      // ignore
    }
    setSubmitted(true);
    toast({ title: "Message sent", description: "Neha's team will get back to you shortly." });
    setForm({ name: "", email: "", org: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="connect" className="py-24 md:py-32" style={{ background: "var(--ink)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10 md:gap-16">
          <div className="col-span-12 lg:col-span-5 reveal">
            <span className="chip chip-dark mb-6">BOOK · COLLABORATE</span>
            <h2 className="font-display text-white text-5xl md:text-7xl leading-[0.95]">
              Let's make <em style={{ color: "var(--gold)" }}>something</em> iconic.
            </h2>
            <p className="mt-6 text-white/70 max-w-md">
              For brand collaborations, serial castings, music videos, events, and press enquiries — reach out and the team will respond within 48 hours.
            </p>

            <div className="mt-10 space-y-5">
              <a href={personal.socials.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="h-11 w-11 rounded-full flex items-center justify-center" style={{ background: "var(--ivory)", color: "var(--ink)" }}>
                  <Instagram size={18} />
                </div>
                <div>
                  <div className="font-accent tracking-wider-x text-[10px]" style={{ color: "var(--gold-soft)" }}>INSTAGRAM</div>
                  <div className="text-white group-hover:text-[var(--gold)] transition-colors">@neha_nageswari_official <ExternalLink size={12} className="inline ml-1" /></div>
                </div>
              </a>
              <a href={personal.socials.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="h-11 w-11 rounded-full flex items-center justify-center" style={{ background: "var(--ivory)", color: "var(--ink)" }}>
                  <Youtube size={18} />
                </div>
                <div>
                  <div className="font-accent tracking-wider-x text-[10px]" style={{ color: "var(--gold-soft)" }}>YOUTUBE</div>
                  <div className="text-white group-hover:text-[var(--gold)] transition-colors">Neha Nageswari Official <ExternalLink size={12} className="inline ml-1" /></div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-full flex items-center justify-center" style={{ background: "var(--ivory)", color: "var(--ink)" }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div className="font-accent tracking-wider-x text-[10px]" style={{ color: "var(--gold-soft)" }}>MANAGEMENT</div>
                  <div className="text-white">team@nehanageswari.in</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="col-span-12 lg:col-span-7 reveal border border-white/10 p-8 md:p-12" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Your name" name="name" value={form.name} onChange={onChange} />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} />
            </div>
            <div className="mt-6">
              <Field label="Organisation / Brand (optional)" name="org" value={form.org} onChange={onChange} />
            </div>
            <div className="mt-6">
              <label className="font-accent tracking-wider-x text-[11px]" style={{ color: "var(--gold-soft)" }}>YOUR MESSAGE</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                className="mt-2 w-full bg-transparent border-b border-white/25 focus:border-[var(--gold)] outline-none text-white py-3 placeholder:text-white/30 transition-colors resize-none"
                placeholder="Tell us about the project..."
              />
            </div>
            <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
              <div className="font-accent tracking-luxe text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                * YOUR DETAILS ARE KEPT PRIVATE
              </div>
              <button type="submit" className="btn-dark-ghost">
                {submitted ? "Sent ✓" : "Send Enquiry"} <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="font-accent tracking-wider-x text-[11px]" style={{ color: "var(--gold-soft)" }}>{label.toUpperCase()}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="mt-2 w-full bg-transparent border-b border-white/25 focus:border-[var(--gold)] outline-none text-white py-3 placeholder:text-white/30 transition-colors"
    />
  </div>
);

export default Connect;
