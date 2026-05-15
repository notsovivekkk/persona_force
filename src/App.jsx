import React, { useState, useEffect } from 'react';
import { 
  Play,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "We'd done every sales training imaginable. PersonaForce was the first thing that got to why my team collapsed in the big meetings. Within three weeks we closed three deals we'd previously lost to nerves and inconsistency.",
      author: "Director of Sales, Series B SaaS — Sydney"
    },
    {
      quote: "I've been in leadership for 22 years. No program has ever shown me my own shadow interference patterns. Seeing them — and being trained to override them in the moment — changed how I lead under pressure entirely. This is a different category of work.",
      author: "VP Operations, Global Logistics Firm — Dubai"
    },
    {
      quote: "Our culture broke every time a major deal fell through. Travis and Michelle mapped the exact conflict points and installed protocols that actually hold. We haven't had a culture regression in six months. That's never happened before.",
      author: "CEO, Boutique Law Firm — London"
    }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#06081a] text-[#eef0ff] font-sans overflow-x-hidden selection:bg-[#3b6fe8]/30 selection:text-white">
      
      {/* ANNOUNCE BAR */}
      <div className="bg-[#3b6fe8] text-white text-center py-3 px-4 md:px-6 text-[11px] md:text-[13px] font-semibold tracking-wide flex justify-center items-center gap-2.5 relative z-50 leading-tight">
        <span className="w-2 h-2 bg-white rounded-full animate-[pulse_1.4s_ease-in-out_infinite] shrink-0" />
        Identity Mapping Sessions — Limited Availability — Book Before Spots Fill
      </div>

      {/* NAV */}
      <nav className={`fixed top-[40px] md:top-[44px] w-full z-40 transition-all duration-300 flex justify-center border-b border-white/[0.06] ${isScrolled ? 'bg-[#06081a]/95 backdrop-blur-md py-4' : 'bg-[#06081a] py-4 md:py-5'}`}>
        <div className="w-full max-w-[1000px] px-5 md:px-8 flex justify-between items-center">
          
          <div className="flex items-center gap-2.5 z-50">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b6fe8] to-[#7c3bed] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white"><path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z"/></svg>
            </div>
            <div className="text-base font-extrabold tracking-[-0.3px] text-[#eef0ff]">
              Persona<span className="text-[#5b8af5]">Force®</span>
            </div>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#" className="text-[13px] text-[#7a7fa8] hover:text-white transition-colors">AI Manager</a>
            <a href="#" className="text-[13px] text-[#7a7fa8] hover:text-white transition-colors">Lawyers</a>
            <a href="#" className="text-[13px] text-[#7a7fa8] hover:text-white transition-colors">Sales Identity</a>
            <a href="#" className="text-[13px] text-[#7a7fa8] hover:text-white transition-colors">Athletes</a>
          </div>

          <button className="hidden md:block bg-[#3b6fe8] hover:bg-[#3b6fe8]/90 text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-colors">
            Book a Call
          </button>

          <button className="md:hidden text-[#7a7fa8] hover:text-white transition-colors z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`fixed inset-0 bg-[#06081a]/95 backdrop-blur-xl z-40 transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <a href="#" className="text-xl font-bold text-[#eef0ff] hover:text-[#5b8af5] transition-colors" onClick={() => setIsMenuOpen(false)}>AI Manager</a>
          <a href="#" className="text-xl font-bold text-[#eef0ff] hover:text-[#5b8af5] transition-colors" onClick={() => setIsMenuOpen(false)}>Lawyers</a>
          <a href="#" className="text-xl font-bold text-[#eef0ff] hover:text-[#5b8af5] transition-colors" onClick={() => setIsMenuOpen(false)}>Sales Identity</a>
          <a href="#" className="text-xl font-bold text-[#eef0ff] hover:text-[#5b8af5] transition-colors" onClick={() => setIsMenuOpen(false)}>Athletes</a>
          <button className="bg-[#3b6fe8] text-white px-8 py-4 rounded-xl text-lg font-bold w-[80%] max-w-[300px] mt-4" onClick={() => setIsMenuOpen(false)}>
            Book a Call
          </button>
        </div>
      </nav>

      <div className="pt-[90px] md:pt-[110px]" /> {/* Spacer for fixed navs */}

      {/* HERO */}
      <section className="pt-10 md:pt-16 pb-12 text-center px-5 md:px-8">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#3b6fe8]/[0.18] border border-[#3b6fe8]/[0.32] text-[#5b8af5] text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase py-2 px-4 md:px-5 rounded-full mb-6 md:mb-8">
            Identity Intelligence™ System
          </div>
          
          <h1 className="text-[40px] sm:text-[54px] md:text-[68px] lg:text-[76px] font-black leading-[1.05] tracking-[-1.5px] text-[#eef0ff] max-w-[900px] mx-auto mb-5 md:mb-6">
            Your team doesn't crack<br/>under pressure.<br/>
            <em className="text-[#5b8af5] not-italic">Their identity does.</em>
          </h1>
          
          <p className="text-[16px] md:text-[19px] text-[#7a7fa8] max-w-[640px] mx-auto leading-[1.6] mt-2 md:mt-4">
            Most programs train behavior. But when the moment counts — the high-stakes pitch, the breaking point, the culture-defining decision — people don't fall to skill. They fall to identity. Watch this to understand why.
          </p>
        </div>
      </section>

      {/* VSL */}
      <section className="pb-8 md:pb-12 px-5 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="w-full rounded-[16px] md:rounded-[24px] overflow-hidden bg-black border border-[#3b6fe8]/[0.32] shadow-[0_0_50px_rgba(59,111,232,0.15),0_20px_40px_rgba(0,0,0,0.5)] md:shadow-[0_0_80px_rgba(59,111,232,0.22),0_32px_80px_rgba(0,0,0,0.7)] relative cursor-pointer group aspect-video">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_40%,#080d2a_0%,#06081a_100%)]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.04)_2px,rgba(0,0,0,0.04)_4px)] z-10 pointer-events-none" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-[radial-gradient(circle,rgba(59,111,232,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-[#3b6fe8]/[0.18] border-[1.5px] border-[#3b6fe8]/[0.32] flex items-center justify-center relative transition-transform duration-300 group-hover:scale-110">
                <div className="absolute -inset-[8px] md:-inset-[12px] rounded-full border border-[#3b6fe8]/[0.15]" />
                <div className="absolute -inset-[16px] md:-inset-[24px] rounded-full border border-[#3b6fe8]/[0.07]" />
                <div className="w-[44px] h-[44px] md:w-[56px] md:h-[56px] rounded-full bg-[#3b6fe8] flex items-center justify-center shadow-[0_0_24px_rgba(59,111,232,0.3)] md:shadow-[0_0_32px_rgba(59,111,232,0.22)]">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] fill-white ml-[3px]"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>

            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-5 z-30 font-sans text-[9px] md:text-[11px] text-[#7a7fa8] md:text-[#3a3f60] tracking-[0.05em] max-w-[60%] leading-tight">
              Why identity — not skill — determines performance under pressure
            </div>
            <div className="absolute bottom-3 md:bottom-4 right-3 md:right-5 z-30 bg-black/80 text-[#7a7fa8] text-[10px] md:text-xs font-semibold py-1 px-2.5 rounded-md backdrop-blur-sm">
              12:47
            </div>
          </div>

          <p className="text-center text-[12px] md:text-[13px] text-[#3a3f60] mt-4 md:mt-5">
            Watch free · No email required · 12 minutes
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 bg-[#10132b] border border-white/[0.06] rounded-[10px] py-3.5 px-6 mx-auto mt-6 md:mt-8 max-w-[480px] text-[13px] md:text-sm font-semibold text-center sm:text-left">
            <div className="w-2 h-2 bg-[#3b6fe8] rounded-full animate-[pulse_1.5s_ease-in-out_infinite] shrink-0 hidden sm:block" />
            <p className="text-[#eef0ff]">Mapping sessions this month: <span className="text-[#5b8af5]">6 spots remaining</span></p>
          </div>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-5 md:px-8"><div className="h-px bg-white/[0.06] mt-10 md:mt-16" /></div>

      {/* PAIN */}
      <section className="pt-16 md:pt-20 pb-16 px-5 md:px-8 flex flex-col items-center">
        <div className="max-w-[960px] mx-auto w-full">
          <div className="text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase text-[#5b8af5] mb-3 text-center">The Real Problem</div>
          <h2 className="text-[32px] sm:text-[38px] md:text-[46px] font-black text-center mb-5 tracking-[-0.5px] leading-[1.15]">
            Training works. Until the moment <em className="text-[#5b8af5] not-italic block sm:inline">it can't.</em>
          </h2>
          <p className="text-[15px] md:text-base text-[#7a7fa8] text-center max-w-[600px] mx-auto mb-10 md:mb-14 leading-[1.7]">
            You've invested in coaching, workshops, sales programs. It works — until pressure hits. Then something breaks. Not the skill. The person beneath it. Here's exactly what that looks like:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {[
              { num: "01", title: "Confidence Collapses Mid-Pitch", text: "The message they rehearsed disappears. In the room that matters most, their identity reverts to a version that protects — not performs." },
              { num: "02", title: "Tone Becomes Unpredictable", text: "Sharp in calm. Reactive in conflict. Your best performer in a normal week becomes your biggest liability in a high-stakes one." },
              { num: "03", title: "Follow-Through Quietly Erodes", text: "Standards drift. Culture thins. Execution loses its edge. And nobody can articulate why — because the cause lives below the surface." },
              { num: "04", title: "The Training Cycle Repeats", text: "New program. Temporary lift. Next pressure event. Same collapse. Because skill-level training can't fix an identity-level problem." }
            ].map((item, i) => (
              <div key={i} className="bg-[#0b0d22] border border-white/[0.06] rounded-[16px] p-7 md:p-8 relative overflow-hidden transition-all duration-300 hover:bg-[#10132b] hover:border-[#3b6fe8]/[0.32] group">
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3b6fe8] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="text-[40px] md:text-[48px] font-black text-[#3b6fe8]/20 leading-none mb-4">{item.num}</div>
                <h3 className="text-[16px] md:text-[17px] font-bold text-[#eef0ff] mb-2.5">{item.title}</h3>
                <p className="text-[14px] text-[#7a7fa8] leading-[1.65]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFRAME */}
      <section className="pb-16 md:pb-24 px-5 md:px-8">
        <div className="max-w-[960px] mx-auto">
          <div className="bg-[#0b0d22] border-l-[3px] border-[#3b6fe8] py-8 px-6 md:px-10 rounded-r-[16px]">
            <p className="text-[16px] md:text-[18px] text-[#b0b8e8] leading-[1.75] italic">
              This isn't a motivation problem. It isn't a mindset problem. It isn't even a skill gap. <strong className="text-[#eef0ff] not-italic font-semibold">It's an identity instability problem.</strong> And no amount of skill-level training fixes it — because skill lives above the surface. Identity lives beneath it. PersonaForce® goes beneath it.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-[#0b0d22] border-y border-white/[0.06] flex flex-col items-center">
        <div className="max-w-[960px] mx-auto w-full">
          <div className="text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase text-[#5b8af5] mb-3 text-center">How It Works</div>
          <h2 className="text-[32px] sm:text-[38px] md:text-[46px] font-black text-center mb-12 md:mb-16 tracking-[-0.5px] leading-[1.15]">
            Three phases. One outcome:<br/><em className="text-[#5b8af5] not-italic block sm:inline">performance that holds.</em>
          </h2>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 py-8 md:py-10 border-b border-white/[0.06] items-start">
              <div className="text-[12px] md:text-[11px] text-[#3b6fe8] font-bold tracking-[0.1em] md:min-w-[40px] pt-1 bg-[#3b6fe8]/10 md:bg-transparent px-3 py-1.5 md:p-0 rounded-full md:rounded-none">PHASE 01</div>
              <div>
                <div className="text-[18px] md:text-[20px] font-bold text-[#eef0ff] mb-3">Map the Identity Architecture™</div>
                <div className="text-[15px] text-[#7a7fa8] leading-[1.75]">We go beneath behavior. Using the PersonaForce® system, we identify your team's core identity drivers, shadow interference patterns — the subconscious signals that derail performance under pressure — and latent performance signals that have never been unlocked. This alone changes how leaders see themselves and their teams.</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-10 py-8 md:py-10 border-b border-white/[0.06] items-start">
              <div className="text-[12px] md:text-[11px] text-[#3b6fe8] font-bold tracking-[0.1em] md:min-w-[40px] pt-1 bg-[#3b6fe8]/10 md:bg-transparent px-3 py-1.5 md:p-0 rounded-full md:rounded-none">PHASE 02</div>
              <div>
                <div className="text-[18px] md:text-[20px] font-bold text-[#eef0ff] mb-3">Install Persona Control Under Pressure</div>
                <div className="text-[15px] text-[#7a7fa8] leading-[1.75]">We build the trained ability to stabilize the right persona in real time — in the closing conversation, the high-stakes meeting, the culture-defining moment. Not theory. An installed response pattern that activates when it counts most — without conscious effort.</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-10 py-8 md:py-10 items-start">
              <div className="text-[12px] md:text-[11px] text-[#3b6fe8] font-bold tracking-[0.1em] md:min-w-[40px] pt-1 bg-[#3b6fe8]/10 md:bg-transparent px-3 py-1.5 md:p-0 rounded-full md:rounded-none">PHASE 03</div>
              <div>
                <div className="text-[18px] md:text-[20px] font-bold text-[#eef0ff] mb-3">Scale With AI + Systems</div>
                <div className="text-[15px] text-[#7a7fa8] leading-[1.75]">The PersonaForce® AI Manager gives leaders real-time identity intelligence — detecting persona drift, flagging instability before it surfaces as a breakdown, and reinforcing standards automatically. Identity installed. Performance protected. Growth compounded.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOSTS */}
      <section className="py-16 md:py-24 px-5 md:px-8 flex flex-col items-center">
        <div className="max-w-[960px] mx-auto w-full">
          <div className="text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase text-[#5b8af5] mb-3 text-center">The People Behind It</div>
          <h2 className="text-[32px] sm:text-[38px] md:text-[46px] font-black text-center mb-10 md:mb-16 tracking-[-0.5px] leading-[1.15]">
            Built by people who've <em className="text-[#5b8af5] not-italic block sm:inline">lived this work.</em>
          </h2>

          <div className="bg-[#0b0d22] border border-white/[0.06] rounded-[20px] p-7 md:p-10 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-10 items-start mb-6 hover:border-[#3b6fe8]/[0.32] transition-colors">
            <div className="w-24 h-24 md:w-[140px] md:h-[140px] rounded-full bg-[#161933] border-2 border-[#3b6fe8]/[0.32] flex items-center justify-center text-[32px] md:text-[48px] font-black text-[#5b8af5] shadow-[0_0_32px_rgba(59,111,232,0.12)] shrink-0 mx-auto md:mx-0 overflow-hidden">
              <img src="/tf.jpg" alt="Dr. Travis Fox" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <div className="text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase text-[#5b8af5] mb-2">Creator & Lead Architect</div>
              <h3 className="text-[26px] md:text-[30px] font-black mb-1 md:mb-2 text-[#eef0ff]">Dr. Travis Fox</h3>
              <div className="text-[13px] md:text-[14px] text-[#5b8af5] font-semibold mb-4 md:mb-5">PhD in Psychology · Emmy Award–Winning Producer · Clinical Hypnotherapist · NLP Master Trainer</div>
              <p className="text-[14px] md:text-[15px] text-[#7a7fa8] leading-[1.7] mb-3 md:mb-4">With over 30 years of experience guiding more than a million individuals, Dr. Travis Fox is the mastermind behind the Identity Architecture™ that powers PersonaForce®. He specializes in decoding how the human nervous system, identity, and decision-making function when placed under extreme pressure.</p>
              <p className="text-[14px] md:text-[15px] text-[#7a7fa8] leading-[1.7]">Drawing from his extensive background in psychology, he translates subconscious processing into field-usable frameworks. He doesn't just analyze behavior—he engineers the precise system architecture that allows leaders to predict, stabilize, and redirect their responses in real time.</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 mt-6">
                <div><div className="text-[24px] md:text-[28px] font-black text-[#eef0ff] leading-none">30+</div><div className="text-[11px] md:text-[12px] text-[#3a3f60] mt-1.5">Years of experience</div></div>
                <div><div className="text-[24px] md:text-[28px] font-black text-[#eef0ff] leading-none">1M+</div><div className="text-[11px] md:text-[12px] text-[#3a3f60] mt-1.5">Individuals guided</div></div>
                <div><div className="text-[24px] md:text-[28px] font-black text-[#eef0ff] leading-none">25+</div><div className="text-[11px] md:text-[12px] text-[#3a3f60] mt-1.5">Years in high-pressure fields</div></div>
              </div>
            </div>
          </div>

          <div className="bg-[#0b0d22] border border-white/[0.06] rounded-[20px] p-7 md:p-10 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-10 items-start hover:border-[#3b6fe8]/[0.32] transition-colors">
            <div className="w-24 h-24 md:w-[140px] md:h-[140px] rounded-full bg-[#161933] border-2 border-[#3b6fe8]/[0.32] flex items-center justify-center text-[32px] md:text-[48px] font-black text-[#5b8af5] shadow-[0_0_32px_rgba(59,111,232,0.12)] shrink-0 mx-auto md:mx-0 overflow-hidden">
              <img src="/mf.jpg" alt="Michelle Fox" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <div className="text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase text-[#5b8af5] mb-2">Co-Creator & Integration Lead</div>
              <h3 className="text-[26px] md:text-[30px] font-black mb-1 md:mb-2 text-[#eef0ff]">Michelle Fox</h3>
              <div className="text-[13px] md:text-[14px] text-[#5b8af5] font-semibold mb-4 md:mb-5">Somatic Hypnotherapist · Expert Trauma Navigator · Mapping Practitioner</div>
              <p className="text-[14px] md:text-[15px] text-[#7a7fa8] leading-[1.7] mb-3 md:mb-4">As the Co-Creator of PersonaForce®, Michelle Fox is the Lead Alchemist who integrates Human Identity Architecture™ into practical application. Her rare expertise in somatic and subconscious pattern work allows her to decode the quiet, dangerous state shifts that derail performance under pressure.</p>
              <p className="text-[14px] md:text-[15px] text-[#7a7fa8] leading-[1.7]">Michelle specializes in translating complex behavioral loops into clear, actionable frameworks. She trains leaders and teams to recognize subtle signs of hypervigilance and collapse—ensuring they can navigate high-stakes moments without escalating or retreating, while maintaining complete operational control.</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 mt-6">
                <div><div className="text-[24px] md:text-[28px] font-black text-[#eef0ff] leading-none">15+</div><div className="text-[11px] md:text-[12px] text-[#3a3f60] mt-1.5">Years in pattern work</div></div>
                <div><div className="text-[24px] md:text-[28px] font-black text-[#eef0ff] leading-none">200+</div><div className="text-[11px] md:text-[12px] text-[#3a3f60] mt-1.5">Organisations served</div></div>
                <div><div className="text-[24px] md:text-[28px] font-black text-[#eef0ff] leading-none">98%</div><div className="text-[11px] md:text-[12px] text-[#3a3f60] mt-1.5">Client retention rate</div></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="py-12 md:py-16 px-5 md:px-8 bg-[#0b0d22] border-y border-white/[0.06] flex flex-col items-center">
        <div className="max-w-[960px] mx-auto w-full">
          <p className="text-center text-[13px] md:text-[14px] text-[#7a7fa8] mb-8 md:mb-10 max-w-[500px] mx-auto leading-relaxed">
            Across industries, environments, and pressure levels — the results speak the same language
          </p>
          <div className="grid grid-cols-2 md:flex md:justify-center gap-2 md:gap-3">
            {[
              { num: "91%", lbl: "Leaders stable within 30 days" },
              { num: "3x", lbl: "Follow-through improvement" },
              { num: "1,000+", lbl: "Leaders mapped" },
              { num: "98%", lbl: "Client retention" }
            ].map((stat, i) => (
              <div key={i} className="py-6 px-4 md:px-8 text-center bg-[#10132b] rounded-[12px] md:flex-1 md:min-w-[180px] flex flex-col justify-center border border-white/[0.02]">
                <div className="text-[28px] md:text-[36px] font-black text-[#eef0ff] leading-tight mb-1">{stat.num}</div>
                <div className="text-[11px] md:text-[13px] text-[#7a7fa8] leading-tight px-2">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (Slider) */}
      <section className="py-16 md:py-24 px-5 md:px-8 flex flex-col items-center">
        <div className="max-w-[960px] mx-auto w-full flex flex-col items-center">
          <div className="text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase text-[#5b8af5] mb-3 text-center">In Their Words</div>
          <h2 className="text-[32px] sm:text-[38px] md:text-[46px] font-black text-center mb-10 md:mb-16 tracking-[-0.5px] leading-[1.15]">
            Identity-level change is <em className="text-[#5b8af5] not-italic block sm:inline">impossible to ignore.</em>
          </h2>

          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testi, i) => (
                <div key={i} className="w-full flex-shrink-0 px-1 md:px-2">
                  <div className="bg-[#0b0d22] border border-white/[0.06] rounded-[16px] md:rounded-[20px] p-8 md:p-14 relative flex flex-col h-full items-center text-center mx-auto max-w-[800px]">
                    <p className="text-[16px] md:text-[19px] text-[#b0b8e8] leading-[1.75] md:leading-[1.8] mb-8">
                      "{testi.quote}"
                    </p>
                    <div className="text-[12px] md:text-[13px] font-semibold text-[#7a7fa8] flex items-center gap-2 mt-auto">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b6fe8]" />
                      {testi.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-center gap-5 md:gap-6 mt-8 md:mt-10">
              <button 
                onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="p-2.5 rounded-full border border-white/[0.08] hover:bg-white/5 transition-colors text-[#7a7fa8] hover:text-white bg-[#0b0d22]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2.5">
                {testimonials.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentTestimonial === i ? 'bg-[#5b8af5] w-8' : 'bg-white/10 hover:bg-white/30 w-2'}`}
                  />
                ))}
              </div>
              <button 
                onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                className="p-2.5 rounded-full border border-white/[0.08] hover:bg-white/5 transition-colors text-[#7a7fa8] hover:text-white bg-[#0b0d22]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pt-8 pb-16 md:pb-24 px-5 md:px-8 flex flex-col items-center">
        <div className="max-w-[960px] mx-auto w-full">
          <div className="bg-[#0b0d22] border border-[#3b6fe8]/[0.32] rounded-[24px] p-8 md:p-[64px_56px] text-center shadow-[0_0_80px_rgba(59,111,232,0.08)] relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b6fe8] to-transparent" />
            
            <div className="inline-flex items-center gap-2 bg-[#3b6fe8]/[0.18] border border-[#3b6fe8]/[0.32] text-[#5b8af5] text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase py-2 px-4 md:px-5 rounded-full mb-6 md:mb-8">
              Run Your Mapping
            </div>
            
            <h2 className="text-[32px] sm:text-[38px] md:text-[46px] font-black mb-4 md:mb-6 tracking-[-0.5px] leading-[1.15] text-[#eef0ff]">
              See who you become<br className="hidden md:block"/> under pressure — <em className="text-[#5b8af5] not-italic block md:inline">before pressure decides.</em>
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#7a7fa8] max-w-[580px] mx-auto mb-8 md:mb-10 leading-[1.7]">
              In one call, you'll see the exact architecture beneath your team's performance. The identity drivers, the shadow patterns, the predictable collapse points — and a clear path to install the stability that makes performance predictable.
            </p>
            
            <ul className="list-none max-w-[460px] mx-auto mb-10 md:mb-12 text-left flex flex-col gap-3.5 w-full">
              {[
                "Full Identity Architecture™ overview for your context",
                "Shadow interference pattern identification",
                "Recommended PersonaForce® solution path",
                "No pitch. No pressure. Pure intelligence."
              ].map((feature, i) => (
                <li key={i} className="text-[14px] md:text-[15px] font-medium text-[#b0b8e8] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b6fe8] shrink-0 mt-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="bg-[#3b6fe8] hover:scale-[1.02] transition-transform duration-200 text-white py-4 md:py-5 px-8 md:px-12 rounded-[12px] text-[16px] md:text-[17px] font-bold shadow-[0_0_40px_rgba(59,111,232,0.22)] w-full sm:w-auto">
              Book My PersonaForce® Mapping Call
            </button>
            <div className="text-[12px] md:text-[13px] text-[#7a7fa8] mt-4 md:mt-5 font-medium">
              45 minutes · No cost · Limited to 6 sessions per month
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 bg-[#10132b] border border-white/[0.06] rounded-[10px] py-4 px-6 mx-auto mt-6 md:mt-8 max-w-[500px] text-[13px] md:text-sm font-semibold text-center sm:text-left text-[#eef0ff]">
            <div className="w-2 h-2 bg-[#3b6fe8] rounded-full animate-[pulse_1.5s_ease-in-out_infinite] shrink-0 hidden sm:block" />
            <p>This month: <span className="text-[#5b8af5]">6 mapping sessions remaining</span> — next availability in June</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 md:py-10 px-5 md:px-8 border-t border-white/[0.06] text-center text-[12px] md:text-[13px] text-[#7a7fa8]">
        <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 PersonaForce® — All Rights Reserved</p>
          <div className="flex justify-center gap-5 md:gap-7 flex-wrap font-medium">
            <a href="#" className="hover:text-[#eef0ff] transition-colors">Whitepaper</a>
            <a href="#" className="hover:text-[#eef0ff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#eef0ff] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#eef0ff] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
