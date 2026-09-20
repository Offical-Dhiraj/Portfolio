import { motion } from "framer-motion";

const TechCard = ({ skill }) => {
  const level = Math.min(
    Math.max(Number(skill?.level) || 0, 0),
    100
  );

  return (
    <motion.article
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-[#111827]
        p-5
        transition-all
        duration-300
        hover:border-indigo-400/20
        hover:bg-[#131B2B]
      "
    >
      {/* subtle hover line */}

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

      {/* TOP */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >
        {/* Icon */}

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-white/[0.07]
            bg-white/[0.035]
            text-sm
            font-bold
            text-indigo-300
            transition-all
            duration-300
            group-hover:border-indigo-400/20
            group-hover:bg-indigo-500/10
          "
        >
          {skill?.icon ||
            skill?.name?.charAt(0) ||
            "•"}
        </div>

        {/* Level */}

        <span
          className="
            text-xs
            font-semibold
            text-slate-500
          "
        >
          {level}%
        </span>
      </div>

      {/* NAME */}

      <h3
        className="
          mt-5
          text-base
          font-bold
          tracking-tight
          text-white
          transition-colors
          duration-300
          group-hover:text-indigo-300
        "
      >
        {skill?.name || "Technology"}
      </h3>

      {/* CATEGORY */}

      <p
        className="
          mt-1
          text-xs
          font-medium
          text-slate-500
        "
      >
        {skill?.category || "Technology"}
      </p>

      {/* PROGRESS */}

      <div className="mt-5">
        <div
          className="
            h-1
            overflow-hidden
            rounded-full
            bg-white/[0.06]
          "
        >
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: `${level}%`,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-indigo-500
              to-violet-500
            "
          />
        </div>
      </div>
    </motion.article>
  );
};

export default TechCard;