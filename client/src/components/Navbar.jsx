import { useState } from "react";

import { Menu, X, Download, ArrowUpRight } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { navigationLinks } from "../data/navigation";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMenu = () => {
        setMobileOpen(false);
    };

    return (
        <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5">
            <div className="container-custom">
                {/* NAVBAR */}
                <div
                    className="
            relative
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#080B14]/80
            shadow-[0_15px_50px_rgba(0,0,0,0.25)]
            backdrop-blur-2xl
          "
                >
                    {/* Subtle top glow */}
                    <div
                        className="
              pointer-events-none
              absolute
              inset-x-20
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-indigo-400/60
              to-transparent
            "
                    />

                    <div
                        className="
              flex
              h-[72px]
              items-center
              justify-between
              px-4
              sm:px-6
            "
                    >
                        {/* LOGO */}
                        <a
                            href="#home"
                            onClick={closeMenu}
                            className="
                group
                flex
                items-center
                gap-3
              "
                        >
                            {/* Logo */}
                            <div
                                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-br
                  from-indigo-500
                  via-violet-500
                  to-cyan-400
                  text-sm
                  font-black
                  text-white
                  shadow-[0_8px_25px_rgba(99,102,241,0.25)]
                  transition
                  duration-300
                  group-hover:scale-105
                  group-hover:shadow-[0_10px_35px_rgba(99,102,241,0.4)]
                "
                            >
                                DK
                                <span
                                    className="
                    absolute
                    inset-0
                    bg-white/10
                    opacity-0
                    transition
                    group-hover:opacity-100
                  "
                                />
                            </div>

                            {/* Name */}
                            <div className="hidden sm:block">
                                <p
                                    className="
                    text-sm
                    font-bold
                    tracking-tight
                    text-white
                  "
                                >
                                    Dhiraj Kumar
                                </p>

                                <p
                                    className="
                    mt-0.5
                    text-[11px]
                    font-medium
                    tracking-wide
                    text-slate-500
                  "
                                >
                                    FULL STACK DEVELOPER
                                </p>
                            </div>
                        </a>

                        {/* DESKTOP NAVIGATION */}
                        <nav
                            className="
                hidden
                items-center
                gap-1
                lg:flex
              "
                        >
                            {navigationLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="
                    group
                    relative
                    rounded-xl
                    px-3.5
                    py-2.5
                    text-[13px]
                    font-medium
                    text-slate-400
                    transition
                    duration-200
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                                >
                                    {link.name}

                                    {/* Hover underline */}
                                    <span
                                        className="
                      absolute
                      bottom-1.5
                      left-1/2
                      h-0.5
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-gradient-to-r
                      from-indigo-400
                      to-violet-400
                      transition-all
                      duration-300
                      group-hover:w-4
                    "
                                    />
                                </a>
                            ))}
                        </nav>

                        {/* DESKTOP ACTION */}
                        <div className="hidden lg:block">
                            <a
                                href="/resume.pdf"
                                download
                                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-indigo-400/20
                  bg-indigo-500/10
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-indigo-200
                  transition
                  duration-300
                  hover:border-indigo-400/40
                  hover:bg-indigo-500/20
                  hover:text-white
                "
                            >
                                Resume
                                <Download
                                    size={15}
                                    className="
                    transition
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                                />
                            </a>
                        </div>

                        {/* MOBILE BUTTON */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen((prev) => !prev)}
                            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                text-slate-300
                transition
                duration-200
                hover:border-indigo-400/30
                hover:bg-indigo-500/10
                hover:text-white
                lg:hidden
              "
                            aria-label="Toggle navigation"
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {/* MOBILE MENU */}
                    <AnimatePresence>
                        {mobileOpen && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    height: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    height: "auto",
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0,
                                }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeOut",
                                }}
                                className="
                  overflow-hidden
                  lg:hidden
                "
                            >
                                <div
                                    className="
                    mx-3
                    mb-3
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-2
                  "
                                >
                                    <nav className="flex flex-col gap-1">
                                        {navigationLinks.map((link, index) => (
                                            <motion.a
                                                key={link.name}
                                                href={link.href}
                                                onClick={closeMenu}
                                                initial={{
                                                    opacity: 0,
                                                    x: -10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.04,
                                                }}
                                                className="
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3.5
                          text-sm
                          font-medium
                          text-slate-400
                          transition
                          hover:bg-white/[0.05]
                          hover:text-white
                        "
                                            >
                                                {link.name}

                                                <ArrowUpRight
                                                    size={15}
                                                    className="
                            text-slate-600
                            transition
                            group-hover:text-indigo-400
                          "
                                                />
                                            </motion.a>
                                        ))}

                                        {/* Mobile Resume */}
                                        <a
                                            href="/resume.pdf"
                                            download="Dhiraj-Kumar-Resume.pdf"
                                            className="
    inline-flex
    items-center
    gap-2
    rounded-xl
    border
    border-indigo-400/20
    bg-indigo-500/10
    px-4
    py-2.5
    text-sm
    font-semibold
    text-slate-200
    transition
    hover:border-indigo-400/40
    hover:bg-indigo-500/15
    hover:text-white
  "
                                        >
                                            Resume
                                            <Download size={17} />
                                        </a>
                                    </nav>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
