import { useEffect, useRef } from "react";
import { Layers, Zap, Target, ShieldCheck, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Ecossistema integrado, não remendado",
    description: "Todos os módulos do seu negócio conversam entre si em tempo real. Fim do caos de dados e retrabalho.",
    color: "#1B6EF3",
  },
  {
    icon: Zap,
    title: "Automações que trabalham por você",
    description: "Operações que levavam horas passam a acontecer em segundos, sem intervenção humana, sem erro.",
    color: "#F97316",
  },
  {
    icon: Target,
    title: "Feito sob medida para o seu mercado",
    description: "Nada de adaptação genérica. Construímos para o seu nicho, com a lógica do seu negócio embutida.",
    color: "#7C3AED",
  },
  {
    icon: TrendingUp,
    title: "Escala sem aumentar a equipe",
    description: "Sua operação suporta 10x mais volume com a mesma estrutura. Margem cresce, não despesa.",
    color: "#1B6EF3",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e compliance LGPD",
    description: "Criptografia de ponta a ponta, backups automáticos e conformidade total com a legislação brasileira.",
    color: "#F97316",
  },
];

export default function SolutionSection() {
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
              }, i * 100);
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
    <section ref={sectionRef} className="py-16 lg:py-20 relative bg-[#0C1830]/40" id="solucao">
      {/* Background */}
      <div className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(249,115,22,0.04) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <div
              className="pill-badge bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] mb-5 reveal-item"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
            >
              A SOLUÇÃO
            </div>

            <h2
              className="font-display font-800 text-4xl sm:text-5xl lg:text-[3rem] leading-tight mb-6 reveal-item"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
            >
              Não é mais uma ferramenta.{" "}
              <span className="gradient-text-blue">É o seu sistema nervoso digital.</span>
            </h2>

            <p
              className="text-[#6B8DB8] text-lg leading-relaxed mb-8 reveal-item"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
            >
              A Sinapta desenvolve ecossistemas digitais completos: da estratégia ao código, com uma metodologia que integra tudo: produto, operação, dados e crescimento. Enquanto concorrentes entregam uma landing page, nós entregamos uma máquina de escala.
            </p>

            {/* Mechanism */}
            <div
              className="bg-[#070E1C] border border-white/5 rounded-2xl p-6 mb-8 reveal-item"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
            >
              <div className="text-xs uppercase tracking-widest text-[#1B6EF3] mb-3 font-semibold">
                O mecanismo único
              </div>
              <p className="text-[#EFF6FF] leading-relaxed">
                Nossa metodologia <strong className="text-[#F97316]">Ecosystem-First</strong> conecta diagnóstico, desenvolvimento e evolução contínua em ciclos de 15 dias. Você não compra um projeto: você acessa um ecossistema que evolui com o seu negócio.
              </p>
            </div>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1B6EF3] hover:bg-[#1558C8] text-white font-semibold text-base transition-all duration-200 glow-blue-sm hover:scale-[1.02] reveal-item"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
            >
              Falar com especialista
            </a>
          </div>

          {/* Right: Benefits grid */}
          <div className="grid gap-4">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="flex gap-4 items-start p-5 bg-[#070E1C] border border-white/5 rounded-xl hover:border-white/10 transition-all duration-200 reveal-item"
                style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${benefit.color}15`, border: `1px solid ${benefit.color}25` }}
                >
                  <benefit.icon size={18} style={{ color: benefit.color }} />
                </div>
                <div>
                  <h3 className="font-display font-600 text-base text-[#EFF6FF] mb-1">{benefit.title}</h3>
                  <p className="text-[#6B8DB8] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
