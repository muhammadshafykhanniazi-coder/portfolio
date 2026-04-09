import { motion, useReducedMotion } from "framer-motion";
import type { Skill } from "../types";

export function SkillMeter(props: { skill: Skill }) {
  const { skill } = props;
  const reduce = useReducedMotion();
  const width = `${Math.max(0, Math.min(100, skill.level))}%`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[14px] font-medium text-ink">{skill.name}</p>
        <p className="text-[12px] font-semibold text-ink/70 tabular-nums">{skill.level}%</p>
      </div>

      <div className="mt-3 h-2 rounded-full bg-white/5 overflow-hidden border border-white/10">
        <motion.div
          initial={{ width: reduce ? width : "0%" }}
          whileInView={{ width }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-cyan relative"
        >
          <span className="absolute inset-y-0 left-0 w-[40%] opacity-40 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine-x" />
        </motion.div>
      </div>
    </motion.div>
  );
}

