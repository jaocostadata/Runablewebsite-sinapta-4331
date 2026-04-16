import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Andrade",
    role: "Diretor Comercial",
    company: "TechLegal Soluções",
    avatar: "RA",
    color: "#1B6EF3",
    stars: 5,
    text: "Em pouco mais de um mês, a Sinapta automatizou todo o nosso fluxo jurídico. O que levava horas agora é feito em segundos. A eficiência operacional que ganhamos é incomparável.",
    result: "40h/mês economizadas",
  },
  {
    name: "Dra. Carla Menezes",
    role: "Gestora",
    company: "Grupo Revalida",
    avatar: "CM",
    color: "#F97316",
    stars: 5,
    text: "O nível de personalização do MedTrack superou nossas expectativas. O suporte da equipe e a clareza nos dados nos permitiram escalar sem perder a qualidade no atendimento.",
    result: "+23% de eficiência acadêmica",
  },
  {
    name: "Marcos Feliciano",
    role: "Proprietário",
    company: "Escala Digital",
    avatar: "MF",
    color: "#7C3AED",
    stars: 5,
    text: "Diferente de agências comuns, a Sinapta foca em resultados reais. As automações de ponta a ponta mudaram o jogo para nós, permitindo dobrar nossa produção com o mesmo time.",
    result: "Produção 2x maior",
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
    <section ref={sectionRef} className="py-16 lg:py-20 relative" id="depoimentos">
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
