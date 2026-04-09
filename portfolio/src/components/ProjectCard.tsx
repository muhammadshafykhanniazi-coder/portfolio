import { motion } from "framer-motion";
import type { Project } from "../types";

export function ProjectCard(props: { project: Project }) {
  const { project } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative [perspective:900px]"
    >
      <motion.div
        whileHover={{ rotateX: -3, rotateY: 6, y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={[
          "relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6",
          "shadow-card overflow-hidden",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute -inset-12 bg-gradient-to-br from-accent/20 via-accent-cyan/10 to-transparent blur-2xl" />
        </div>

        <div className="relative">
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-ink/70">
              {project.kind === "featured" ? "Featured" : "Project"}
            </span>
            {project.href ? (
              <span className="text-[12px] font-semibold text-ink/70 group-hover:text-ink transition-colors">
                View →
              </span>
            ) : null}
          </div>

          <h3 className="mt-4 text-[16px] sm:text-[17px] font-semibold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-ink/70">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-ink/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-accent/0 via-accent/70 to-accent-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>

      {project.href ? (
        <a
          className="sr-only"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          {project.title}
        </a>
      ) : null}

      {/* clickable overlay (keeps tilt container as div) */}
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 rounded-2xl ring-premium"
          aria-label={`Open ${project.title} on GitHub`}
        />
      ) : null}
    </motion.div>
  );
}

