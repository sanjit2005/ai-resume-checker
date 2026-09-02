import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const RADIUS = 78;
const ARC = Math.PI * RADIUS;
const SCORE = 86;
const PCT = SCORE / 100;

export function HeroDashboardPreview() {
  return (
    <div className="relative w-full h-[460px] sm:h-[520px]">
      {/* Main gauge card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 w-[280px] sm:w-[300px] rounded-[24px] border border-[rgba(255,180,130,0.15)] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8)] p-5 overflow-hidden backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(160deg, #241812 0%, #17100B 50%, #0E0907 100%)",
          boxShadow:
            "0 24px 60px -12px rgba(0,0,0,0.8), inset 0 1px 0 0 rgba(255,200,160,0.1)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-[#A4988C] font-semibold">
              ATS Readiness
            </div>
            <div className="text-[11px] text-[#FAF5EE]/70 mt-0.5 font-medium">Senior_Frontend.pdf</div>
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[rgba(232,106,51,0.18)] text-[var(--accent-strong)] text-[10px] font-semibold border border-[rgba(232,106,51,0.25)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Strong
          </div>
        </div>

        <div className="relative mx-auto w-[200px]">
          <svg viewBox="0 0 200 120" className="w-full h-auto block">
            <defs>
              <linearGradient id="heroAmberArc" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E86A33" />
                <stop offset="100%" stopColor="#FFB380" />
              </linearGradient>
            </defs>
            <path
              d={`M 22 105 A ${RADIUS} ${RADIUS} 0 0 1 178 105`}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <motion.path
              d={`M 22 105 A ${RADIUS} ${RADIUS} 0 0 1 178 105`}
              fill="none"
              stroke="url(#heroAmberArc)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={ARC}
              initial={{ strokeDashoffset: ARC }}
              animate={{ strokeDashoffset: ARC - ARC * PCT }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
          <div className="absolute inset-x-0 top-[48%] flex flex-col items-center">
            <div className="font-display tabular text-[42px] font-bold tracking-tight text-[#FAF5EE] leading-none">
              {SCORE}
            </div>
            <div className="text-[10px] text-[#A4988C] mt-0.5 font-medium">out of 100</div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[rgba(232,106,51,0.18)] text-[#FFB380] text-[10px] font-semibold tabular border border-[rgba(232,106,51,0.25)]">
            <TrendingUp size={10} strokeWidth={2.5} />
            +18 vs V1
          </div>
        </div>
      </motion.div>

      {/* Floating: Issues card */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 left-0 sm:-left-4 w-[230px] rounded-[20px] backdrop-blur-xl border border-[rgba(255,180,130,0.12)] p-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, rgba(36,24,18,0.95) 0%, rgba(23,16,11,0.95) 50%, rgba(14,10,8,0.95) 100%)",
          boxShadow:
            "0 24px 60px -16px rgba(0,0,0,0.8), inset 0 1px 0 0 rgba(255,200,160,0.08)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="h-6 w-6 rounded-lg bg-[rgba(240,93,94,0.16)] text-[#F05D5E] flex items-center justify-center">
            <AlertCircle size={12} />
          </div>
          <div className="text-[11px] font-semibold text-[#FAF5EE]">Top issues</div>
          <div className="ml-auto text-[10px] text-[#A4988C] tabular font-medium">5</div>
        </div>

        {[
          { label: "Weak action verbs", tone: "high" },
          { label: "Missing keywords: React, AWS", tone: "med" },
          { label: "Inconsistent dates", tone: "low" },
        ].map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
            className="flex items-center gap-2 py-1.5"
          >
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background:
                  it.tone === "high"
                    ? "#F05D5E"
                    : it.tone === "med"
                    ? "#F59E0B"
                    : "#4EBA7C",
              }}
            />
            <div className="text-[11px] text-[#FAF5EE]/80 truncate">{it.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating: Rewrite card */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-4 right-0 sm:-right-4 w-[265px] rounded-[20px] backdrop-blur-xl border border-[rgba(255,180,130,0.12)] p-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, rgba(36,24,18,0.95) 0%, rgba(23,16,11,0.95) 50%, rgba(14,10,8,0.95) 100%)",
          boxShadow:
            "0 24px 60px -16px rgba(0,0,0,0.8), inset 0 1px 0 0 rgba(255,200,160,0.08)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="h-6 w-6 rounded-lg bg-[rgba(232,106,51,0.18)] text-[#FFB380] flex items-center justify-center">
            <Sparkles size={12} />
          </div>
          <div className="text-[11px] font-semibold text-[#FAF5EE]">AI rewrite</div>
          <div className="ml-auto inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[rgba(78,186,124,0.16)] text-[#4EBA7C] text-[9px] font-semibold">
            <CheckCircle2 size={9} /> improved
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-wide text-[#A4988C] font-semibold mb-1">
          Before
        </div>
        <div className="text-[11px] text-[#A4988C] line-through leading-snug">
          Worked on dashboards for the team
        </div>
        <div className="flex items-center gap-1.5 my-2 text-white/40">
          <ArrowRight size={11} />
          <span className="text-[9px] uppercase tracking-wide text-[#FFB380] font-semibold">
            After
          </span>
        </div>
        <div className="text-[11px] text-[#FAF5EE] leading-snug font-medium">
          Shipped 4 React analytics dashboards used by 12k+ users, cutting load time 38%.
        </div>
      </motion.div>

      {/* Floating: keyword pills */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-2 right-2 sm:right-6 flex flex-col gap-1.5 items-end"
      >
        {["React", "TypeScript", "AWS"].map((k, i) => (
          <motion.div
            key={k}
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="px-3 py-1 rounded-full bg-[#241812]/85 backdrop-blur-md border border-[rgba(255,180,130,0.18)] text-[10px] font-semibold text-[#FFB380] shadow-md"
          >
            +{k}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
