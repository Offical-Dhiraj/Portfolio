import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

import SectionBadge from "../components/SectionBadge";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../services/projectService";

const Projects = () => {
  const [projects, setProjects] =
    useState([]);

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();

        setProjects(
          Array.isArray(data)
            ? data
            : data?.projects || []
        );
      } catch (error) {
        console.error(
          "Failed to load projects:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        projects
          .map((project) => project.category)
          .filter(Boolean)
      ),
    ];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === activeCategory
    );
  }, [projects, activeCategory]);

  return (
    <section
      id="projects"
      className="section section-gray"
    >
      <div className="container-custom">

        {/* HEADER */}
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
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <SectionBadge>
              Projects
            </SectionBadge>

            <h2 className="
              mt-5
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              sm:text-5xl
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
              text-slate-500
            ">
              A collection of projects where I have
              experimented with technologies,
              solved problems and built practical
              applications.
            </p>
          </div>

          <FolderGit2
            size={40}
            className="hidden text-indigo-200 lg:block"
          />
        </motion.div>

        {/* FILTER */}
        {!loading && projects.length > 0 && (
          <div className="
            mt-10
            flex
            flex-wrap
            gap-2
          ">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  transition
                  ${
                    activeCategory === category
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                      : "border border-slate-200 bg-white text-slate-500 hover:border-indigo-200 hover:text-indigo-600"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* PROJECT GRID */}
        <div className="
          mt-10
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        ">
          {loading ? (
            Array.from({ length: 6 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="
                    h-[430px]
                    animate-pulse
                    rounded-3xl
                    bg-white
                  "
                />
              )
            )
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project._id || project.title}
                project={project}
              />
            ))
          ) : (
            <div className="
              col-span-full
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-12
              text-center
            ">
              <p className="text-slate-500">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;