import { useEffect, useRef } from "react";

interface OrbNode {
  label: string;
  icon: string;
  color: string;
  bg: string;
  ring: string;
  angle: number;   // starting angle offset (deg)
  radius: number;  // orbit radius px
  duration: number; // animation duration s
  reverse?: boolean;
}

const nodes: OrbNode[] = [
  { label: "Site",         icon: "🌐", color: "#60A5FA", bg: "rgba(96,165,250,0.12)",  ring: "rgba(96,165,250,0.3)",  angle: 0,   radius: 120, duration: 12 },
  { label: "Landing Page", icon: "📄", color: "#F97316", bg: "rgba(249,115,22,0.12)",  ring: "rgba(249,115,22,0.3)",  angle: 72,  radius: 120, duration: 12 },
  { label: "Automações",   icon: "⚡", color: "#A78BFA", bg: "rgba(167,139,250,0.12)", ring: "rgba(167,139,250,0.3)", angle: 144, radius: 120, duration: 12 },
  { label: "Analytics",    icon: "📊", color: "#34D399", bg: "rgba(52,211,153,0.12)",  ring: "rgba(52,211,153,0.3)",  angle: 216, radius: 120, duration: 12 },
  { label: "CRM",          icon: "🔗", color: "#F472B6", bg: "rgba(244,114,182,0.12)", ring: "rgba(244,114,182,0.3)", angle: 288, radius: 120, duration: 12 },
];

export default function OrbitalEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>

      {/* Outer ring (decorative, rotates) */}
      <div className="absolute rounded-full pointer-events-none"
        style={{
          width: 280, height: 280,
          border: "1px dashed rgba(27,110,243,0.12)",
          animation: "rotateBelt 40s linear infinite",
        }}
      />
      {/* Inner ring */}
      <div className="absolute rounded-full pointer-events-none"
        style={{
          width: 200, height: 200,
          border: "1px solid rgba(27,110,243,0.08)",
          animation: "rotateBeltRev 25s linear infinite",
        }}
      />

      {/* Orbit track */}
      <div className="absolute rounded-full pointer-events-none"
        style={{
          width: 240, height: 240,
          border: "1px solid rgba(27,110,243,0.15)",
        }}
      />

      {/* Nodes orbiting */}
      {nodes.map((node, i) => {
        const angleRad = (node.angle * Math.PI) / 180;
        const delay = (i * node.duration) / nodes.length;

        return (
          <div
            key={node.label}
            className="absolute flex items-center justify-center"
            style={{
              width: 320,
              height: 320,
              top: 0, left: 0,
              /* Each node starts at its angle offset */
              animation: `orbit ${node.duration}s linear ${delay}s infinite`,
              ["--orbit-r" as string]: `${node.radius}px`,
            }}
          >
            {/* The node pill — counter-rotates to stay upright */}
            <div
              className="group cursor-default"
              style={{
                transform: "rotate(0deg)",   /* kept upright by counter rotation built into keyframe */
              }}
            >
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-xs whitespace-nowrap select-none transition-all duration-200 group-hover:scale-110"
                style={{
                  background: node.bg,
                  border: `1px solid ${node.ring}`,
                  color: node.color,
                  boxShadow: `0 2px 12px ${node.bg}`,
                }}
              >
                <span>{node.icon}</span>
                {node.label}
              </div>
            </div>
          </div>
        );
      })}

      {/* Center hub */}
      <div
        className="relative z-10 flex flex-col items-center justify-center rounded-full select-none cursor-default"
        style={{
          width: 90, height: 90,
          background: "linear-gradient(135deg, #0C1830 0%, #102040 100%)",
          border: "2px solid rgba(27,110,243,0.5)",
          animation: "pulseHub 3s ease-in-out infinite",
        }}
      >
        {/* S logo shape simplified */}
        <div
          className="font-display font-extrabold text-lg leading-none"
          style={{
            background: "linear-gradient(135deg, #1B6EF3 0%, #7C3AED 60%, #F97316 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          S
        </div>
        <div className="text-[9px] font-bold tracking-widest text-[#6B8DB8] mt-0.5">SINAPTA</div>
      </div>

      {/* Glow underneath hub */}
      <div className="absolute rounded-full pointer-events-none"
        style={{
          width: 110, height: 110,
          background: "radial-gradient(circle, rgba(27,110,243,0.2) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}
