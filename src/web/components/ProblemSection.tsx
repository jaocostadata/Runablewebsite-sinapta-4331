import { useEffect, useRef } from "react";
import { AlertTriangle, Clock, TrendingDown, Puzzle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Processos manuais que consomem horas",
    description: "Sua equipe gasta mais de 60% do tempo em tarefas repetitivas que poderiam ser automatizadas. Isso é dinheiro e talento desperdiçados todo santo dia.",
    color: "#FF6B6B",
  },
  {
    icon: Puzzle,
    title: "Ferramentas que não conversam entre si",
    description: "CRM aqui, financeiro ali, atendimento em outro sistema. Dados fragmentados, retrabalho constante e decisões baseadas em achismo.",
    color: "#FFB800",
  },
  {
    icon: TrendingDown,
    title: "Escalar custa absurdo ou trava tudo",
    description: "Cada novo cliente exige mais pessoas. Sua operação não foi feita para crescer sem travar. A margem sangra enquanto a equipe sufoca.",
    color: "#FF6B6B",
  },
  {
    icon: AlertTriangle,
    title: "Soluções genéricas que não resolvem",
    description: "Você já tentou 3, 4 ferramentas do mercado. Cada uma resolve 30% do problema e cria 2 novos. Nada foi feito para o seu contexto específico.",
    color: "#FFB800",
  },
];

export default function ProblemSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 relative" id="problema">
      <div className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at top, rgba(255,107,107,0.04) 0%, transparent 60%)" }} />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Label */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}>
          <div className="pill-badge bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 text-[#FF6B6B] mb-5">
            O PROBLEMA
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-4">
          <h2
            className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.25rem] leading-tight reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Você tem o produto.{" "}
            <span className="text-[#6B8DB8]">O mercado existe.</span>{" "}
            Mas a operação{" "}
            <span className="gradient-text-blue">trava tudo.</span>
          </h2>
        </div>

        <p
          className="text-[#6B8DB8] text-lg max-w-2xl mb-16 reveal-item"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
        >
          Empreendedores com potencial real de escala perdem competitividade não por falta de ideia, mas por falta de infraestrutura digital adequada.
        </p>

        {/* Problem Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className="reveal-item box-styled rounded-2xl"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
            >
              <div className="bg-[#0C1830] rounded-2xl p-7 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${problem.color}15`, border: `1px solid ${problem.color}25` }}
                >
                  <problem.icon size={22} style={{ color: problem.color }} />
                </div>
                <h3 className="font-display font-700 text-xl text-[#EFF6FF] mb-3">{problem.title}</h3>
                <p className="text-[#6B8DB8] leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition phrase */}
        <div
          className="mt-16 text-center reveal-item"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
        >
          <div className="inline-flex items-center gap-3 text-[#EFF6FF] text-xl font-display font-600">
            <div className="section-divider" />
            Existe uma forma melhor de fazer isso.
            <div className="section-divider" />
          </div>
        </div>
      </div>
    </section>
  );
}
