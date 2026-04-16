import { useEffect, useRef } from "react";
import { CheckCircle2, XCircle, Zap } from "lucide-react";

const criteria = [
  { label: "Solução sob medida para o seu nicho", sinapta: true, traditional: false },
  { label: "Entrega em 15 dias úteis", sinapta: true, traditional: false },
  { label: "Ecossistema integrado (não ferramentas soltas)", sinapta: true, traditional: false },
  { label: "Automações com IA embutidas", sinapta: true, traditional: false },
  { label: "Suporte 24/7 dedicado", sinapta: true, traditional: false },
  { label: "Evolução contínua pós-lançamento", sinapta: true, traditional: false },
  { label: "Copy e estratégia de conversão inclusos", sinapta: true, traditional: false },
  { label: "Metodologia documentada e transparente", sinapta: true, traditional: false },
  { label: "Sem fidelidade ou multa de saída", sinapta: true, traditional: false },
  { label: "Dashboard de performance em tempo real", sinapta: true, traditional: false },
];

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".reveal-item");
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-[#0C1830]/30" id="comparativo">
      <div className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(27,110,243,0.05) 0%, transparent 60%)" }} />

      <div className="max-w-4xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="pill-badge bg-[#1B6EF3]/10 border border-[#1B6EF3]/20 text-[#1B6EF3] mb-5 mx-auto w-fit reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            COMPARATIVO
          </div>
          <h2
            className="font-display font-800 text-4xl sm:text-5xl leading-tight mb-5 reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Sinapta vs.{" "}
            <span className="text-[#6B8DB8]">o mercado tradicional</span>
          </h2>
          <p
            className="text-[#6B8DB8] text-lg max-w-xl mx-auto reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Veja o que você perde quando escolhe uma agência ou freelancer genérico.
          </p>
        </div>

        {/* Table */}
        <div
          className="reveal-item rounded-2xl overflow-hidden border border-white/8"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-[#070E1C] px-6 py-4 border-b border-white/5">
            <div className="text-sm text-[#6B8DB8] font-medium">Critério</div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1B6EF3]/20 to-[#F97316]/10 border border-[#1B6EF3]/30">
                <Zap size={14} className="text-[#1B6EF3]" />
                <span className="text-sm font-display font-700 text-[#1B6EF3]">Sinapta</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-sm text-[#6B8DB8] font-medium">Agência / Freelancer</span>
            </div>
          </div>

          {/* Rows */}
          {criteria.map((item, i) => (
            <div
              key={item.label}
              className={`grid grid-cols-3 px-6 py-4 items-center border-b border-white/5 last:border-0 ${
                i % 2 === 0 ? "bg-[#0C1830]" : "bg-[#070E1C]"
              } hover:bg-white/[0.02] transition-colors`}
            >
              <div className="text-[#EFF6FF] text-sm leading-relaxed pr-4">{item.label}</div>
              <div className="flex justify-center">
                {item.sinapta ? (
                  <CheckCircle2 size={20} className="text-[#F97316]" />
                ) : (
                  <XCircle size={20} className="text-[#4a5568]" />
                )}
              </div>
              <div className="flex justify-center">
                {item.traditional ? (
                  <CheckCircle2 size={20} className="text-[#F97316]" />
                ) : (
                  <XCircle size={20} className="text-[#4a5568]" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-10 reveal-item"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1B6EF3] hover:bg-[#1558C8] text-white font-semibold text-base transition-all duration-200 glow-blue-sm hover:scale-[1.02]"
          >
            Quero a vantagem Sinapta
          </a>
          <p className="text-[#6B8DB8] text-sm mt-3">Sem fidelidade. Sem surpresas.</p>
        </div>
      </div>
    </section>
  );
}
