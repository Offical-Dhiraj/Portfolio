import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Braces,
  Layers3,
  Sparkles,
} from "lucide-react";

import SectionBadge from "../components/SectionBadge";
import TechCard from "../components/TechCard";
import { getSkills } from "../services/skillService";

const categoryConfig = {
  Frontend: {
    icon: Code2,
    description: "Building responsive and interactive interfaces.",
  },

  Backend: {
    icon: Server,
    description: "Creating scalable APIs and server-side systems.",
  },

  Database: {
    icon: Database,
    description: "Working with structured and NoSQL data.",
  },

  Language: {
    icon: Braces,
    description: "Programming languages used for development.",
  },

  Tools: {
    icon: Wrench,
    description: "Tools that support development and deployment.",
  },

  Other: {
    icon: Layers3,
    description: "Additional technologies and concepts.",
  },
};

const TechStack = () => {
  const [skills, setSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const response = await getSkills();

        console.log("Skills API response:", response);

        /*
          Backend returns:

          {
            success: true,
            count: 10,
            data: [...]
          }

          Therefore we need response.data
        */

        const skillList = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response?.skills)
          ? response.skills
          : [];

        console.log("Skills loaded:", skillList);

        setSkills(skillList);
      } catch (error) {
        console.error("Failed to load skills:", error);
        setSkills([]);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        skills
          .map((skill) => skill.category)
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skills;
    }

    return skills.filter(
      (skill) => skill.category === activeCategory
    );
  }, [skills, activeCategory]);

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#080B14]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-indigo-600/[0.06]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-20
            h-96
            w-96
            rounded-full
            bg-violet-600/[0.05]
            blur-[140px]
          "
        />
      </div>

      {/* Subtle grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
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

      <div className="container-custom relative z-10">

        {/* ================= HEADER ================= */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionBadge>
            Technologies
          </SectionBadge>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            My technical{" "}
            <span className="gradient-text">
              toolbox.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
            "
          >
            Technologies I use to design, develop,
            integrate and deploy modern full-stack
            applications.
          </p>
        </motion.div>

        {/* ================= CATEGORY FILTER ================= */}

        {!loading && skills.length > 0 && (
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
              delay: 0.1,
            }}
            className="
              mx-auto
              mt-10
              flex
              max-w-3xl
              flex-wrap
              justify-center
              gap-2
            "
          >
            {categories.map((category) => {
              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`
                    rounded-full
                    border
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    transition-all
                    duration-300
                    sm:px-5
                    sm:py-2.5
                    sm:text-sm
                    ${
                      active
                        ? `
                          border-indigo-400/30
                          bg-indigo-500
                          text-white
                          shadow-lg
                          shadow-indigo-500/20
                        `
                        : `
                          border-white/[0.08]
                          bg-white/[0.025]
                          text-slate-400
                          hover:border-white/[0.15]
                          hover:bg-white/[0.05]
                          hover:text-white
                        `
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>
        )}

        {/* ================= SKILLS ================= */}

        <div
          className="
            mt-12
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {loading ? (
            Array.from({
              length: 8,
            }).map((_, index) => (
              <div
                key={index}
                className="
                  h-[178px]
                  animate-pulse
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-[#111827]
                "
              />
            ))
          ) : filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <motion.div
                key={
                  skill._id ||
                  skill.name ||
                  index
                }
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-40px",
                }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(
                    index * 0.04,
                    0.25
                  ),
                }}
              >
                <TechCard skill={skill} />
              </motion.div>
            ))
          ) : (
            <div
              className="
                col-span-full
                rounded-2xl
                border
                border-white/[0.07]
                bg-[#111827]
                px-6
                py-14
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-white/[0.035]
                  text-indigo-400
                "
              >
                <Code2 size={23} />
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  text-slate-400
                "
              >
                No skills found.
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-slate-600
                "
              >
                Add your skills to the portfolio
                database.
              </p>
            </div>
          )}
        </div>

        {/* ================= CATEGORY DESCRIPTION ================= */}

        {activeCategory !== "All" &&
          categoryConfig[activeCategory] && (
            <motion.div
              key={activeCategory}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                mx-auto
                mt-10
                flex
                max-w-2xl
                items-center
                gap-4
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-5
              "
            >
              {(() => {
                const Icon =
                  categoryConfig[
                    activeCategory
                  ].icon;

                return (
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
                    "
                  >
                    <Icon size={18} />
                  </div>
                );
              })()}

              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {activeCategory}
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                  "
                >
                  {
                    categoryConfig[
                      activeCategory
                    ].description
                  }
                </p>
              </div>
            </motion.div>
          )}

        {/* ================= BOTTOM NOTE ================= */}

        {!loading && skills.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mx-auto
              mt-14
              flex
              max-w-2xl
              items-center
              justify-center
              gap-3
              text-center
            "
          >
            <Sparkles
              size={15}
              className="text-indigo-400"
            />

            <p
              className="
                text-xs
                text-slate-600
                sm:text-sm
              "
            >
              I choose technologies based on the
              problem, not just the trend.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TechStack;