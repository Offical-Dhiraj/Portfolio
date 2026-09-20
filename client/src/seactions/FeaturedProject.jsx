import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { getProjects } from "../services/projectService";

const fallbackProject = {
  title: "AI Learning Platform",
  description:
    "An AI-powered exam preparation platform that generates personalized questions, identifies weak topics and creates adaptive study plans for learners.",
  technologies: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Generative AI",
  ],
  githubUrl:
    "https://github.com/Offical-Dhiraj/ai-learning-platform",
  liveUrl: "",
};

const capabilities = [
  "AI-generated practice questions",
  "Weak-topic detection",
  "Personalized study plans",
  "Progress analytics",
];

const FeaturedProject = () => {
  const [project, setProject] = useState(fallbackProject);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await getProjects();

        const projects = Array.isArray(data)
          ? data
          : data?.projects || [];

        const featuredProject =
          projects.find((item) => item.featured) ||
          projects[0];

        if (featuredProject) {
          setProject({
            ...fallbackProject,
            ...featuredProject,
          });
        }
      } catch (error) {
        console.error(
          "Failed to load featured project:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, []);

  return (
    <section
      id="featured-project"
      className="
        relative
        overflow-hidden
        bg-[#080B14]
        py-20
        sm:py-24
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[130px]" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]" />
      </div>

      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(148,163,184,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148,163,184,0.035) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "45px 45px",
        }}
      />

      <div className="container-custom relative z-10">

        {/* =======================================
            HEADER
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="
            mx-auto
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-indigo-400/10
            bg-indigo-500/[0.07]
            px-4
            py-2
            text-xs
            font-bold
            uppercase
            tracking-[0.16em]
            text-indigo-300
          ">
            <Sparkles size={14} />
            Featured Project
          </div>

          <h2 className="
            mt-5
            text-4xl
            font-black
            tracking-tight
            text-white
            sm:text-5xl
            lg:text-6xl
          ">
            Building products
            <span className="gradient-text">
              {" "}with purpose.
            </span>
          </h2>

          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-8
            text-slate-400
            sm:text-lg
          ">
            A closer look at one of my full-stack
            projects and the engineering behind it.
          </p>
        </motion.div>

        {/* =======================================
            FEATURED PROJECT CARD
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-6xl
            overflow-hidden
            rounded-[30px]
            border
            border-white/[0.08]
            bg-[#0F1524]
            shadow-[0_25px_80px_rgba(0,0,0,0.28)]
          "
        >
          {/* TOP LINE */}
          <div className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-indigo-500
            to-transparent
          " />

          <div className="
            grid
            lg:grid-cols-[0.8fr_1.2fr]
          ">

            {/* =================================
                LEFT PROJECT OVERVIEW
            ================================== */}

            <div className="
              relative
              overflow-hidden
              border-b
              border-white/[0.07]
              p-7
              sm:p-10
              lg:border-b-0
              lg:border-r
            ">

              {/* Decorative Glow */}
              <div className="
                pointer-events-none
                absolute
                -left-20
                -top-20
                h-56
                w-56
                rounded-full
                bg-indigo-500/10
                blur-[90px]
              " />

              <div className="relative">

                {/* Project Icon */}
                <div className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-indigo-400/15
                  bg-gradient-to-br
                  from-indigo-500/15
                  to-violet-500/10
                  text-indigo-300
                  shadow-lg
                  shadow-indigo-500/5
                ">
                  <Layers3 size={29} />
                </div>

                {/* Project Number */}
                <p className="
                  mt-8
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-slate-600
                ">
                  Featured Build · 01
                </p>

                {/* Title */}
                <h3 className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-tight
                  text-white
                  sm:text-4xl
                ">
                  {project.title}
                </h3>

                {/* Category */}
                <div className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-indigo-400/10
                  bg-indigo-500/[0.07]
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-indigo-300
                ">
                  <Zap size={13} />
                  MERN + Generative AI
                </div>

                {/* Description */}
                <p className="
                  mt-6
                  text-sm
                  leading-7
                  text-slate-400
                ">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8">

                  <p className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-slate-600
                  ">
                    Technology Stack
                  </p>

                  <div className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                  ">
                    {(project.technologies || [])
                      .map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-lg
                            border
                            border-white/[0.07]
                            bg-white/[0.035]
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            text-slate-300
                          "
                        >
                          {technology}
                        </span>
                      ))}
                  </div>
                </div>

              </div>
            </div>

            {/* =================================
                RIGHT PROJECT DETAILS
            ================================== */}

            <div className="
              p-7
              sm:p-10
            ">

              {/* Section Label */}
              <div className="
                flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-indigo-400
              ">
                <Zap size={15} />
                Key Capabilities
              </div>

              {/* Capabilities */}
              <div className="
                mt-6
                grid
                gap-3
                sm:grid-cols-2
              ">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      px-4
                      py-3.5
                      transition-all
                      duration-300
                      hover:border-indigo-400/15
                      hover:bg-indigo-500/[0.04]
                    "
                  >
                    <CheckCircle2
                      size={17}
                      className="
                        shrink-0
                        text-indigo-400
                      "
                    />

                    <span className="
                      text-sm
                      font-medium
                      text-slate-300
                    ">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>

              {/* Architecture */}
              <div className="
                mt-8
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-5
              ">
                <p className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-slate-600
                ">
                  What I built
                </p>

                <p className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-400
                ">
                  A complete learning workflow combining
                  modern React interfaces, REST APIs,
                  MongoDB data management and Generative
                  AI to personalize exam preparation.
                </p>
              </div>

              {/* Divider */}
              <div className="
                my-8
                h-px
                bg-white/[0.07]
              " />

              {/* ACTIONS */}
              <div className="
                flex
                flex-wrap
                gap-3
              ">

                {/* GITHUB */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-slate-950
                      shadow-lg
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-slate-100
                    "
                  >
                    <FaGithub size={18} />
                    View Source
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {/* LIVE DEMO */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.04]
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-slate-200
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-indigo-400/20
                      hover:bg-indigo-500/10
                    "
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                )}

              </div>

              {/* FOOT NOTE */}
              <div className="
                mt-7
                flex
                items-center
                gap-2
                text-xs
                text-slate-600
              ">
                <Layers3 size={14} />

                Designed, developed and integrated
                end-to-end.
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProject;