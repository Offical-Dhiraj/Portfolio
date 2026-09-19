import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  BrainCircuit,
  CheckCircle2,
  Layers3,
  Zap,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import SectionBadge from "../components/SectionBadge";
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
  image: "/images/projects/ai-learning-platform.png",
  githubUrl:
    "https://github.com/Offical-Dhiraj/ai-learning-platform",
  liveUrl: "",
};

const features = [
  "AI-generated practice questions",
  "Weak-topic detection",
  "Personalized study plans",
  "Progress analytics",
];

const FeaturedProject = () => {
  const [project, setProject] = useState(fallbackProject);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await getProjects();

        const projects = Array.isArray(data)
          ? data
          : data?.projects || [];

        const featured = projects.find(
          (item) => item.featured
        );

        if (featured) {
          setProject(featured);
        }
      } catch (error) {
        console.error(
          "Failed to load featured project:",
          error
        );
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
        text-white
        sm:py-24
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
          h-80
          w-80
          rounded-full
          bg-indigo-500/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-96
          w-96
          rounded-full
          bg-violet-500/10
          blur-[140px]
        "
      />

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

      <div className="container-custom relative z-10">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge>Featured Project</SectionBadge>

          <div
            className="
              mt-5
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <h2
                className="
                  max-w-3xl
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Building products with{" "}
                <span className="gradient-text">
                  purpose.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-base
                "
              >
                A closer look at a project where I combined
                full-stack development with Generative AI to
                solve a practical problem.
              </p>
            </div>

            <div
              className="
                hidden
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-indigo-400/10
                bg-indigo-500/5
                text-indigo-400
                lg:flex
              "
            >
              <Sparkles size={20} />
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            FEATURED PROJECT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          amount={0.15}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.08]
            bg-[#0F1524]
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
          "
        >
          {/* Top Accent */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-indigo-400/70
              to-transparent
            "
          />

          <div
            className="
              grid
              lg:grid-cols-[1.05fr_0.95fr]
            "
          >

            {/* ===================================================
                PROJECT VISUAL
            =================================================== */}

            <div
              className="
                relative
                min-h-[280px]
                overflow-hidden
                bg-[#090D17]
                sm:min-h-[360px]
                lg:min-h-[500px]
              "
            >
              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-64
                  w-64
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-indigo-500/10
                  blur-[100px]
                "
              />

              {/* Browser Frame */}

              <div
                className="
                  absolute
                  inset-5
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.09]
                  bg-[#0B101B]
                  shadow-2xl
                  sm:inset-7
                  lg:inset-10
                "
              >
                {/* Browser Header */}

                <div
                  className="
                    flex
                    h-9
                    items-center
                    gap-2
                    border-b
                    border-white/[0.06]
                    bg-white/[0.025]
                    px-3
                  "
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />

                  <div className="ml-2 h-4 flex-1 rounded-md bg-white/[0.035]" />
                </div>

                {/* Project Image */}

                <div className="relative h-[calc(100%-36px)] overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        object-top
                        transition
                        duration-700
                        hover:scale-[1.025]
                      "
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-full
                        items-center
                        justify-center
                        bg-gradient-to-br
                        from-indigo-950
                        via-[#0B101B]
                        to-violet-950
                      "
                    >
                      <BrainCircuit
                        size={90}
                        className="text-indigo-400/20"
                      />
                    </div>
                  )}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#080B14]/60
                      via-transparent
                      to-transparent
                    "
                  />
                </div>
              </div>

              {/* Featured Badge */}

              <div
                className="
                  absolute
                  left-8
                  top-8
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-indigo-400/20
                  bg-[#080B14]/80
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-indigo-300
                  backdrop-blur-xl
                  sm:left-10
                  sm:top-10
                "
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Featured Build
              </div>

              {/* Technology Pills */}

              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  right-8
                  flex
                  flex-wrap
                  gap-2
                  sm:left-10
                  sm:right-10
                "
              >
                {project.technologies
                  ?.slice(0, 5)
                  .map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-[#080B14]/75
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-slate-200
                        backdrop-blur-xl
                      "
                    >
                      {technology}
                    </span>
                  ))}
              </div>
            </div>

            {/* ===================================================
                PROJECT INFORMATION
            =================================================== */}

            <div
              className="
                flex
                flex-col
                justify-center
                p-6
                sm:p-8
                lg:p-10
                xl:p-12
              "
            >
              {/* Project Type */}

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
                  <BrainCircuit size={15} />
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
                  MERN + Generative AI
                </span>
              </div>

              {/* Title */}

              <h3
                className="
                  mt-4
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                {project.title}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-base
                "
              >
                {project.description}
              </p>

              {/* Feature Heading */}

              <div className="mt-7 flex items-center gap-2">
                <Zap
                  size={14}
                  className="text-violet-400"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Key Capabilities
                </span>
              </div>

              {/* Features */}

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/[0.06]
                      bg-white/[0.025]
                      px-3
                      py-2.5
                    "
                  >
                    <CheckCircle2
                      size={14}
                      className="shrink-0 text-indigo-400"
                    />

                    <span className="text-[11px] font-medium text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}

              <div className="my-7 h-px bg-white/[0.07]" />

              {/* Actions */}

              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-white
                      px-4
                      py-2.5
                      text-xs
                      font-bold
                      text-[#080B14]
                      transition
                      hover:bg-slate-200
                    "
                  >
                    <FaGithub size={16} />
                    View Source
                    <ArrowUpRight size={14} />
                  </motion.a>
                )}

                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-4
                      py-2.5
                      text-xs
                      font-bold
                      text-slate-200
                      transition
                      hover:border-indigo-400/30
                      hover:bg-indigo-500/10
                    "
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </motion.a>
                )}
              </div>

              {/* Bottom Message */}

              <div className="mt-5 flex items-center gap-2">
                <Layers3
                  size={13}
                  className="text-slate-600"
                />

                <span className="text-[10px] text-slate-600">
                  Designed, developed and integrated end-to-end
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;