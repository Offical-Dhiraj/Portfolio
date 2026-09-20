import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BriefcaseBusiness,
  Rocket,
  ArrowUpRight,
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
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
        "
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
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-56
          top-1/3
          h-[420px]
          w-[420px]
          rounded-full
          bg-indigo-500/[0.035]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-56
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-500/[0.035]
          blur-[140px]
        "
      />

      <div className="container-custom relative z-10">

        {/* =========================================================
            MAIN LAYOUT
        ========================================================== */}

        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
            xl:gap-28
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              lg:sticky
              lg:top-28
              lg:self-start
            "
          >
            <SectionBadge>
              My Journey
            </SectionBadge>

            <h2
              className="
                mt-6
                max-w-lg
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                lg:text-[58px]
              "
            >
              From
              <span className="gradient-text">
                {" "}curiosity
              </span>
              <br />
              to building.
            </h2>

            <p
              className="
                mt-7
                max-w-md
                text-[15px]
                leading-7
                text-slate-400
                sm:text-base
              "
            >
              My journey has been shaped by learning
              through projects, experimenting with
              technologies and continuously improving
              how I solve problems.
            </p>

            {/* Small summary */}

            <div
              className="
                mt-10
                border-l
                border-indigo-400/30
                pl-5
              "
            >
              <p
                className="
                  text-sm
                  font-semibold
                  text-slate-300
                "
              >
                2024 → Present
              </p>

              <p
                className="
                  mt-1.5
                  text-xs
                  leading-6
                  text-slate-600
                "
              >
                Learning, building and preparing for
                the next step in my software development
                career.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT TIMELINE
          ====================================================== */}

          <div className="relative">

            {/* Vertical timeline */}

            <div
              className="
                absolute
                bottom-8
                left-[8px]
                top-8
                w-px
                bg-gradient-to-b
                from-indigo-400/0
                via-slate-700
                to-violet-400/0
                sm:left-[11px]
              "
            />

            <div className="space-y-8 sm:space-y-10">

              {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
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
                    className="
                      group
                      relative
                      pl-10
                      sm:pl-14
                    "
                  >

                    {/* Timeline dot */}

                    <div
                      className="
                        absolute
                        left-0
                        top-7
                        z-10
                        flex
                        h-[17px]
                        w-[17px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#0D1220]
                        bg-indigo-400
                        shadow-[0_0_0_4px_rgba(99,102,241,0.08)]
                      "
                    >
                      <div
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-white
                        "
                      />
                    </div>

                    {/* Card */}

                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-[#111827]
                        transition-all
                        duration-300
                        group-hover:border-white/[0.13]
                        group-hover:bg-[#131B2B]
                      "
                    >

                      {/* Top accent */}

                      <div
                        className="
                          absolute
                          left-0
                          top-0
                          h-px
                          w-0
                          bg-gradient-to-r
                          from-indigo-400
                          to-cyan-400
                          transition-all
                          duration-500
                          group-hover:w-full
                        "
                      />

                      <div className="p-6 sm:p-7">

                        {/* =====================================
                            CARD TOP
                        ====================================== */}

                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-5
                          "
                        >

                          {/* Year */}

                          <div>
                            <p
                              className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-indigo-400
                              "
                            >
                              {item.tag}
                            </p>

                            <p
                              className="
                                mt-2
                                text-2xl
                                font-black
                                tracking-tight
                                text-white
                                sm:text-3xl
                              "
                            >
                              {item.year}
                            </p>
                          </div>

                          {/* Icon */}

                          <div
                            className="
                              flex
                              h-11
                              w-11
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-white/[0.07]
                              bg-white/[0.035]
                              text-slate-400
                              transition-all
                              duration-300
                              group-hover:border-indigo-400/20
                              group-hover:bg-indigo-500/[0.07]
                              group-hover:text-indigo-300
                            "
                          >
                            <Icon size={19} />
                          </div>

                        </div>

                        {/* =====================================
                            TITLE
                        ====================================== */}

                        <h3
                          className="
                            mt-6
                            text-xl
                            font-bold
                            tracking-tight
                            text-white
                            transition-colors
                            duration-300
                            group-hover:text-indigo-200
                            sm:text-2xl
                          "
                        >
                          {item.title}
                        </h3>

                        {/* =====================================
                            DESCRIPTION
                        ====================================== */}

                        <p
                          className="
                            mt-3
                            max-w-2xl
                            text-sm
                            leading-7
                            text-slate-400
                            sm:text-[15px]
                          "
                        >
                          {item.description}
                        </p>

                        {/* =====================================
                            BOTTOM
                        ====================================== */}

                        <div
                          className="
                            mt-6
                            flex
                            items-center
                            justify-between
                            border-t
                            border-white/[0.06]
                            pt-5
                          "
                        >
                          <span
                            className="
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-[0.15em]
                              text-slate-600
                            "
                          >
                            Chapter {index + 1}
                          </span>

                          <ArrowUpRight
                            size={15}
                            className="
                              text-slate-600
                              transition-all
                              duration-300
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:text-indigo-400
                            "
                          />
                        </div>

                      </div>
                    </div>

                  </motion.article>
                );
              })}

            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

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
            mt-20
            border-t
            border-white/[0.07]
            pt-8
            text-center
          "
        >
          <p
            className="
              text-sm
              font-medium
              text-slate-600
            "
          >
            The journey is still being written.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Journey;