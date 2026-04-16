import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, Shield, Rocket, Globe } from "lucide-react";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const trustItems = [
    { icon: Shield, text: "Segurança total dos dados" },
    { icon: Rocket, text: "Setup em 15 dias úteis" },
    { icon: Globe, text: "Suporte 24/7" },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 relative overflow-hidden" id="contato">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(27,110,243,0.08) 0%, rgba(249,115,22,0.04) 50%, transparent 100%)" }} />
      <div className="absolute inset-0 grid-texture opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(27,110,243,0.15) 0%, transparent 70%)" }} />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-10">
        <div className="text-center mb-12">
          <div
            className="pill-badge bg-[#1B6EF3]/10 border border-[#1B6EF3]/20 text-[#1B6EF3] mb-5 mx-auto w-fit reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            PRONTO PARA ESCALAR?
          </div>
          <h2
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5 reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Seu ecossistema digital{" "}
            <span className="gradient-text-blue">começa agora.</span>
          </h2>
          <p
            className="text-[#6B8DB8] text-lg max-w-2xl mx-auto reveal-item"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
          >
            Fale com um especialista, receba seu diagnóstico gratuito e entenda exatamente o que pode ser construído para o seu negócio, sem compromisso.
          </p>
        </div>

        {/* Form */}
        <div
          className="max-w-2xl mx-auto reveal-item"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="gradient-border">
              <div className="bg-[#0C1830] rounded-2xl p-8">
                {/* Row 1: nome + email */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-[#6B8DB8] mb-1.5 font-medium uppercase tracking-wide">
                      Seu nome <span className="text-[#FF6B6B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="João Silva"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#070E1C] border border-white/8 rounded-xl px-4 py-3 text-[#EFF6FF] placeholder-[#4a5568] text-sm focus:outline-none focus:border-[#1B6EF3]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#6B8DB8] mb-1.5 font-medium uppercase tracking-wide">
                      Email <span className="text-[#FF6B6B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="joao@empresa.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#070E1C] border border-white/8 rounded-xl px-4 py-3 text-[#EFF6FF] placeholder-[#4a5568] text-sm focus:outline-none focus:border-[#1B6EF3]/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: phone + produto */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-[#6B8DB8] mb-1.5 font-medium uppercase tracking-wide">
                      WhatsApp / Telefone <span className="text-[#FF6B6B]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#070E1C] border border-white/8 rounded-xl px-4 py-3 text-[#EFF6FF] placeholder-[#4a5568] text-sm focus:outline-none focus:border-[#1B6EF3]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#6B8DB8] mb-1.5 font-medium uppercase tracking-wide">
                      Qual solução te interessa? <span className="text-[#FF6B6B]">*</span>
                    </label>
                    <select
                      value={form.product}
                      onChange={(e) => setForm({ ...form, product: e.target.value })}
                      required
                      className="w-full bg-[#070E1C] border border-white/8 rounded-xl px-4 py-3 text-[#EFF6FF] text-sm focus:outline-none focus:border-[#1B6EF3]/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Selecione...</option>
                      <option value="ecossistema">Ecossistema Digital Completo</option>
                      <option value="contractfy">Contractfy: Gestão de Contratos</option>
                      <option value="medtrack">MedTrack: Plataforma Educacional</option>
                      <option value="site">Site ou Landing Page</option>
                      <option value="automacoes">Automações com IA</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: mensagem opcional */}
                <div className="mb-6">
                  <label className="block text-xs text-[#6B8DB8] mb-1.5 font-medium uppercase tracking-wide">
                    Mensagem <span className="text-[#4a5568] normal-case">(opcional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte brevemente sobre o seu negócio ou a dor que quer resolver..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#070E1C] border border-white/8 rounded-xl px-4 py-3 text-[#EFF6FF] placeholder-[#4a5568] text-sm focus:outline-none focus:border-[#1B6EF3]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#1B6EF3] hover:bg-[#1558C8] text-white font-semibold text-base transition-all duration-200 glow-blue-sm hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar proposta
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#6B8DB8] mt-4">
                  Ao enviar, você concorda com nossa{" "}
                  <a href="#" className="text-[#1B6EF3] hover:underline">Política de Privacidade (LGPD)</a>.
                  Respondemos em até 24h.
                </p>
              </div>
            </form>
          ) : (
            <div className="gradient-border">
              <div className="bg-[#0C1830] rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#F97316]/20 border border-[#F97316]/30 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} className="text-[#F97316]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#EFF6FF] mb-3">
                  Proposta recebida!
                </h3>
                <p className="text-[#6B8DB8]">
                  Nossa equipe vai entrar em contato com{" "}
                  <span className="text-[#EFF6FF]">{form.email}</span>{" "}
                  e{" "}
                  <span className="text-[#EFF6FF]">{form.phone}</span>{" "}
                  em até 24 horas com um diagnóstico personalizado para o seu negócio.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Trust badges */}
        <div
          className="flex flex-wrap justify-center gap-6 mt-10 reveal-item"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}
        >
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-[#6B8DB8] text-sm">
              <item.icon size={14} className="text-[#F97316]" />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
