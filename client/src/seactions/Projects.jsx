import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Star,
  GitFork,
  Code2,
  Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import SectionBadge from "../components/SectionBadge";
import { getGithubRepos } from "../services/github";

const preferredRepositories = [
  "ai-learning-platform",
  "Mini-social-post",
  "mini-social-post",
  "portfolio",
  "dhiraj-ai-portfolio",
];

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================================
  // LOAD GITHUB REPOSITORIES
  // =========================================

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getGithubRepos();

        console.log("GitHub repositories:", data);

        const repositories = Array.isArray(data)
          ? data
          : data?.repos ||
            data?.repositories ||
            data?.data ||
            [];

        setRepos(repositories);
      } catch (err) {
        console.error(
          "Failed to load GitHub repositories:",
          err
        );

        setError(
          "Unable to load GitHub repositories."
        );
      } finally {
        setLoading(false);
      }
    };

    loadRepositories();
  }, []);

  // =========================================
  // SELECT ONLY IMPORTANT PROJECTS
  // =========================================

  const selectedProjects = (() => {
    if (!repos.length) {
      return [];
    }

    const selected = [];

    // First: preferred repositories
    preferredRepositories.forEach((preferredName) => {
      const repository = repos.find(
        (repo) =>
          repo.name?.toLowerCase() ===
          preferredName.toLowerCase()
      );

      if (
        repository &&
        !selected.some(
          (item) => item.id === repository.id
        )
      ) {
        selected.push(repository);
      }
    });

    // If fewer than 3, fill from GitHub
    repos.forEach((repository) => {
      if (selected.length >= 3) {
        return;
      }

      const alreadySelected = selected.some(
        (item) => item.id === repository.id
      );

      if (!alreadySelected) {
        selected.push(repository);
      }
    });

    return selected.slice(0, 3);
  })();

  // =========================================
  // PROJECT DESCRIPTION
  // =========================================

  const getProjectDescription = (repo) => {
    if (repo.name?.toLowerCase() === "ai-learning-platform") {
      return "AI-powered exam preparation platform that generates personalized questions, detects weak topics and creates adaptive study plans.";
    }

    if (
      repo.name?.toLowerCase() === "mini-social-post"
    ) {
      return "Full-stack social posting application with authentication, content creation, image uploads and REST API integration.";
    }

    if (
      repo.name?.toLowerCase().includes("portfolio")
    ) {
      return "Modern developer portfolio built to showcase projects, technical skills, experience and full-stack development capabilities.";
    }

    return (
      repo.description ||
      "A full-stack project built as part of my software development journey."
    );
  };

  // =========================================
  // PROJECT LABEL
  // =========================================

  const getProjectLabel = (repo, index) => {
    if (index === 0) {
      return "Featured Build";
    }

    if (index === 1) {
      return "Full Stack";
    }

    return "Project";
  };

  // =========================================
  // LOADING
  // =========================================

  if (loading) {
    return (
      <section
        id="projects"
        className="
          relative
          overflow-hidden
          bg-[#080B14]
          py-20
          sm:py-24
        "
      >
        <div className="container-custom">

          <div className="mx-auto max-w-3xl text-center">
            <div className="
              mx-auto
              h-7
              w-28
              animate-pulse
              rounded-full
              bg-white/[0.06]
            " />

            <div className="
              mx-auto
              mt-6
              h-14
              max-w-xl
              animate-pulse
              rounded-xl
              bg-white/[0.05]
            " />

            <div className="
              mx-auto
              mt-5
              h-12
              max-w-2xl
              animate-pulse
              rounded-xl
              bg-white/[0.04]
            " />
          </div>

          <div className="
            mt-14
            grid
            gap-5
            lg:grid-cols-3
          ">
            {Array.from({ length: 3 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="
                    h-[360px]
                    animate-pulse
                    rounded-3xl
                    border
                    border-white/[0.06]
                    bg-[#111827]
                  "
                />
              )
            )}
          </div>

        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#080B14]
        py-20
        sm:py-24
      "
    >
      {/* =========================================
          BACKGROUND GLOWS
      ========================================== */}

      <div className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      ">
        <div className="
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-indigo-600/10
          blur-[130px]
        " />

        <div className="
          absolute
          -right-40
          bottom-10
          h-96
          w-96
          rounded-full
          bg-violet-600/10
          blur-[140px]
        " />

        <div className="
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/[0.025]
          blur-[130px]
        " />
      </div>

      {/* =========================================
          GRID
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
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
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-3xl">

            <SectionBadge>
              Selected Work
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
              Things I've
              <span className="gradient-text">
                {" "}built.
              </span>
            </h2>

            <p className="
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
            ">
              A curated selection of projects that
              demonstrate my experience with full-stack
              development, modern frontend engineering
              and Generative AI.
            </p>

          </div>

          {/* GITHUB PROFILE */}

          <a
            href="https://github.com/Offical-Dhiraj"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-xl
              border
              border-white/[0.08]
              bg-white/[0.03]
              px-5
              py-3
              text-sm
              font-bold
              text-slate-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-indigo-400/20
              hover:bg-indigo-500/[0.06]
              hover:text-white
            "
          >
            <FaGithub size={19} />

            View GitHub

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </motion.div>

        {/* =======================================
            ERROR
        ======================================== */}

        {error && (
          <div className="
            mt-10
            rounded-2xl
            border
            border-red-400/10
            bg-red-400/[0.05]
            p-6
            text-center
            text-sm
            text-red-300
          ">
            {error}
          </div>
        )}

        {/* =======================================
            PROJECTS
        ======================================== */}

        {!error && selectedProjects.length > 0 && (
          <div className="
            mt-14
            grid
            gap-5
            lg:grid-cols-3
          ">

            {selectedProjects.map(
              (repo, index) => (
                <motion.article
                  key={repo.id || repo.name}
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
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/[0.08]
                    bg-[#111827]
                    p-6
                    shadow-[0_15px_50px_rgba(0,0,0,0.22)]
                    transition-all
                    duration-300
                    hover:border-indigo-400/25
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                  "
                >

                  {/* TOP ACCENT */}

                  <div className="
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-indigo-500
                    to-transparent
                    opacity-60
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  " />

                  {/* GLOW */}

                  <div className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-44
                    w-44
                    rounded-full
                    bg-indigo-500/[0.04]
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-indigo-500/[0.10]
                  " />

                  <div className="relative">

                    {/* =================================
                        CARD HEADER
                    ================================== */}

                    <div className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    ">

                      <div className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-indigo-400/10
                        bg-indigo-500/[0.08]
                        text-indigo-400
                      ">
                        <Code2 size={21} />
                      </div>

                      <span className="
                        rounded-full
                        border
                        border-white/[0.07]
                        bg-white/[0.03]
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-slate-500
                      ">
                        {getProjectLabel(
                          repo,
                          index
                        )}
                      </span>

                    </div>

                    {/* =================================
                        PROJECT NAME
                    ================================== */}

                    <h3 className="
                      mt-7
                      min-h-[58px]
                      text-2xl
                      font-black
                      tracking-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-indigo-300
                    ">
                      {repo.name}
                    </h3>

                    {/* =================================
                        DESCRIPTION
                    ================================== */}

                    <p className="
                      mt-3
                      min-h-[96px]
                      text-sm
                      leading-7
                      text-slate-400
                    ">
                      {getProjectDescription(repo)}
                    </p>

                    {/* =================================
                        LANGUAGE
                    ================================== */}

                    {repo.language && (
                      <div className="mt-5">

                        <span className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-white/[0.07]
                          bg-white/[0.03]
                          px-3
                          py-1.5
                          text-xs
                          font-semibold
                          text-slate-300
                        ">
                          <span className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-indigo-400
                          " />

                          {repo.language}
                        </span>

                      </div>
                    )}

                    {/* =================================
                        STATS
                    ================================== */}

                    <div className="
                      mt-6
                      flex
                      items-center
                      gap-5
                      text-xs
                      text-slate-500
                    ">

                      <span className="
                        inline-flex
                        items-center
                        gap-1.5
                      ">
                        <Star size={14} />

                        {repo.stargazers_count || 0}
                      </span>

                      <span className="
                        inline-flex
                        items-center
                        gap-1.5
                      ">
                        <GitFork size={14} />

                        {repo.forks_count || 0}
                      </span>

                    </div>

                    {/* =================================
                        DIVIDER
                    ================================== */}

                    <div className="
                      my-6
                      h-px
                      bg-white/[0.07]
                    " />

                    {/* =================================
                        ACTION
                    ================================== */}

                    <a
                      href={
                        repo.html_url ||
                        repo.url ||
                        `https://github.com/Offical-Dhiraj/${repo.name}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/link
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.035]
                        px-4
                        py-3
                        text-sm
                        font-bold
                        text-slate-300
                        transition-all
                        duration-300
                        hover:border-indigo-400/20
                        hover:bg-indigo-500/[0.07]
                        hover:text-white
                      "
                    >
                      <FaGithub size={17} />

                      View Repository

                      <ArrowUpRight
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover/link:-translate-y-0.5
                          group-hover/link:translate-x-0.5
                        "
                      />
                    </a>

                  </div>
                </motion.article>
              )
            )}

          </div>
        )}

        {/* =======================================
            NO PROJECTS
        ======================================== */}

        {!error &&
          !loading &&
          selectedProjects.length === 0 && (
            <div className="
              mt-14
              rounded-3xl
              border
              border-white/[0.08]
              bg-[#111827]
              p-12
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
                <Code2 size={25} />
              </div>

              <h3 className="
                mt-5
                text-lg
                font-bold
                text-white
              ">
                Projects are being updated
              </h3>

              <p className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-slate-500
              ">
                Explore my GitHub profile to see the
                latest projects and experiments.
              </p>

              <a
                href="https://github.com/Offical-Dhiraj"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-indigo-500
                  to-violet-600
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                "
              >
                Visit GitHub

                <ExternalLink size={16} />
              </a>

            </div>
          )}

        {/* =======================================
            BOTTOM MESSAGE
        ======================================== */}

        {selectedProjects.length > 0 && (
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
              delay: 0.3,
            }}
            className="
              mt-12
              flex
              flex-col
              items-center
              justify-center
              gap-4
              text-center
              sm:flex-row
            "
          >
            <div className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-slate-500
            ">
              <Sparkles
                size={15}
                className="text-indigo-400"
              />

              More projects and experiments are available
              on GitHub.
            </div>

            <a
              href="https://github.com/Offical-Dhiraj"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-indigo-400
                transition
                hover:text-indigo-300
              "
            >
              Explore all repositories

              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Projects;