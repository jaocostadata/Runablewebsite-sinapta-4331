import { Zap, Mail, Phone, Share2, MessageCircle, GitBranch, ArrowUpRight } from "lucide-react";

const links = {
  Produtos: [
    { label: "Contractfy", href: "#produtos" },
    { label: "MedTrack", href: "#produtos" },
    { label: "Sites & Apps", href: "#produtos" },
    { label: "Automações com IA", href: "#produtos" },
  ],
  Empresa: [
    { label: "Sobre Nós", href: "#" },
    { label: "Metodologia", href: "#processo" },
    { label: "Carreiras", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Recursos: [
    { label: "Cases de Sucesso", href: "#depoimentos" },
    { label: "Comparativo", href: "#comparativo" },
    { label: "Preços", href: "#precos" },
    { label: "FAQ", href: "#faq" },
  ],
  Legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Segurança", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070E1C]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1B6EF3] to-[#F97316] flex items-center justify-center">
                <Zap size={16} className="text-white fill-white" />
              </div>
              <span className="font-display font-800 text-lg text-[#EFF6FF]">SINAPTA</span>
            </a>
            <p className="text-[#6B8DB8] text-sm leading-relaxed mb-6">
              Ecossistemas digitais de alta performance para líderes de mercado.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Share2, href: "#" },
                { icon: MessageCircle, href: "#" },
                { icon: GitBranch, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1B6EF3]/20 border border-white/5 hover:border-[#1B6EF3]/30 flex items-center justify-center text-[#6B8DB8] hover:text-[#1B6EF3] transition-all duration-200"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-display font-700 text-sm text-[#EFF6FF] mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[#6B8DB8] hover:text-[#EFF6FF] text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="flex flex-wrap gap-4 mb-10 py-6 border-y border-white/5">
          <a
            href="mailto:SINAPTA@gmail.com"
            className="flex items-center gap-2 text-[#6B8DB8] hover:text-[#1B6EF3] text-sm transition-colors"
          >
            <Mail size={14} />
            SINAPTA@gmail.com
          </a>
          <a
            href="tel:+5583998229653"
            className="flex items-center gap-2 text-[#6B8DB8] hover:text-[#1B6EF3] text-sm transition-colors"
          >
            <Phone size={14} />
            (83) 99822-9653
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B8DB8] text-xs">
            © 2025 Sinapta. Todos os direitos reservados.
          </p>
          <p className="text-[#4a5568] text-xs font-mono tracking-wider">
            CRAFTED WITH PRECISION BY SINAPTA ENGINEERING
          </p>
          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1B6EF3]/20 border border-white/5 hover:border-[#1B6EF3]/30 flex items-center justify-center text-[#6B8DB8] hover:text-[#1B6EF3] transition-all duration-200"
            aria-label="Voltar ao topo"
          >
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
