import { useEffect, useRef } from "react";
import { Search, Map, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostique seu negócio",
    description: "Mapeamos seus processos, gargalos, dados e objetivos em uma sessão estratégica profunda. Saímos com clareza total do que precisa ser construído.",
    tag: "DIAGNÓSTICO",
    color: "#1B6EF3",
  },
  {
    number: "02",
    icon: Map,
    title: "Receba sua estratégia digital",
    description: "Entregamos o blueprint completo: escopo, cronograma, indicadores e a arquitetura técnica da solução. Sem surpresas, sem achismos.",
    tag: "ESTRATÉGIA",
    color: "#F97316",
  },
  {
    number: "03",
    icon: Code2,
    title: "Construção com validação contínua",
    description: "Desenvolvemos com metodologia ágil em ciclos de 2 semanas. Você valida cada entrega e o produto evolui em tempo real com seu feedback.",
    tag: "DESENVOLVIMENTO",
    color: "#7C3AED",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lance e escale com segurança",
    description: "Deploy com zero downtime, suporte no primeiro mês e dashboard de métricas para acompanhar cada resultado desde o dia 1.",
    tag: "LANÇAMENTO",
    color: "#1B6EF3",
  },
];

export default function HowItWorks() {
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
              }, i * 120);
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
    <section ref={sectionRef} className="py-28 lg:py-36 relative" id="processo">
      <div className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at center, rgba(27,110,243,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="pill-badge bg-[#1B6EF3]/10 border border-[#1B6EF3]/20 text-[#1B6EF3] mb-5 mx-auto w-fit reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            COMO FUNCIONA
          </div>
          <h2
            className="font-display font-800 text-4xl sm:text-5xl leading-tight mb-5 reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            De ideia a ecossistema em{" "}
            <span className="gradient-text-blue">4 etapas</span>
          </h2>
          <p
            className="text-[#6B8DB8] text-lg max-w-2xl mx-auto reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Um processo obsessivamente estruturado para que você saiba exatamente onde está e para onde está indo, em cada semana do projeto.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative reveal-item"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(100%-8px)] w-[calc(100%-16px+24px)] h-px z-10"
                  style={{ background: "linear-gradient(90deg, rgba(27,110,243,0.3), rgba(249,115,22,0.1))" }}
                />
              )}

              <div className="box-styled rounded-2xl h-full">
                <div className="bg-[#0C1830] rounded-2xl p-6 h-full">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center relative z-10"
                        style={{ background: `${step.color}20`, border: `1px solid ${step.color}30` }}
                      >
                        <step.icon size={20} style={{ color: step.color }} />
                      </div>
                    </div>
                    <span
                      className="font-display font-800 text-3xl opacity-20"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div
                    className="pill-badge mb-3 w-fit text-[10px]"
                    style={{ background: `${step.color}10`, border: `1px solid ${step.color}20`, color: step.color }}
                  >
                    {step.tag}
                  </div>

                  <h3 className="font-display font-700 text-lg text-[#EFF6FF] mb-3">{step.title}</h3>
                  <p className="text-[#6B8DB8] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className="mt-16 text-center p-8 bg-[#0C1830] border border-white/5 rounded-2xl reveal-item"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
        >
          <p className="text-[#EFF6FF] text-lg font-display font-600">
            Tempo médio de setup:{" "}
            <span className="gradient-text-blue">15 dias úteis</span>
            {" "}do briefing ao ar.
          </p>
          <p className="text-[#6B8DB8] text-sm mt-2">
            Enquanto a concorrência ainda está "alinhando expectativas", você já está vendendo.
          </p>
        </div>
      </div>
    </section>
  );
}
