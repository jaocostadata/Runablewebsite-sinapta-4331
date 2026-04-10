import { useEffect, useRef } from "react";
import { FileText, GraduationCap, Bot, Globe, CheckCircle2, Network } from "lucide-react";
import OrbitalEcosystem from "./OrbitalEcosystem";

const features = [
  {
    badge: "ECOSSISTEMA DIGITAL",
    icon: Network,
    color: "#F97316",
    title: "Ecossistema Digital: tudo do seu negócio num lugar só",
    description: "Combinamos site, landing pages, automações e integração de todas as ferramentas do seu negócio numa infraestrutura conectada. Não são peças soltas: é uma máquina única que opera, cresce e aprende junto com você.",
    bullets: [
      "Site institucional + landing pages de alta conversão",
      "Automações que conectam todas as ferramentas da sua operação",
      "Dashboard centralizado com dados de todo o ecossistema",
      "Evolução contínua: o sistema cresce à medida que o negócio escala",
    ],
    visual: (
      <div className="rounded-2xl p-6 flex flex-col items-center"
        style={{ background: "rgba(12,24,48,0.8)", border: "1px solid rgba(27,110,243,0.18)", boxShadow: "0 0 60px rgba(27,110,243,0.08)" }}>
        <div className="text-xs text-[#6B8DB8] mb-4 font-semibold uppercase tracking-widest">Visão do Ecossistema</div>
        <OrbitalEcosystem />
        <div className="mt-4 text-center text-xs text-[#6B8DB8]">
          Todas as ferramentas conectadas, centralizadas, operando juntas
        </div>
      </div>
    ),
  },
  {
    badge: "LEGALTECH",
    icon: FileText,
    color: "#1B6EF3",
    title: "Contractfy: gestão de contratos com IA",
    description: "Reduza de 30 minutos para menos de 1 minuto o tempo de geração de contratos complexos. Fluxos automáticos de aprovação, assinatura digital e repositório em nuvem com acesso em qualquer dispositivo.",
    bullets: [
      "Gere minutas profissionais em segundos com IA",
      "Assinatura digital integrada e juridicamente válida",
      "Fluxo de aprovação automatizado por hierarquia",
      "Repositório seguro com busca inteligente",
    ],
    visual: (
      <div className="bg-[#070E1C] rounded-2xl p-6 border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-[#6B8DB8]">Contratos gerados hoje</span>
          <span className="text-xs text-[#1B6EF3] font-semibold">↑ 18 novos</span>
        </div>
        {["NDA, TechCorp Ltda", "Prestação de Serviços, João M.", "Parceria Comercial, Acme S.A.", "Contrato CLT, Ana Souza"].map((name, i) => (
          <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
            <div className="flex items-center gap-2.5">
              <FileText size={14} className="text-[#1B6EF3]" />
              <span className="text-xs text-[#EFF6FF]">{name}</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F97316]/10 text-[#F97316]">Assinado</span>
          </div>
        ))}
        <div className="mt-4 bg-[#0C1830] rounded-lg p-3 text-center">
          <div className="text-xl font-display font-bold text-[#1B6EF3]">01:02</div>
          <div className="text-[10px] text-[#6B8DB8]">tempo médio por contrato</div>
        </div>
      </div>
    ),
  },
  {
    badge: "EDTECH",
    icon: GraduationCap,
    color: "#F97316",
    title: "MedTrack: trilhas de aprendizado personalizadas",
    description: "Plataforma que identifica as lacunas de conhecimento de cada estudante de medicina e monta trilhas de estudo adaptativas. Seus alunos progridem mais rápido, você retém mais clientes.",
    bullets: [
      "Dashboard individual com mapa de performance",
      "Alertas automáticos de alunos em risco de abandono",
      "Trilha adaptativa por especialidade e nível",
      "Relatórios de evolução em tempo real",
    ],
    visual: (
      <div className="bg-[#070E1C] rounded-2xl p-6 border border-white/5">
        <div className="mb-4">
          <div className="text-xs text-[#6B8DB8] mb-2">Progresso: Cardiologia</div>
          <div className="w-full bg-white/5 rounded-full h-2 mb-1">
            <div className="h-2 rounded-full bg-gradient-to-r from-[#1B6EF3] to-[#F97316]" style={{ width: "73%" }} />
          </div>
          <div className="flex justify-between text-[10px] text-[#6B8DB8]"><span>73%</span><span>Meta: 100%</span></div>
        </div>
        {[
          { module: "Anatomia Cardíaca", pct: 95 },
          { module: "Eletrocardiograma", pct: 80 },
          { module: "Arritmias", pct: 45 },
          { module: "Insuficiência Cardíaca", pct: 0 },
        ].map((item) => (
          <div key={item.module} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
            <div className="flex-1">
              <div className="text-xs text-[#EFF6FF] mb-1">{item.module}</div>
              <div className="w-full bg-white/5 rounded-full h-1">
                <div className="h-1 rounded-full bg-[#F97316]" style={{ width: `${item.pct}%` }} />
              </div>
            </div>
            <span className="text-[10px] text-[#6B8DB8] shrink-0">{item.pct}%</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    badge: "IA E AUTOMAÇÃO",
    icon: Bot,
    color: "#7C3AED",
    title: "Automações com IA: elimine o trabalho invisível",
    description: "Conectamos todas as suas ferramentas e programamos fluxos inteligentes que executam sozinhos: capturas de leads, disparos, onboarding, relatórios, cobranças e muito mais.",
    bullets: [
      "Integração com +200 ferramentas sem código",
      "IA treinada na lógica do seu negócio",
      "Redução de até 80% em custo operacional",
      "Monitoramento e alertas em tempo real",
    ],
    visual: (
      <div className="bg-[#070E1C] rounded-2xl p-6 border border-white/5">
        <div className="text-xs text-[#6B8DB8] mb-4">Fluxo ativo: Onboarding de Clientes</div>
        <div className="space-y-2">
          {[
            { step: "Lead capturado no site", status: "done", time: "0s" },
            { step: "Qualificação automática via IA", status: "done", time: "1.2s" },
            { step: "CRM atualizado + tag aplicada", status: "done", time: "1.3s" },
            { step: "Email de boas-vindas enviado", status: "done", time: "2s" },
            { step: "Agendamento enviado via WhatsApp", status: "running", time: "..." },
            { step: "Notificar vendedor responsável", status: "pending", time: "-" },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                item.status === "done" ? "bg-[#F97316]/20" :
                item.status === "running" ? "bg-[#7C3AED]/20 animate-pulse" :
                "bg-white/5"
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  item.status === "done" ? "bg-[#F97316]" :
                  item.status === "running" ? "bg-[#7C3AED]" : "bg-white/20"
                }`} />
              </div>
              <span className="text-xs text-[#EFF6FF] flex-1">{item.step}</span>
              <span className="text-[10px] text-[#6B8DB8] font-mono">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    badge: "WEB E DIGITAL",
    icon: Globe,
    color: "#1B6EF3",
    title: "Sites e LPs de alta conversão",
    description: "Criamos sites institucionais e landing pages com PageSpeed 90+, SEO técnico, design premium e arquitetura de conversão. Do briefing ao ar em prazo definido, sem surpresas.",
    bullets: [
      "PageSpeed 90+ e Core Web Vitals no verde",
      "Design de alta conversão com copy incluso",
      "SEO técnico e analytics configurados",
      "100% responsivo e acessível (WCAG AA)",
    ],
    visual: (
      <div className="bg-[#070E1C] rounded-2xl overflow-hidden border border-white/5">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <div className="ml-2 bg-[#0C1830] rounded px-3 py-1 text-[10px] text-[#6B8DB8] flex-1">cliente.com.br</div>
        </div>
        <div className="p-4 space-y-2">
          <div className="bg-gradient-to-r from-[#1B6EF3]/20 to-[#F97316]/10 rounded-lg h-20 flex items-center justify-center">
            <span className="text-xs text-[#EFF6FF] font-display font-bold">Hero Section</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["#1B6EF320", "#F9731615", "#7C3AED15"].map((bg, i) => (
              <div key={i} className="h-10 rounded" style={{ background: bg }} />
            ))}
          </div>
          <div className="bg-white/5 rounded h-8" />
          <div className="flex gap-2">
            <div className="flex-1 bg-[#1B6EF3]/20 rounded-full h-6" />
            <div className="w-20 bg-white/5 rounded-full h-6" />
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="grid grid-cols-4 gap-2 text-center">
            {[{ label: "Performance", val: "98" }, { label: "SEO", val: "100" }, { label: "Acessib.", val: "97" }, { label: "Práticas", val: "96" }].map(m => (
              <div key={m.label} className="bg-[#0C1830] rounded-lg p-2">
                <div className="text-sm font-display font-bold text-[#F97316]">{m.val}</div>
                <div className="text-[9px] text-[#6B8DB8]">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll<HTMLElement>(".reveal-item");
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 lg:py-36 bg-[#0C1830]/30" id="produtos">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="pill-badge bg-[#1B6EF3]/10 border border-[#1B6EF3]/20 text-[#1B6EF3] mb-5 mx-auto w-fit reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}>
            PRODUTOS E SOLUÇÕES
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight mb-5 reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}>
            Cada produto, uma{" "}
            <span className="gradient-text-blue">solução de mercado</span>
          </h2>
          <p className="text-[#6B8DB8] text-lg max-w-2xl mx-auto reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}>
            Não entregamos software. Entregamos vantagem competitiva embutida em produto digital.
          </p>
        </div>

        {/* Features alternating */}
        <div className="space-y-24">
          {features.map((feature, i) => (
            <div
              key={feature.badge}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal-item"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className="pill-badge mb-4 w-fit"
                  style={{ background: `${feature.color}15`, border: `1px solid ${feature.color}25`, color: feature.color }}
                >
                  {feature.badge}
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#EFF6FF] mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[#6B8DB8] leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: feature.color }} />
                      <span className="text-[#EFF6FF] text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={`box-styled rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                {feature.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
