import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { ProjectCard } from "./components/ProjectCard";
import { SkillMeter } from "./components/SkillMeter";
import { profile, projects, skills } from "./data";
import { fadeIn, fadeUp, stagger } from "./lib/motion";
import { Icon } from "./components/Icon";
import { hijackHashLinks } from "./hooks/useSmoothScroll";
import { useEffect } from "react";

function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold tracking-wide text-ink/75"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              CS Student · Security Researcher
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-ink"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-ink/75 max-w-2xl"
            >
              <span className="text-ink font-semibold">{profile.role}</span>
              <span className="text-ink/60"> · </span>
              {profile.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="ring-premium inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-accent to-accent-cyan px-5 py-3 text-[13px] font-semibold text-black shadow-glow transition-transform active:scale-[0.98]"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="ring-premium inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-[13px] font-semibold text-ink/90 hover:text-ink transition-colors active:scale-[0.98]"
              >
                Contact
              </a>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-8 flex flex-wrap gap-4 text-[12px] text-ink/60">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/35" /> Focus: Cybersecurity
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/35" /> Platform: Kali Linux
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/35" /> Domains: GRC · IR · Web
              </span>
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-accent/40 to-accent-cyan/20 border border-white/10 grid place-items-center">
                  <span className="text-[13px] font-semibold text-ink">MSK</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold text-ink truncate">{profile.name}</p>
                  <p className="mt-1 text-[12px] text-ink/60 truncate">{profile.role}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink/55 font-semibold">
                    Strength
                  </p>
                  <p className="mt-2 text-[13px] font-semibold text-ink">Secure Systems</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink/55 font-semibold">
                    Shipping
                  </p>
                  <p className="mt-2 text-[13px] font-semibold text-ink">Clean APIs</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/55 font-semibold">
                  Top skills
                </p>
                <div className="mt-3 space-y-3">
                  {skills.slice(0, 4).map((s) => (
                    <div key={s.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-[13px] font-semibold text-ink">{s.name}</p>
                        <p className="text-[12px] font-semibold text-ink/70 tabular-nums">{s.level}%</p>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/5 overflow-hidden border border-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, amount: 0.75 }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-cyan"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building systems, securing the future"
      subtitle="I’m a CS student focused on cybersecurity fundamentals and real-world software. I like building end‑to‑end systems, then stress-testing assumptions—auth, session flows, access control, and surface area."
      className="border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card"
        >
          <p className="text-[14px] leading-relaxed text-ink/75">
            My work sits at the intersection of <span className="text-ink font-semibold">development</span> and{" "}
            <span className="text-ink font-semibold">security</span>: I build practical software, then audit it with a threat‑model mindset.
            I’m currently deepening my foundations in web security, incident response concepts, and security tooling on Kali Linux.
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-ink/75">
            If you’re looking for someone who cares about <span className="text-ink font-semibold">clean engineering</span>,{" "}
            <span className="text-ink font-semibold">clarity</span>, and <span className="text-ink font-semibold">secure defaults</span>,
            let’s connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 grid grid-cols-1 gap-3"
        >
          {[
            { k: "Core interests", v: "Web security · IR · GRC" },
            { k: "Stack", v: "Python · Flask · SQLite" },
            { k: "Also", v: "Java · C++ · Networking" },
            { k: "Mindset", v: "Systems-first, threat-model aware" },
          ].map((row) => (
            <div
              key={row.k}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                {row.k}
              </p>
              <p className="mt-2 text-[13px] font-semibold text-ink/85">{row.v}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Capabilities that scale"
      subtitle="A fast overview. Progress indicators animate only when scrolled into view."
      className="border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((s) => (
            <SkillMeter key={s.name} skill={s} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
            What I ship
          </p>
          <ul className="mt-4 space-y-3 text-[14px] text-ink/75">
            {[
              "Authentication and session flows with secure defaults",
              "REST APIs and dashboards with clean data boundaries",
              "Automation scripts that remove repetitive work",
              "Security learning projects that translate into real checks",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="Modern cards with premium hover tilt, glow, and scroll reveals."
      className="border-t border-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const items = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: (
        <Icon className="h-5 w-5">
          <path d="M4 4h16v16H4z" opacity="0" />
          <path d="M4 6h16" />
          <path d="m4 6 8 7 8-7" />
          <path d="M4 18h16" />
        </Icon>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/shafy-khan-",
      href: profile.links.linkedin,
      icon: (
        <Icon className="h-5 w-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2a4 4 0 0 1 2-2z" />
          <path d="M2 9h4v12H2z" />
          <path d="M2 4h4v4H2z" />
        </Icon>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/muhammadshafykhanniazi-coder",
      href: profile.links.github,
      icon: (
        <Icon className="h-5 w-5">
          <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.2c0-.9.3-1.6.8-2-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.2 1.2a11 11 0 0 1 5.8 0C18.8 2 19.8 2.3 19.8 2.3a4.3 4.3 0 0 1 .1 3.2 4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .5.4.9 1.2.9 2.4V21" />
        </Icon>
      ),
    },
    {
      label: "TryHackMe",
      value: "tryhackme.com/p/muhammadshafykhanniazi",
      href: profile.links.tryhackme,
      icon: (
        <Icon className="h-5 w-5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </Icon>
      ),
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s connect"
      subtitle="Open to collaboration, security discussions, and building together."
      className="border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-3">
          {items.map((i) => (
            <motion.a
              key={i.label}
              href={i.href}
              target={i.href.startsWith("http") ? "_blank" : undefined}
              rel={i.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 6 }}
              className="ring-premium group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-card transition-colors hover:border-white/20"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-ink/85">
                {i.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                  {i.label}
                </span>
                <span className="mt-1 block truncate text-[14px] font-semibold text-ink/85">
                  {i.value}
                </span>
              </span>
              <span className="text-ink/55 font-semibold transition-transform group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
            Quick note
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-ink/75">
            I’m especially interested in projects around secure web apps, automation tooling, and learning-driven builds.
            If you have an idea, send a message and I’ll reply.
          </p>
          <div className="mt-6">
            <a
              href={`mailto:${profile.email}`}
              className="ring-premium inline-flex w-full items-center justify-center rounded-2xl bg-white/5 border border-white/10 px-5 py-3 text-[13px] font-semibold text-ink/90 hover:text-ink transition-colors active:scale-[0.98]"
            >
              Email me
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export default function App() {
  useEffect(() => hijackHashLinks(), []);

  return (
    <div className="bg-premium min-h-dvh">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2 focus:text-black focus:font-semibold ring-premium"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-[12px] text-ink/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Minimal. Premium. Built with TypeScript + Framer Motion.</span>
        </div>
      </footer>
    </div>
  );
}

