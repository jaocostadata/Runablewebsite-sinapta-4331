import { useRef, useEffect } from "react";
import { ArrowRight, Star, ChevronDown, Wifi, Clock } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll<HTMLElement>(".anim-in");
    els?.forEach((el, i) => {
      el.style.animationDelay = `${0.1 + i * 0.15}s`;
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden grid-texture"
    >
      {/* BG orbs */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] hero-orb-blue rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] hero-orb-orange rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            {/* Pre-title */}
            <div className="anim-in pill-badge bg-[#1B6EF3]/10 border border-[#1B6EF3]/20 text-[#1B6EF3] w-fit" style={{ opacity: 0, animation: "fadeInUp 0.6s ease forwards" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B6EF3] animate-pulse" />
              ECOSSISTEMA DIGITAL COMPLETO
            </div>

            {/* Headline — overflow visible to avoid g clipping */}
            <h1
              className="anim-in font-display font-extrabold leading-[1.08] tracking-tight"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                overflowY: "visible",
                paddingBottom: "0.1em",
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
              }}
            >
              Tecnologia que{" "}
              <span className="gradient-text-blue">escala</span>{" "}
              o seu negócio.
            </h1>

            {/* Sub */}
            <p className="anim-in text-[#6B8DB8] text-lg leading-relaxed max-w-xl" style={{ opacity: 0, animation: "fadeInUp 0.6s ease forwards" }}>
              Desenvolvemos SaaS, automações e ecossistemas digitais de alta performance para empreendedores com problema real, margem sólida e ambição de escala. Do zero ao orbital.
            </p>

            {/* CTA — apenas primário */}
            <div className="anim-in" style={{ opacity: 0, animation: "fadeInUp 0.6s ease forwards" }}>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1B6EF3] to-[#7C3AED] hover:opacity-90 text-white font-semibold text-base transition-all duration-200 glow-blue-sm hover:scale-[1.02] group"
              >
                Quero meu ecossistema
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social proof */}
            <div className="anim-in flex flex-wrap items-center gap-5 pt-2" style={{ opacity: 0, animation: "fadeInUp 0.6s ease forwards" }}>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#FFB800] fill-[#FFB800]" />
                ))}
                <span className="text-sm text-[#6B8DB8] ml-1">5.0 / 20+ clientes</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["#1B6EF3", "#F97316", "#7C3AED", "#FF6B6B"].map((color, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#070E1C]"
                      style={{ background: `${color}30`, borderColor: "#070E1C", boxShadow: `0 0 0 1px ${color}40` }}
                    />
                  ))}
                </div>
                <span className="text-sm text-[#6B8DB8]">Confiado por +50 projetos</span>
              </div>
            </div>
          </div>

          {/* RIGHT: vídeo + cards */}
          <div className="relative hidden lg:flex flex-col items-center gap-5 anim-in" style={{ opacity: 0, animation: "fadeInRight 0.8s ease forwards" }}>
            {/* Video */}
            <div className="gradient-border w-full max-w-lg">
              <div className="bg-[#0C1830] rounded-2xl overflow-hidden">
                {/* Window bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-[#070E1C]">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-xs text-[#6B8DB8] font-mono">sinapta.dashboard</span>
                </div>
                <video
                  src="/dashboard-hero.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full block"
                  style={{ display: "block" }}
                />
              </div>
            </div>

            {/* Floating cards abaixo do vídeo */}
            <div className="flex gap-4 w-full max-w-lg">
              <div className="flex-1 bg-[#0C1830] rounded-xl px-5 py-4 border border-white/10 shadow-xl flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] animate-pulse shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-[#EFF6FF]">Sistema Online</div>
                  <div className="text-xs text-[#6B8DB8]">99.99% uptime</div>
                </div>
              </div>
              <div className="flex-1 bg-[#0C1830] rounded-xl px-5 py-4 border border-white/10 shadow-xl flex items-center gap-3">
                <Clock size={16} className="text-[#F97316] shrink-0" />
                <div>
                  <div className="text-xs text-[#6B8DB8]">Tempo de setup</div>
                  <div className="text-lg font-display font-800 text-[#F97316]">15 dias</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar — melhorado */}
        <div className="mt-20 anim-in" style={{ opacity: 0, animation: "fadeInUp 0.6s ease forwards" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "50+", label: "Projetos Entregues", color: "#1B6EF3" },
              { value: "20+", label: "Clientes Satisfeitos", color: "#F97316" },
              { value: "10+", label: "Segmentos Atendidos", color: "#7C3AED" },
              { value: "99.99%", label: "Uptime Garantido", color: "#1B6EF3" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-7 px-4 rounded-2xl border border-white/8 bg-[#0C1830] shadow-lg card-hover"
                style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.3)` }}
              >
                <div
                  className="font-display font-extrabold text-3xl sm:text-4xl mb-1"
                  style={{ background: `linear-gradient(135deg, ${stat.color}, #F97316)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  {stat.value}
                </div>
                <div className="text-[#6B8DB8] text-xs sm:text-sm text-center leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-[#6B8DB8] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="text-[#6B8DB8] animate-bounce" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(32px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
