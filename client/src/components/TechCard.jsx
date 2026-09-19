import { motion } from "framer-motion";

const TechCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition
        hover:border-indigo-200
        hover:shadow-lg
      "
    >
      <div className="
        flex
        items-center
        justify-between
        gap-4
      ">
        <div className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-indigo-50
          text-lg
          font-bold
          text-indigo-600
        ">
          {skill.icon || skill.name?.charAt(0)}
        </div>

        <span className="text-xs font-semibold text-slate-400">
          {skill.level || 0}%
        </span>
      </div>

      <h3 className="mt-4 font-bold text-slate-900">
        {skill.name}
      </h3>

      <p className="mt-1 text-xs text-slate-400">
        {skill.category}
      </p>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${skill.level || 0}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-indigo-500"
        />
      </div>
    </motion.div>
  );
};

export default TechCard;