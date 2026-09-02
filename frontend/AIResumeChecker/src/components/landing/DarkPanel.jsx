import { motion } from "framer-motion";

const NOISE_DATA_URI =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='3'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='0.9'/></svg>\")";

export function DarkPanel({ className = "", children, glow = true, radius = "rounded-[32px]" }) {
  return (
    <div className={`relative overflow-hidden isolate ${radius} ${className}`}>
      {/* Base rich dark espresso gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(140deg, #18110D 0%, #251710 38%, #1B120D 72%, #0E0A08 100%)",
        }}
      />

      {glow && (
        <>
          {/* Top-right warm amber radial glow */}
          <motion.div
            className="absolute -top-32 -right-32 w-[540px] h-[540px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,140,70,0.32) 0%, rgba(232,106,51,0.12) 40%, transparent 70%)",
              filter: "blur(70px)",
            }}
            animate={{ x: [0, 30, 0], y: [0, 20, 0], opacity: [0.55, 0.85, 0.55] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Bottom-left warm copper/amber radial glow */}
          <motion.div
            className="absolute -bottom-40 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(232,106,51,0.35) 0%, rgba(196,78,28,0.15) 45%, transparent 70%)",
              filter: "blur(70px)",
            }}
            animate={{ x: [0, -25, 0], y: [0, -30, 0], opacity: [0.45, 0.75, 0.45] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Subtle light sheen */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 30%, rgba(255,200,160,0.04) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle noise grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: NOISE_DATA_URI }}
      />

      {/* Inner ambient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: "inset 0 0 140px 30px rgba(0,0,0,0.5)" }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
