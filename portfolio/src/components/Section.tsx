import { motion, type MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";
import { fadeUp } from "../lib/motion";

export function Section(
  props: PropsWithChildren<{
    id: string;
    eyebrow: string;
    title: string;
    subtitle?: string;
    className?: string;
    headerMotion?: MotionProps;
  }>,
) {
  const { id, eyebrow, title, subtitle, children, className, headerMotion } = props;
  return (
    <section id={id} className={["scroll-mt-24", className ?? ""].join(" ")}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          {...headerMotion}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-ink/55">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-[15px] leading-relaxed text-ink/70">{subtitle}</p>
          ) : null}
        </motion.header>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

