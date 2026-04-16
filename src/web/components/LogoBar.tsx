export default function LogoBar() {
  const items = [
    // Empresas
    "Google Cloud", "AWS Partner", "Stripe", "OpenAI", "Hotmart",
    // Produtos
    "Contractfy", "MedTrack", "Sinapta Sales", "Sinapta Connect",
    // Projetos
    "CRM Inteligente", "Hub de Automação", "Cloud Bridge", "AI Assistant",
    // Duplicate for infinite loop
    "Google Cloud", "AWS Partner", "Stripe", "OpenAI", "Hotmart",
    "Contractfy", "MedTrack", "Sinapta Sales", "Sinapta Connect",
    "CRM Inteligente", "Hub de Automação", "Cloud Bridge", "AI Assistant",
  ];

  return (
    <section className="py-14 border-y border-white/5 bg-[#0C1830]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 mb-8 text-center">
        <p className="text-[#6B8DB8] text-sm uppercase tracking-widest font-medium">
          Tecnologia integrada com as melhores plataformas do mundo
        </p>
      </div>
      <div className="relative">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0C1830, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0C1830, transparent)" }} />
        <div className="ticker-track">
          {items.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 mx-3 py-3 rounded-xl min-w-[160px] h-12 transition-all duration-200 cursor-default"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(27,110,243,0.3)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(27,110,243,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.2)";
              }}
            >
              <span className="text-[#6B8DB8] text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-wider">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
