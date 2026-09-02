import { motion } from "framer-motion";

const AILogo = ({ size = 40, animated = true }) => {
  const outerSize = size;
  const innerSize = Math.round(size * 0.82);
  const strokeW = Math.max(1.5, size * 0.05);

  return (
    <div
      className="relative flex items-center justify-center shrink-0 select-none"
      style={{ width: outerSize, height: outerSize }}
      aria-label="BotBeat"
    >
      {/* Soft outer amber glow — breathes */}
      {animated && (
        <motion.div
          className="absolute -inset-1 rounded-[16px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(232,106,51,0.55) 0%, rgba(255,136,77,0.2) 45%, transparent 70%)",
            filter: `blur(${Math.max(6, size * 0.2)}px)`,
          }}
          animate={{
            opacity: [0.4, 0.85, 0.4],
            scale: [0.88, 1.06, 0.88],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Rotating conic amber sweep ring */}
      <div
        className="absolute inset-0 rounded-[14px] overflow-hidden"
        style={{
          border: "1px solid rgba(255, 180, 130, 0.2)",
          background: "linear-gradient(135deg, #2D1B13 0%, #17100B 100%)",
        }}
      >
        {animated ? (
          <motion.div
            className="absolute -inset-1/2"
            style={{
              background:
                "conic-gradient(from 0deg, #1C110B, #E86A33, #FFB380, #E86A33, #1C110B)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #E86A33 0%, #2D1B13 100%)",
            }}
          />
        )}
      </div>

      {/* Inner dark espresso card */}
      <div
        className="relative rounded-[11px] bg-[#140E0A] flex items-center justify-center overflow-hidden"
        style={{
          width: innerSize,
          height: innerSize,
          boxShadow:
            "inset 0 1px 2px rgba(255, 200, 150, 0.12), 0 2px 6px rgba(0,0,0,0.6)",
        }}
      >
        {/* Soft radial backdrop */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 40% 35%, rgba(232,106,51,0.25) 0%, transparent 75%)",
          }}
        />

        {/* Pulse Waveform + Diamond AI Core */}
        <svg
          viewBox="0 0 32 32"
          className="relative z-10 w-[72%] h-[72%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bbLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB380" />
              <stop offset="50%" stopColor="#E86A33" />
              <stop offset="100%" stopColor="#FF884D" />
            </linearGradient>
          </defs>

          {/* Pulse Rhythm Wave */}
          <path
            d="M4 16H9L12 9L16 23L20 11L23 18L25 16H28"
            stroke="url(#bbLogoGrad)"
            strokeWidth={strokeW}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Top Diamond / Beat Node */}
          <path
            d="M16 4L18 8L16 12L14 8Z"
            fill="url(#bbLogoGrad)"
            opacity="0.95"
          />
        </svg>

        {/* Shimmer sparkle */}
        {animated && (
          <motion.div
            className="absolute h-[2.5px] w-[2.5px] rounded-full bg-white pointer-events-none"
            style={{ boxShadow: "0 0 5px rgba(255,200,160,1)" }}
            animate={{
              opacity: [0, 1, 0],
              top: ["25%", "45%", "65%"],
              left: ["35%", "60%", "40%"],
            }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
    </div>
  );
};

export default AILogo;
