import { FaYoutube, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

// S logo mark matching brand identity gradient (same as Header)
function SLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1B6EF3" />
          <stop offset="50%"  stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <path
        d="M22 6H13C10.24 6 8 8.24 8 11C8 13.76 10.24 16 13 16H19C21.76 16 24 18.24 24 21C24 23.76 21.76 26 19 26H10"
        stroke="url(#footerLogoGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="8"  cy="11" r="2" fill="url(#footerLogoGrad)" />
      <circle cx="24" cy="21" r="2" fill="url(#footerLogoGrad)" />
    </svg>
  );
}

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
    { label: "Blog", href: "#" },
  ],
  Recursos: [
    { label: "Cases de Sucesso", href: "#depoimentos" },
    { label: "Comparativo", href: "#comparativo" },
    { label: "FAQ", href: "#faq" },
  ],
  Legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070E1C]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-10">
        {/* Top: Brand + Links */}
        <div className="grid lg:grid-cols-5 gap-8 mb-8">
          {/* Brand + Contact + Social */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-3">
              <SLogo size={28} />
              <span className="font-display font-800 text-lg text-[#EFF6FF]">SINAPTA</span>
            </a>
            <p className="text-[#6B8DB8] text-xs leading-relaxed mb-4">
              Ecossistemas digitais de alta performance para líderes de mercado.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2 mb-4">
              <a
                href="mailto:SINAPTA@gmail.com"
                className="flex items-center gap-2 text-[#6B8DB8] hover:text-[#1B6EF3] text-xs transition-colors"
              >
                <Mail size={12} />
                SINAPTA@gmail.com
              </a>
              <a
                href="tel:+5583998229653"
                className="flex items-center gap-2 text-[#6B8DB8] hover:text-[#1B6EF3] text-xs transition-colors"
              >
                <Phone size={12} />
                (83) 99822-9653
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                { icon: FaYoutube, href: "#", color: "#FF0000" },
                { icon: FaWhatsapp, href: "https://wa.me/5583998229653", color: "#25D366" },
                { icon: FaInstagram, href: "#", color: "#E4405F" },
                { icon: FaLinkedinIn, href: "#", color: "#0077B5" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 flex items-center justify-center text-[#6B8DB8] transition-all duration-200"
                  style={{ color: "var(--color-brand-muted)" }}
                  onMouseEnter={e => e.currentTarget.style.color = social.color}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--color-brand-muted)"}
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-display font-700 text-xs text-[#EFF6FF] mb-3 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[#6B8DB8] hover:text-[#EFF6FF] text-xs transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar — copyright centered */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-center relative">
          <p className="text-[#6B8DB8] text-xs text-center">
            © 2025 Sinapta. Todos os direitos reservados.
          </p>
          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-0 w-8 h-8 rounded-lg bg-white/5 hover:bg-[#1B6EF3]/20 border border-white/5 hover:border-[#1B6EF3]/30 flex items-center justify-center text-[#6B8DB8] hover:text-[#1B6EF3] transition-all duration-200"
            aria-label="Voltar ao topo"
          >
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
