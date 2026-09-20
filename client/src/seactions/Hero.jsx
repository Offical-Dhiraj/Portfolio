import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  Sparkles,
  Code2,
  ExternalLink,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import profileImage from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080B14]
        pt-20
        text-white
        lg:h-screen
        lg:min-h-0
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-indigo-600/15
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
          h-[350px]
          w-[350px]
          rounded-full
          bg-violet-600/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/4
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-500/[0.05]
          blur-[120px]
        "
      />

      {/* Subtle grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.5)_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="container-custom relative z-10 h-full">
        <div
          className="
            flex
            min-h-[calc(100vh-80px)]
            items-center
            py-8
            sm:py-10
            lg:h-[calc(100vh-80px)]
            lg:min-h-0
            lg:py-6
          "
        >
          <div
            className="
              grid
              w-full
              items-center
              gap-10
              lg:grid-cols-[1.12fr_0.88fr]
              lg:gap-12
              xl:gap-16
            "
          >
            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Status */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-emerald-400/[0.07]
                  px-3.5
                  py-1.5
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-semibold tracking-wide text-emerald-300">
                  Open for opportunities
                </span>
              </motion.div>

              {/* Intro */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-indigo-300
                  sm:text-sm
                "
              >
                <span className="h-px w-7 bg-indigo-400/60" />
                Hello, I'm
              </motion.p>

              {/* Name */}
              <h1
                className="
                  text-5xl
                  font-black
                  leading-[0.94]
                  tracking-[-0.045em]
                  sm:text-6xl
                  lg:text-[64px]
                  xl:text-[72px]
                "
              >
                Dhiraj
                <span className="block">
                  Kumar
                  <span className="gradient-text">.</span>
                </span>
              </h1>

              {/* Role */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="
                  mt-5
                  text-xl
                  font-bold
                  tracking-tight
                  text-slate-200
                  sm:text-2xl
                "
              >
                Full Stack <span className="gradient-text">MERN Developer</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-base
                "
              >
                I build modern, scalable and user-focused web applications using
                React, Node.js, Express and MongoDB — turning ideas into
                practical digital products.
              </motion.p>

              {/* Tech badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {["React", "Node.js", "Express", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-white/[0.035]
                        px-2.5
                        py-1
                        text-[11px]
                        font-medium
                        text-slate-400
                        transition
                        hover:border-indigo-400/30
                        hover:bg-indigo-500/10
                        hover:text-indigo-300
                      "
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <a
                  href="#contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-indigo-500
                    to-violet-500
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_30px_rgba(99,102,241,0.22)]
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_15px_35px_rgba(99,102,241,0.32)]
                  "
                >
                  Let's Connect
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href="#projects"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.10]
                    bg-white/[0.035]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-slate-200
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-indigo-400/30
                    hover:bg-indigo-500/10
                    hover:text-white
                  "
                >
                  View My Work
                  <ExternalLink
                    size={15}
                    className="text-slate-500 transition group-hover:text-indigo-300"
                  />
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="mt-6 flex items-center gap-2.5"
              >
                <span className="mr-1 text-[10px] font-medium uppercase tracking-wider text-slate-600">
                  Connect
                </span>

                <a
                  href="https://github.com/Offical-Dhiraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.035]
                    text-slate-400
                    transition
                    hover:-translate-y-1
                    hover:border-indigo-400/30
                    hover:bg-indigo-500/10
                    hover:text-white
                  "
                >
                  <FaGithub
                    size={17}
                    className="transition group-hover:scale-110"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/officail-dhirajkr/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.035]
                    text-slate-400
                    transition
                    hover:-translate-y-1
                    hover:border-indigo-400/30
                    hover:bg-indigo-500/10
                    hover:text-white
                  "
                >
                  <FaLinkedinIn
                    size={16}
                    className="transition group-hover:scale-110"
                  />
                </a>

                <a
                  href="mailto:dhirajmalakar19@gmail.com.com"
                  aria-label="Email"
                  className="
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.035]
                    text-slate-400
                    transition
                    hover:-translate-y-1
                    hover:border-indigo-400/30
                    hover:bg-indigo-500/10
                    hover:text-white
                  "
                >
                  <Mail
                    size={17}
                    className="transition group-hover:scale-110"
                  />
                </a>
              </motion.div>
            </motion.div>

            {/* =====================================================
                RIGHT IMAGE
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-[330px]
                sm:max-w-[350px]
                lg:max-w-[320px]
                xl:max-w-[350px]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  -inset-7
                  rounded-[3rem]
                  bg-gradient-to-br
                  from-indigo-500/15
                  via-violet-500/10
                  to-cyan-400/10
                  blur-3xl
                "
              />

              {/* Decorative ring */}
              <div
                className="
                  absolute
                  -inset-2
                  rounded-[2.2rem]
                  border
                  border-indigo-400/10
                "
              />

              {/* Image card */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  premium-card
                  relative
                  z-10
                  overflow-hidden
                  rounded-[1.8rem]
                  p-2.5
                "
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.4rem]
                    bg-[#0D1220]
                  "
                >
                  <img
                    src={profileImage}
                    alt="Dhiraj Kumar"
                    className="
                      aspect-[4/5]
                      w-full
                      object-cover
                      object-center
                      transition
                      duration-700
                      hover:scale-105
                    "
                  />

                  {/* Gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#080B14]
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Top badge */}
                  <div className="absolute left-4 top-4">
                    <div
                      className="
                        glass
                        flex
                        items-center
                        gap-1.5
                        rounded-full
                        px-2.5
                        py-1.5
                      "
                    >
                      <Sparkles size={11} className="text-indigo-300" />

                      <span className="text-[10px] font-semibold text-slate-200">
                        MERN Developer
                      </span>
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-[#080B14]/70
                        p-3
                        backdrop-blur-xl
                      "
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-indigo-500/15
                            text-indigo-300
                          "
                        >
                          <Code2 size={15} />
                        </div>

                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-slate-500">
                            Focus
                          </p>

                          <p className="text-xs font-bold text-white">
                            Building digital products
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Status card */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-3
                  -left-5
                  z-20
                  hidden
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#111827]/90
                  px-3
                  py-2
                  shadow-xl
                  backdrop-blur-xl
                  sm:block
                "
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-slate-500">
                      Status
                    </p>

                    <p className="text-[11px] font-bold text-emerald-300">
                      Available
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* MERN card */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-4
                  top-1/2
                  z-20
                  hidden
                  -translate-y-1/2
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#111827]/90
                  px-3
                  py-2
                  shadow-xl
                  backdrop-blur-xl
                  sm:block
                "
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                    <Code2 size={14} />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-slate-500">
                      Stack
                    </p>

                    <p className="text-[11px] font-bold text-slate-200">MERN</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
