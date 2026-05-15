import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Video, Globe } from 'lucide-react';

const Book = () => {
  useEffect(() => {
    // We need to load the GHL script for the embed
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#06081a] text-[#eef0ff] font-sans overflow-x-hidden selection:bg-[#3b6fe8]/30 selection:text-white md:grid md:grid-cols-2">
      {/* LEFT PANEL */}
      <div className="relative p-8 md:p-12 lg:p-[52px] flex flex-col min-h-[500px] md:min-h-screen">
        {/* Background Image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=70&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(6,8,26,0.82)_0%,rgba(6,8,26,0.75)_50%,rgba(6,8,26,0.92)_100%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-2.5 mb-16 md:mb-auto hover:opacity-90 transition-opacity w-max">
            <div className="w-9 h-9 rounded-lg bg-[#3b6fe8] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white"><path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z"/></svg>
            </div>
            <div className="text-[17px] font-extrabold tracking-[-0.3px] text-white">
              Persona<span className="text-[#5b8af5]">Force®</span>
            </div>
          </Link>

          <div className="mt-auto pt-16 md:pt-32 pb-8 animate-[fadeUp_0.7s_ease_both]">
            <div className="inline-flex items-center gap-2 bg-[#3b6fe8]/[0.15] border border-[#3b6fe8]/30 text-[#5b8af5] text-[11px] font-bold tracking-[0.12em] uppercase py-1.5 px-3.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#5b8af5] rounded-full animate-[pulse_1.6s_ease-in-out_infinite] shrink-0" />
              Identity mapping session
            </div>

            <h1 className="text-[32px] md:text-[40px] lg:text-[46px] font-black leading-[1.08] tracking-[-0.8px] text-white mb-5">
              Let's see who you<br className="hidden md:block" /> become <em className="text-[#5b8af5] not-italic">under<br className="hidden md:block" /> pressure.</em>
            </h1>

            <p className="text-[15px] text-[#eef0ff]/60 leading-[1.75] max-w-[400px] mb-9">
              In 30 minutes, we'll map the identity architecture beneath your performance — the drivers, the shadow patterns, the exact points where pressure causes collapse — and show you a clear path to stabilise it.
            </p>

            <div className="flex flex-col gap-3.5">
              {[
                { bold: "30 minutes.", text: "No pitch. No pressure. Pure intelligence." },
                { bold: "With Travis Fox or Michelle Fox", text: "directly — not a sales rep." },
                { bold: "Limited to 6 sessions per month.", text: "Spots fill fast." },
                { bold: "", text: "You'll leave knowing something about your identity architecture you've never seen before." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3b6fe8] shrink-0 mt-2" />
                  <div className="text-[14px] text-[#eef0ff]/60 leading-[1.5]">
                    {item.bold && <strong className="text-white font-semibold">{item.bold} </strong>}
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="bg-white flex flex-col min-h-screen md:min-h-0 animate-[fadeUp_0.7s_0.15s_ease_both]">
        <div className="p-6 md:p-9 lg:px-10 lg:py-9 border-b border-[#f0f0f4]">
          <div className="text-[20px] font-black text-[#0a0a1a] mb-3.5">PersonaForce®</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[13px] text-[#666]">
              <Clock className="w-4 h-4 text-[#3b6fe8] shrink-0" />
              30 minutes
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#666]">
              <Video className="w-4 h-4 text-[#3b6fe8] shrink-0" />
              Video call
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#666]">
              <Globe className="w-4 h-4 text-[#3b6fe8] shrink-0" />
              Your timezone, auto-detected
            </div>
          </div>
        </div>

        {/* GHL Calendar Embed */}
        <div className="flex-1 w-full min-h-[600px] md:min-h-[650px] relative">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/BXc6BGPB8tpe8qAtSwyf"
            style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}
            scrolling="no"
            id="BXc6BGPB8tpe8qAtSwyf_1778835771281"
            title="PersonaForce Booking"
          ></iframe>
        </div>
      </div>

      {/* FOOTER - MOBILE ONLY (since grid replaces standard flow, we'll position absolute or just let it stack if mobile) */}
      <footer className="col-span-1 md:col-span-2 bg-[#06081a] border-t border-white/[0.07] py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-2 text-[12px] text-white/20">
        <span>© 2026 PersonaForce® — All Rights Reserved</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
          <a href="mailto:hello@personaforce.co" className="hover:text-white/50 transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Book;
