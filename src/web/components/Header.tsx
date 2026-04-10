import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Produtos", href: "#produtos" },
  { label: "Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

// S logo mark matching brand identity gradient
function SLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1B6EF3" />
          <stop offset="50%"  stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <path
        d="M22 6H13C10.24 6 8 8.24 8 11C8 13.76 10.24 16 13 16H19C21.76 16 24 18.24 24 21C24 23.76 21.76 26 19 26H10"
        stroke="url(#logoGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="8"  cy="11" r="2" fill="url(#logoGrad)" />
      <circle cx="24" cy="21" r="2" fill="url(#logoGrad)" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(7,14,28,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(27,110,243,0.12)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <SLogo size={30} />
            <span
              className="font-display font-extrabold text-lg tracking-wider"
              style={{
                background: "linear-gradient(135deg, #EFF6FF 0%, #93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SINAPTA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#6B8DB8] hover:text-[#EFF6FF] text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#1B6EF3] to-[#F97316] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contato"
              className="px-5 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.03] glow-blue-sm"
              style={{ background: "linear-gradient(135deg, #1B6EF3, #7C3AED)" }}
            >
              Falar com Especialista
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#EFF6FF]"
            aria-label="Menu"
          >
            <Menu size={22} className={menuOpen ? "hidden" : "block"} />
            <X size={22} className={menuOpen ? "block" : "hidden"} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""} flex flex-col`}>
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <SLogo size={28} />
            <span className="font-display font-extrabold text-lg tracking-wider text-[#EFF6FF]">SINAPTA</span>
          </div>
          <button onClick={() => setMenuOpen(false)} className="text-[#EFF6FF]">
            <X size={22} />
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center px-8 gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-display font-bold text-[#EFF6FF] hover:text-[#1B6EF3] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="px-8 pb-10">
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center py-4 rounded-full text-white font-semibold text-lg glow-blue-sm"
            style={{ background: "linear-gradient(135deg, #1B6EF3, #7C3AED)" }}
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </>
  );
}
