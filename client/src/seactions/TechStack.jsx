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
                const data = await getSkills();

                setSkills(
                    Array.isArray(data)
                        ? data
                        : data?.skills || []
                );
            } catch (error) {
                console.error("Failed to load skills:", error);
            } finally {
                setLoading(false);
            }
        };

        loadSkills();
    }, []);

    const categories = useMemo(() => {
        return [
            "All",
            ...new Set(
                skills
                    .map((skill) => skill.category)
                    .filter(Boolean)
            ),
        ];
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
            className="relative overflow-hidden bg-[#080B14] py-20 sm:py-24"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px]" />

                <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[110px]" />
            </div>

            {/* Subtle Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(148,163,184,0.035) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(148,163,184,0.035) 1px, transparent 1px)
                    `,
                    backgroundSize: "45px 45px",
                }}
            />

            <div className="container-custom relative z-10">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <SectionBadge>
                        Technologies
                    </SectionBadge>

                    <h2 className="
                        mt-5
                        text-4xl
                        font-black
                        tracking-tight
                        text-white
                        sm:text-5xl
                        lg:text-6xl
                    ">
                        My technical
                        <span className="gradient-text">
                            {" "}toolbox.
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
                        A practical stack I use to design, develop,
                        integrate and deploy modern full-stack applications.
                    </p>
                </motion.div>

                {/* CATEGORY FILTER */}
                {!loading && skills.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="
                            mx-auto
                            mt-10
                            flex
                            max-w-4xl
                            flex-wrap
                            justify-center
                            gap-2
                        "
                    >
                        {categories.map((category) => {
                            const isActive =
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
                                        px-5
                                        py-2.5
                                        text-sm
                                        font-semibold
                                        transition-all
                                        duration-300
                                        ${
                                            isActive
                                                ? `
                                                    border-indigo-400/30
                                                    bg-gradient-to-r
                                                    from-indigo-500
                                                    to-violet-600
                                                    text-white
                                                    shadow-lg
                                                    shadow-indigo-500/20
                                                `
                                                : `
                                                    border-white/[0.08]
                                                    bg-white/[0.03]
                                                    text-slate-400
                                                    hover:border-indigo-400/30
                                                    hover:bg-white/[0.06]
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

                {/* SKILLS GRID */}
                <div className="
                    mt-12
                    grid
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                ">
                    {loading ? (
                        Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={index}
                                className="
                                    h-40
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
                                key={skill._id || skill.name}
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
                                    margin: "-50px",
                                }}
                                transition={{
                                    duration: 0.45,
                                    delay: Math.min(index * 0.05, 0.3),
                                }}
                            >
                                <TechCard skill={skill} />
                            </motion.div>
                        ))
                    ) : (
                        <div className="
                            col-span-full
                            rounded-3xl
                            border
                            border-white/[0.08]
                            bg-[#111827]
                            p-10
                            text-center
                        ">
                            <div className="
                                mx-auto
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-indigo-500/10
                                text-indigo-400
                            ">
                                <Code2 size={24} />
                            </div>

                            <p className="
                                mt-4
                                text-sm
                                text-slate-400
                            ">
                                Skills will appear here once they are
                                added to the portfolio database.
                            </p>
                        </div>
                    )}
                </div>

                {/* CATEGORY DESCRIPTION */}
                {activeCategory !== "All" &&
                    categoryConfig[activeCategory] && (
                        <motion.div
                            key={activeCategory}
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.35,
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
                                border-indigo-400/10
                                bg-indigo-500/[0.06]
                                p-5
                            "
                        >
                            {(() => {
                                const Icon =
                                    categoryConfig[
                                        activeCategory
                                    ].icon;

                                return (
                                    <div className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-indigo-400/10
                                        bg-indigo-500/10
                                        text-indigo-400
                                    ">
                                        <Icon size={20} />
                                    </div>
                                );
                            })()}

                            <div>
                                <p className="
                                    text-sm
                                    font-bold
                                    text-white
                                ">
                                    {activeCategory}
                                </p>

                                <p className="
                                    mt-1
                                    text-sm
                                    leading-6
                                    text-slate-400
                                ">
                                    {
                                        categoryConfig[
                                            activeCategory
                                        ].description
                                    }
                                </p>
                            </div>
                        </motion.div>
                    )}

                {/* BOTTOM TECH PHILOSOPHY */}
                {!loading && skills.length > 0 && (
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
                            delay: 0.2,
                        }}
                        className="
                            mx-auto
                            mt-14
                            flex
                            max-w-3xl
                            items-center
                            gap-4
                            rounded-2xl
                            border
                            border-white/[0.07]
                            bg-white/[0.025]
                            p-5
                            sm:p-6
                        "
                    >
                        <div className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-violet-500/10
                            text-violet-400
                        ">
                            <Sparkles size={20} />
                        </div>

                        <div>
                            <p className="
                                text-sm
                                font-semibold
                                text-white
                            ">
                                More than just a tech stack.
                            </p>

                            <p className="
                                mt-1
                                text-sm
                                leading-6
                                text-slate-500
                            ">
                                I focus on choosing the right technology
                                for the problem, not simply using the
                                newest technology available.
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default TechStack;