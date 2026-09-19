import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BriefcaseBusiness,
  Rocket,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import SectionBadge from "../components/SectionBadge";

const journey = [
  {
    year: "2024",
    title: "Started Building for the Web",
    description:
      "Started strengthening web development fundamentals and building projects with HTML, CSS and JavaScript.",
    icon: Code2,
    tag: "Foundation",
  },
  {
    year: "2025",
    title: "Moved into MERN Development",
    description:
      "Expanded into React, Node.js, Express.js and MongoDB while building full-stack applications.",
    icon: Rocket,
    tag: "Full Stack",
  },
  {
    year: "2025–2026",
    title: "Project-Based Learning",
    description:
      "Built practical applications including an AI-powered learning platform and social media application.",
    icon: BriefcaseBusiness,
    tag: "Projects",
  },
  {
    year: "2026",
    title: "Preparing for Software Roles",
    description:
      "Focused on DSA, core computer science subjects, full-stack development and technical interviews.",
    icon: GraduationCap,
    tag: "Career",
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
      className="
        relative
        overflow-hidden
        bg-[#0D1220]
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
          top-1/4
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
          initial={{
            opacity: 0,
            y: 20,
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
          <SectionBadge>My Journey</SectionBadge>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              leading-tight
              tracking-tight
              sm:text-4xl
              lg:text-5xl
            "
          >
            Learning.
            <span className="gradient-text">
              {" "}Building.
            </span>
            <br className="sm:hidden" /> Growing.
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            From learning the fundamentals of web development to building
            full-stack and AI-powered applications, every stage has shaped
            the developer I am becoming.
          </p>
        </motion.div>

        {/* =======================================================
            TIMELINE
        ======================================================= */}

        <div
          className="
            relative
            mx-auto
            mt-12
            max-w-5xl
            lg:mt-16
          "
        >
          {/* Desktop Center Line */}

          <div
            className="
              absolute
              bottom-5
              left-1/2
              top-5
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-indigo-400/0
              via-indigo-400/40
              to-violet-400/0
              md:block
            "
          />

          {/* Mobile Line */}

          <div
            className="
              absolute
              bottom-5
              left-[19px]
              top-5
              w-px
              bg-gradient-to-b
              from-indigo-400/0
              via-indigo-400/30
              to-violet-400/0
              md:hidden
            "
          />

          <div className="space-y-8 md:space-y-12">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={item.year}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className={`
                    relative
                    flex
                    items-start
                    pl-12
                    md:w-1/2
                    md:pl-0
                    ${
                      isRight
                        ? "md:ml-auto md:pl-12"
                        : "md:pr-12"
                    }
                  `}
                >
                  {/* =================================================
                      TIMELINE CONNECTOR
                  ================================================= */}

                  <div
                    className={`
                      absolute
                      left-0
                      top-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-indigo-400/20
                      bg-[#111827]
                      text-indigo-400
                      shadow-[0_0_25px_rgba(99,102,241,0.12)]
                      md:left-auto
                      ${
                        isRight
                          ? "md:-left-5"
                          : "md:-right-5"
                      }
                      z-20
                    `}
                  >
                    <Icon size={16} />
                  </div>

                  {/* Horizontal connector */}

                  <div
                    className={`
                      absolute
                      top-10
                      hidden
                      h-px
                      w-12
                      bg-indigo-400/20
                      md:block
                      ${
                        isRight
                          ? "md:left-0"
                          : "md:right-0"
                      }
                    `}
                  />

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      premium-card
                      group
                      relative
                      w-full
                      overflow-hidden
                      rounded-2xl
                      p-5
                      sm:p-6
                    "
                  >
                    {/* Card glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        h-24
                        w-24
                        rounded-full
                        bg-indigo-500/5
                        blur-2xl
                        transition
                        duration-500
                        group-hover:bg-indigo-500/10
                      "
                    />

                    {/* Top row */}

                    <div className="relative flex items-center justify-between gap-3">
                      <span
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          border
                          border-indigo-400/15
                          bg-indigo-500/10
                          px-2.5
                          py-1
                          text-[10px]
                          font-bold
                          tracking-wide
                          text-indigo-300
                        "
                      >
                        {item.year}
                      </span>

                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-slate-600
                        "
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        relative
                        mt-4
                        text-lg
                        font-black
                        leading-tight
                        text-white
                        sm:text-xl
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        relative
                        mt-2.5
                        text-xs
                        leading-6
                        text-slate-500
                        sm:text-sm
                      "
                    >
                      {item.description}
                    </p>

                    {/* Bottom */}

                    <div
                      className="
                        relative
                        mt-4
                        flex
                        items-center
                        gap-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-slate-600
                        transition
                        group-hover:text-indigo-400
                      "
                    >
                      <span>Milestone</span>

                      <ArrowRight
                        size={12}
                        className="
                          transition
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>

                    {/* Bottom accent */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        h-px
                        w-0
                        -translate-x-1/2
                        bg-gradient-to-r
                        from-transparent
                        via-indigo-400
                        to-transparent
                        transition-all
                        duration-500
                        group-hover:w-1/2
                      "
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            BOTTOM MESSAGE
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-12
            flex
            max-w-xl
            items-center
            justify-center
            gap-2
            text-center
          "
        >
          <Sparkles
            size={14}
            className="shrink-0 text-indigo-400"
          />

          <p className="text-xs text-slate-500">
            The journey continues — learning, building and becoming better
            every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;