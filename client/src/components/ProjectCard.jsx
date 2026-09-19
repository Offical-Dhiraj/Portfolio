import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/[0.08]
        bg-[#111827]
        shadow-[0_15px_50px_rgba(0,0,0,0.2)]
        transition-all
        duration-300
        hover:border-indigo-400/25
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
      "
    >
      {/* PROJECT IMAGE */}
      <div className="
        relative
        aspect-video
        overflow-hidden
        bg-[#0B1120]
      ">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Image Overlay */}
            <div className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#080B14]/80
              via-transparent
              to-transparent
              opacity-80
            " />

            {/* Top Glow */}
            <div className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-32
              w-32
              rounded-full
              bg-indigo-500/20
              blur-3xl
              transition-opacity
              duration-500
              group-hover:bg-indigo-500/30
            " />
          </>
        ) : (
          <div className="
            flex
            h-full
            w-full
            items-center
            justify-center
            bg-gradient-to-br
            from-indigo-500/10
            via-violet-500/10
            to-cyan-500/10
          ">
            <div className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              shadow-2xl
              backdrop-blur-xl
            ">
              <span className="
                text-3xl
                font-black
                gradient-text
              ">
                DK
              </span>
            </div>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="
            absolute
            left-4
            top-4
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            border-indigo-400/20
            bg-[#0B1120]/80
            px-3
            py-1.5
            text-xs
            font-bold
            text-indigo-300
            shadow-lg
            backdrop-blur-md
          ">
            <Sparkles size={13} />
            Featured
          </div>
        )}

        {/* Category */}
        <div className="
          absolute
          bottom-4
          left-4
          rounded-full
          border
          border-white/10
          bg-[#0B1120]/80
          px-3
          py-1.5
          text-[11px]
          font-bold
          uppercase
          tracking-wider
          text-slate-300
          backdrop-blur-md
        ">
          {project.category || "Project"}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* Title */}
        <h3 className="
          text-xl
          font-bold
          tracking-tight
          text-white
          transition-colors
          duration-300
          group-hover:text-indigo-300
        ">
          {project.title}
        </h3>

        {/* Description */}
        <p className="
          mt-3
          line-clamp-3
          text-sm
          leading-6
          text-slate-400
        ">
          {project.description}
        </p>

        {/* Technologies */}
        {(project.technologies || []).length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {(project.technologies || [])
              .slice(0, 5)
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
                    transition
                    duration-300
                    group-hover:border-indigo-400/10
                  "
                >
                  {technology}
                </span>
              ))}
          </div>
        )}

        {/* FOOTER */}
        <div className="
          mt-6
          flex
          min-h-[42px]
          items-center
          gap-3
          border-t
          border-white/[0.07]
          pt-5
        ">
          {/* GitHub */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                px-3.5
                py-2
                text-sm
                font-semibold
                text-slate-300
                transition-all
                duration-300
                hover:border-white/15
                hover:bg-white/[0.07]
                hover:text-white
              "
            >
              <FaGithub size={16} />
              Code
            </a>
          )}

          {/* Live Demo */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="
                ml-auto
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-indigo-500
                to-violet-600
                px-4
                py-2
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-indigo-500/15
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-indigo-500/30
              "
            >
              Live Demo
              <ExternalLink size={15} />
            </a>
          )}

          {/* No Links */}
          {!project.liveUrl && !project.githubUrl && (
            <span className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-slate-500
            ">
              View Project
              <ArrowUpRight size={16} />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;