import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo leva para meu projeto ficar no ar?",
    a: "Projetos de sites e landing pages ficam no ar em até 15 dias úteis. Sistemas mais complexos como SaaS ou automações completas variam de 30 a 90 dias, dependendo do escopo. Você recebe um cronograma detalhado na fase de estratégia, com marcos semanais.",
  },
  {
    q: "Preciso ter ideia técnica para contratar a Sinapta?",
    a: "Não. A maioria dos nossos clientes vem com um problema de negócio, não com uma especificação técnica. Nossa função é traduzir sua dor em solução digital. Você traz o contexto do mercado; nós trazemos a engenharia.",
  },
  {
    q: "O que diferencia a Sinapta de uma agência comum?",
    a: "Agências entregam artefatos (sites, peças, posts). A Sinapta entrega resultados mensuráveis. Nosso modelo é baseado em metodologia Ecosystem-First: entendemos seu negócio como um todo e construímos soluções que se conectam, evoluem e escalam, não projetos isolados que ficam parados.",
  },
  {
    q: "Posso contratar apenas um produto, como um site?",
    a: "Sim. Você pode contratar a Sinapta para um projeto específico (site, LP, automação) e depois expandir conforme a confiança é construída. Muitos clientes começam assim e terminam com um ecossistema completo.",
  },
  {
    q: "Meus dados ficam seguros? Como é tratada a LGPD?",
    a: "Todos os sistemas utilizam criptografia de ponta a ponta, controle de acesso por papel, logs auditáveis e backups automáticos. Implementamos o framework completo de conformidade LGPD em todos os projetos que envolvem dados pessoais.",
  },
  {
    q: "O que acontece após o lançamento?",
    a: "Você não fica sozinho. Nosso plano inclui monitoramento ativo no primeiro mês pós-lançamento, correção de bugs sem custo adicional e uma sessão mensal de consultoria para analisar dados e definir próximas iterações.",
  },
  {
    q: "Posso cancelar meu plano a qualquer momento?",
    a: "Sim. Não existe fidelidade mínima nem multa de saída. Se você não estiver satisfeito com os resultados, pode encerrar o contrato com 30 dias de aviso prévio. O que você construiu continua sendo seu, sem restrições.",
  },
  {
    q: "Vocês atendem empresas de todos os tamanhos?",
    a: "Nossa especialidade são empreendedores e PMEs com produto validado, margem sólida e potencial real de escala. Não atendemos startups sem receita ou projetos puramente experimentais: nossa metodologia só gera ROI onde já existe tração.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
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
              }, i * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-[#0C1830]/30" id="faq">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="pill-badge bg-[#1B6EF3]/10 border border-[#1B6EF3]/20 text-[#1B6EF3] mb-5 mx-auto w-fit reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            FAQ
          </div>
          <h2
            className="font-display font-800 text-4xl sm:text-5xl leading-tight mb-5 reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Perguntas que você{" "}
            <span className="gradient-text-blue">vai fazer mesmo</span>
          </h2>
          <p
            className="text-[#6B8DB8] text-lg max-w-xl mx-auto reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Respondemos aqui para não perder o seu tempo: e o nosso.
          </p>
        </div>

        {/* Two-column accordion */}
        <div className="grid lg:grid-cols-2 gap-5">
          {[col1, col2].map((col, ci) => (
            <div key={ci} className="space-y-3">
              {col.map((faq, i) => {
                const idx = ci * half + i;
                return (
                  <div
                    key={faq.q}
                    className="reveal-item border border-white/5 rounded-xl overflow-hidden bg-[#070E1C] hover:border-white/10 transition-colors"
                    style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
                  >
                    <button
                      onClick={() => setOpen(open === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left gap-4"
                    >
                      <span className="font-display font-600 text-[#EFF6FF] text-sm leading-snug">{faq.q}</span>
                      <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        open === idx ? "bg-[#1B6EF3]/20" : "bg-white/5"
                      }`}>
                        {open === idx ? (
                          <Minus size={12} className="text-[#1B6EF3]" />
                        ) : (
                          <Plus size={12} className="text-[#6B8DB8]" />
                        )}
                      </div>
                    </button>
                    <div
                      className="accordion-content"
                      style={open === idx ? { maxHeight: "400px" } : { maxHeight: 0 }}
                    >
                      <div className="px-5 pb-5">
                        <div className="border-t border-white/5 pt-4">
                          <p className="text-[#6B8DB8] text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div
          className="mt-12 text-center reveal-item"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
        >
          <p className="text-[#6B8DB8] text-sm">
            Tem outra dúvida?{" "}
            <a href="mailto:SINAPTA@gmail.com" className="text-[#1B6EF3] hover:underline">
              Fale diretamente com a equipe
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
