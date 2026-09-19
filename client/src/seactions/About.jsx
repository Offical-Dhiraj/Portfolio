import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  GraduationCap,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";

import SectionBadge from "../components/SectionBadge";

const stats = [
  {
    value: "10+",
    label: "Projects Built",
    icon: Rocket,
  },
  {
    value: "15+",
    label: "Technologies",
    icon: Code2,
  },
  {
    value: "100+",
    label: "DSA Problems",
    icon: Terminal,
  },
  {
    value: "∞",
    label: "Learning Mindset",
    icon: Sparkles,
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building complete web applications with React, Node.js, Express and MongoDB.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Using Generative AI to create smarter and more useful web applications.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Designing REST APIs, database systems and reliable server-side solutions.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        scroll-mt-24
        overflow-hidden
        bg-[#0D1220]
        text-white
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-72
          w-72
          rounded-full
          bg-indigo-500/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-80
          w-80
          rounded-full
          bg-violet-500/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.02]
          [background-image:linear-gradient(rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.5)_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          container-custom
          relative
          z-10
          flex
          min-h-screen
          items-center
          py-24
          lg:py-20
        "
      >
        <div className="w-full">

          {/* =====================================================
              HEADER
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionBadge>About Me</SectionBadge>

            <h2
              className="
                mt-4
                max-w-3xl
                text-3xl
                font-black
                leading-[1.05]
                tracking-tight
                sm:text-4xl
                lg:text-[52px]
              "
            >
              I don't just write code.
              <br />
              I build{" "}
              <span className="gradient-text">
                solutions.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-slate-400
                sm:text-base
              "
            >
              I am Dhiraj Kumar, a Computer Science & Engineering student
              and Full Stack MERN Developer passionate about building
              modern web applications and solving real-world problems
              through technology.
            </p>
          </motion.div>

          {/* =====================================================
              MAIN GRID
          ===================================================== */}

          <div
            className="
              mt-9
              grid
              gap-6
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-8
            "
          >

            {/* ===================================================
                LEFT — DEVELOPER PROFILE
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="
                premium-card
                rounded-3xl
                p-5
                sm:p-6
              "
            >
              {/* Small heading */}

              <div className="flex items-center gap-2">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-indigo-500/10
                    text-indigo-400
                  "
                >
                  <Sparkles size={15} />
                </div>

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-indigo-400
                  "
                >
                  Who I Am
                </span>
              </div>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-3xl
                "
              >
                Developer.
                <br />
                <span className="gradient-text">
                  Problem Solver.
                </span>
              </h3>

              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                <p>
                  I enjoy taking an idea, understanding the problem behind
                  it, and turning it into a practical digital product.
                </p>

                <p>
                  My primary stack includes{" "}
                  <span className="font-semibold text-slate-200">
                    React, JavaScript, Node.js, Express.js, MongoDB and SQL.
                  </span>
                </p>
              </div>

              {/* Education + Focus */}

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-4
                  "
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-indigo-500/10
                        text-indigo-400
                      "
                    >
                      <GraduationCap size={16} />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Education
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-bold text-slate-200">
                    B.Tech — Computer Science
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Computer Science & Engineering
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-4
                  "
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-violet-500/10
                        text-violet-400
                      "
                    >
                      <Rocket size={16} />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Current Focus
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-bold text-slate-200">
                    MERN + AI
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Full Stack & AI-powered products
                  </p>
                </div>
              </div>

              {/* CTA */}

              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-indigo-500
                  to-violet-500
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  shadow-lg
                  shadow-indigo-500/15
                  transition
                  hover:shadow-indigo-500/25
                "
              >
                Let's work together
                <ArrowUpRight size={14} />
              </motion.a>
            </motion.div>

            {/* ===================================================
                RIGHT — CAPABILITIES
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.1,
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="
                    whitespace-nowrap
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-violet-400
                  "
                >
                  What I Do
                </span>

                <div className="h-px flex-1 bg-gradient-to-r from-violet-400/30 to-transparent" />
              </div>

              <div className="grid gap-3">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      whileHover={{ x: 4 }}
                      className="
                        premium-card
                        group
                        flex
                        items-start
                        gap-4
                        rounded-2xl
                        p-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-indigo-500/10
                          text-indigo-400
                          transition
                          duration-300
                          group-hover:scale-105
                          group-hover:bg-indigo-500/20
                        "
                      >
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>

                      <CheckCircle2
                        size={15}
                        className="
                          ml-auto
                          mt-1
                          shrink-0
                          text-indigo-400/50
                          transition
                          group-hover:text-indigo-400
                        "
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Philosophy */}

              <div
                className="
                  mt-3
                  rounded-2xl
                  border
                  border-indigo-400/10
                  bg-gradient-to-r
                  from-indigo-500/[0.07]
                  to-violet-500/[0.04]
                  p-4
                "
              >
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={15}
                    className="text-indigo-400"
                  />

                  <span className="text-xs font-bold text-slate-200">
                    My approach
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Understand the problem → design the solution → build cleanly
                  → test → improve → deploy.
                </p>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              STATS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              mt-6
              grid
              grid-cols-2
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#111827]/70
              backdrop-blur-xl
              sm:grid-cols-4
            "
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.025)",
                  }}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    p-3
                    sm:justify-center
                    ${
                      index !== stats.length - 1
                        ? "border-b border-white/[0.07] sm:border-b-0 sm:border-r"
                        : ""
                    }
                    ${
                      index === 1
                        ? "border-r border-white/[0.07]"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-indigo-500/10
                      text-indigo-400
                    "
                  >
                    <Icon size={14} />
                  </div>

                  <div>
                    <p className="gradient-text text-lg font-black">
                      {stat.value}
                    </p>

                    <p className="text-[9px] font-medium text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;