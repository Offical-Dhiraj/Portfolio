import { motion } from "framer-motion";

import {
  Download,
  FileText,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

const Resume = () => {
  const highlights = [
    "Full Stack MERN Development",
    "React & modern frontend development",
    "Node.js & REST API development",
    "MongoDB & database integration",
    "Generative AI integration",
    "DSA & problem solving",
  ];

  return (
    <section
      id="resume"
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
          bottom-0
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
            MAIN CARD
        ======================================================= */}

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.08]
            bg-[#0F1524]
            shadow-[0_30px_100px_rgba(0,0,0,0.3)]
          "
        >
          {/* Top gradient line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-indigo-400
              to-transparent
            "
          />

          <div
            className="
              grid
              gap-8
              p-6
              sm:p-8
              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-12
              lg:p-12
            "
          >

            {/* ===================================================
                LEFT CONTENT
            =================================================== */}

            <div className="flex flex-col justify-center">

              {/* Badge */}

              <div
                className="
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-indigo-400/15
                  bg-indigo-500/10
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-indigo-300
                "
              >
                <FileText size={13} />
                My Resume
              </div>

              {/* Heading */}

              <h2
                className="
                  mt-5
                  max-w-xl
                  text-3xl
                  font-black
                  leading-[1.08]
                  tracking-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                A closer look at my{" "}
                <span className="gradient-text">
                  skills & experience.
                </span>
              </h2>

              {/* Description */}

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-base
                "
              >
                Explore my resume to see my technical
                skills, projects, education and the
                technologies I work with as a Full Stack
                MERN Developer.
              </p>

              {/* Buttons */}

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-3
                "
              >
                {/* Download */}

                <motion.a
                  href="/resume.pdf"
                  download="Dhiraj-Kumar-Resume.pdf"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-indigo-500
                    to-violet-500
                    px-5
                    py-3
                    text-xs
                    font-bold
                    text-white
                    shadow-lg
                    shadow-indigo-500/20
                    transition
                    hover:shadow-indigo-500/30
                  "
                >
                  <Download size={16} />
                  Download Resume
                </motion.a>

                {/* View */}

                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -2,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    text-xs
                    font-bold
                    text-slate-200
                    transition
                    hover:border-indigo-400/20
                    hover:bg-indigo-500/10
                    hover:text-white
                  "
                >
                  <Eye size={16} />
                  View Resume
                  <ArrowUpRight size={13} />
                </motion.a>
              </div>

              {/* Availability */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    relative
                    flex
                    h-2
                    w-2
                  "
                >
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-emerald-400
                    "
                  />
                </span>

                <span className="text-[10px] font-medium text-slate-500">
                  Open to software development opportunities
                </span>
              </div>
            </div>

            {/* ===================================================
                RIGHT CONTENT
            =================================================== */}

            <div
              className="
                relative
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#111827]/70
                p-5
                backdrop-blur-xl
                sm:p-6
              "
            >
              {/* Header */}

              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-indigo-400
                    "
                  >
                    Resume Snapshot
                  </p>

                  <h3 className="mt-1 text-lg font-black text-white">
                    What I bring
                  </h3>
                </div>

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-indigo-500/10
                    text-indigo-400
                  "
                >
                  <BriefcaseBusiness size={16} />
                </div>
              </div>

              {/* Divider */}

              <div className="my-5 h-px bg-white/[0.07]" />

              {/* Highlights */}

              <div className="space-y-2.5">
                {highlights.map(
                  (highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{
                        opacity: 0,
                        x: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay:
                          index * 0.06,
                      }}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-transparent
                        bg-white/[0.025]
                        px-3
                        py-2.5
                        transition
                        hover:border-indigo-400/10
                        hover:bg-indigo-500/[0.05]
                      "
                    >
                      <div
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-emerald-400/10
                          text-emerald-400
                        "
                      >
                        <CheckCircle2
                          size={14}
                        />
                      </div>

                      <span
                        className="
                          text-xs
                          font-medium
                          text-slate-300
                          transition
                          group-hover:text-white
                        "
                      >
                        {highlight}
                      </span>
                    </motion.div>
                  )
                )}
              </div>

              {/* Bottom Highlight */}

              <div
                className="
                  mt-5
                  rounded-xl
                  border
                  border-indigo-400/10
                  bg-gradient-to-r
                  from-indigo-500/[0.07]
                  to-violet-500/[0.05]
                  p-3
                "
              >
                <div className="flex items-start gap-2.5">
                  <Sparkles
                    size={15}
                    className="
                      mt-0.5
                      shrink-0
                      text-indigo-400
                    "
                  />

                  <p className="text-[10px] leading-5 text-slate-500">
                    Focused on building scalable,
                    user-friendly applications and
                    continuously improving my software
                    engineering skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;