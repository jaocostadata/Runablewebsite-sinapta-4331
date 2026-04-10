import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Andrade",
    role: "CEO",
    company: "TechLegal Soluções",
    avatar: "RA",
    color: "#1B6EF3",
    stars: 5,
    text: "Em 3 semanas o Contractfy estava no ar e já economizamos mais de 40 horas mensais de trabalho jurídico. O processo que levava 30 minutos hoje leva menos de 1 minuto. ROI imediato.",
    result: "40h/mês economizadas",
  },
  {
    name: "Dra. Carla Menezes",
    role: "Diretora Acadêmica",
    company: "Revalida Pro",
    avatar: "CM",
    color: "#F97316",
    stars: 5,
    text: "O MedTrack transformou como acompanhamos nossos alunos. Retivemos 23% mais estudantes no semestre seguinte ao lançamento. A trilha personalizada fez toda a diferença.",
    result: "+23% retenção de alunos",
  },
  {
    name: "Marcos Feliciano",
    role: "Fundador",
    company: "Escala Digital",
    avatar: "MF",
    color: "#7C3AED",
    stars: 5,
    text: "Tentei 4 agências antes da Sinapta. A diferença é absurda: eles entenderam o negócio de verdade. As automações eliminaram 3 funcionários de tarefas operacionais e dobraram nossa capacidade.",
    result: "Operação 2x maior, mesmo time",
  },
  {
    name: "Juliana Costa",
    role: "COO",
    company: "Nexum Saúde",
    avatar: "JC",
    color: "#1B6EF3",
    stars: 5,
    text: "Contratamos para um site mas o que recebemos foi uma parceria estratégica. O PageSpeed de 97 e o aumento de 312% em leads orgânicos nos primeiros 4 meses falam por si.",
    result: "+312% em leads orgânicos",
  },
  {
    name: "Pedro Valentim",
    role: "Sócio",
    company: "Valentim & Associados",
    avatar: "PV",
    color: "#F97316",
    stars: 5,
    text: "Nossa secretaria estava afogada em contratos. Com o Contractfy, o cliente assina de onde estiver, no celular, em segundos. Aumentamos 40% a velocidade de fechamento.",
    result: "+40% velocidade de fechamento",
  },
  {
    name: "Fernanda Lima",
    role: "Head de Marketing",
    company: "Orbita E-commerce",
    avatar: "FL",
    color: "#7C3AED",
    stars: 5,
    text: "As automações de marketing que a Sinapta implementou geraram R$280k em receita atribuída no primeiro trimestre. É como ter uma equipe de 10 pessoas rodando 24/7 sem pagar por isso.",
    result: "R$280k em receita atribuída",
  },
];

const stats = [
  { value: "2.000+", label: "Horas automatizadas" },
  { value: "312%", label: "Média de crescimento em leads" },
  { value: "4.9/5", label: "Avaliação média" },
  { value: "100%", label: "Clientes recomendam" },
];

export default function TestimonialsSection() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 lg:py-36 relative" id="depoimentos">
      <div className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at top left, rgba(249,115,22,0.04) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div
            className="pill-badge bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] mb-5 mx-auto w-fit reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            PROVA SOCIAL
          </div>
          <h2
            className="font-display font-800 text-4xl sm:text-5xl leading-tight mb-5 reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Resultados que{" "}
            <span className="gradient-text-blue">falam por si</span>
          </h2>
          <p
            className="text-[#6B8DB8] text-lg max-w-2xl mx-auto reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Não pedimos que você confie em nós. Pedimos que você leia o que quem confiou tem a dizer.
          </p>
        </div>

        {/* Impact stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 reveal-item"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-5 bg-[#0C1830] border border-white/5 rounded-xl">
              <div className="stat-number text-3xl font-display mb-1">{stat.value}</div>
              <div className="text-[#6B8DB8] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal-item box-styled rounded-2xl"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
            >
              <div className="bg-[#0C1830] rounded-2xl p-6 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={14} className="text-[#FFB800] fill-[#FFB800]" />
                  ))}
                </div>

                {/* Quote */}
                <Quote size={20} className="mb-3 opacity-30" style={{ color: t.color }} />
                <p className="text-[#6B8DB8] text-sm leading-relaxed flex-1 mb-4">
                  "{t.text}"
                </p>

                {/* Result badge */}
                <div
                  className="pill-badge mb-5 w-fit text-xs"
                  style={{ background: `${t.color}15`, border: `1px solid ${t.color}25`, color: t.color }}
                >
                  {t.result}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-display font-700"
                    style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}30` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#EFF6FF]">{t.name}</div>
                    <div className="text-xs text-[#6B8DB8]">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
