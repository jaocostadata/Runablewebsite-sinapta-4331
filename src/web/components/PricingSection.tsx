import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Zap, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Para quem está validando",
    priceMonthly: 2490,
    priceAnnual: 1990,
    color: "#6B8DB8",
    popular: false,
    features: [
      "1 produto digital (site ou LP)",
      "Design premium + copy incluso",
      "SEO técnico básico",
      "Integração com analytics",
      "Suporte por email (72h)",
      "1 revisão mensal",
      "Hospedagem gerenciada",
      "Relatório mensal básico",
    ],
    cta: "Começar agora",
  },
  {
    name: "Growth",
    tagline: "Para quem está escalando",
    priceMonthly: 4990,
    priceAnnual: 3990,
    color: "#1B6EF3",
    popular: true,
    features: [
      "Até 3 produtos / módulos",
      "Automações com IA incluídas",
      "Integrações ilimitadas",
      "Dashboard de performance",
      "Suporte prioritário 24/7",
      "Revisões ilimitadas",
      "Hospedagem + CDN global",
      "Consultoria mensal estratégica",
    ],
    cta: "Quero crescer",
  },
  {
    name: "Orbital",
    tagline: "Para quem lidera o mercado",
    priceMonthly: 9990,
    priceAnnual: 7990,
    color: "#F97316",
    popular: false,
    features: [
      "Ecossistema digital completo",
      "SaaS sob medida (multi-tenant)",
      "IA treinada no seu negócio",
      "Time dedicado Sinapta",
      "SLA de 99.99% garantido",
      "CTO as a Service incluso",
      "White-label disponível",
      "Roadmap estratégico trimestral",
    ],
    cta: "Falar com equipe",
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
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
    <section ref={sectionRef} className="py-28 lg:py-36 relative" id="precos">
      <div className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.04) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="pill-badge bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] mb-5 mx-auto w-fit reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            PLANOS & PREÇOS
          </div>
          <h2
            className="font-display font-800 text-4xl sm:text-5xl leading-tight mb-5 reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Invista no que gera retorno{" "}
            <span className="gradient-text-blue">real</span>
          </h2>
          <p
            className="text-[#6B8DB8] text-lg max-w-2xl mx-auto mb-8 reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Sem letras miúdas. Sem cobranças surpresa. Só entrega real.
          </p>

          {/* Toggle */}
          <div
            className="inline-flex items-center gap-3 reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            <span className={`text-sm font-medium ${!annual ? "text-[#EFF6FF]" : "text-[#6B8DB8]"}`}>Mensal</span>
            <div className="toggle-switch">
              <button
                onClick={() => setAnnual(false)}
                className={`toggle-btn ${!annual ? "active" : ""}`}
              >
                Mensal
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`toggle-btn ${annual ? "active" : ""}`}
              >
                Anual
              </button>
            </div>
            <span className={`text-sm font-medium ${annual ? "text-[#EFF6FF]" : "text-[#6B8DB8]"}`}>
              Anual{" "}
              <span className="text-[#F97316] text-xs font-semibold">-20%</span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal-item relative flex flex-col ${plan.popular ? "scale-[1.03] z-10" : ""}`}
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1B6EF3] to-[#F97316] text-white text-xs font-bold shadow-lg">
                    <Star size={10} className="fill-white" />
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div
                className={`relative flex flex-col h-full rounded-2xl p-7 border ${
                  plan.popular
                    ? "bg-[#0C1830] border-[#1B6EF3]/40"
                    : "bg-[#0C1830] border-white/8"
                }`}
                style={plan.popular ? { boxShadow: "0 0 40px rgba(27,110,243,0.15)" } : {}}
              >
                {/* Plan name */}
                <div className="mb-6">
                  <div
                    className="pill-badge mb-3 w-fit text-xs"
                    style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}25`, color: plan.color }}
                  >
                    {plan.name}
                  </div>
                  <p className="text-[#6B8DB8] text-sm">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-[#6B8DB8]">R$</span>
                    <span className="font-display font-800 text-5xl text-[#EFF6FF]">
                      {annual ? plan.priceAnnual.toLocaleString("pt-BR") : plan.priceMonthly.toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <span className="text-[#6B8DB8] text-sm">/mês{annual ? " · cobrado anualmente" : ""}</span>
                  {annual && (
                    <div className="mt-1 text-xs text-[#F97316]">
                      Economia de R${((plan.priceMonthly - plan.priceAnnual) * 12).toLocaleString("pt-BR")}/ano
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: plan.color }} />
                      <span className="text-[#6B8DB8] text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contato"
                  className={`w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.02] ${
                    plan.popular
                      ? "bg-[#1B6EF3] text-white glow-blue-sm hover:bg-[#1558C8]"
                      : "border border-white/10 text-[#EFF6FF] hover:bg-white/5 hover:border-white/20"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div
          className="mt-12 text-center reveal-item"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
        >
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-[#6B8DB8]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#F97316]" />
              Sem fidelidade mínima
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#F97316]" />
              Cancele quando quiser
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#F97316]" />
              Sem multa de saída
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#F97316]" />
              Proposta personalizada disponível
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
