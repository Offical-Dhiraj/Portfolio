import { motion } from "framer-motion";

import { Mail, ArrowUpRight, ExternalLink } from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import SectionBadge from "../components/SectionBadge";

const Contact = () => {
  const contactLinks = [
    {
      title: "Email",
      label: "Let's talk directly",
      value: "dhirajmalakar19@gmail.com",
      href: "mailto:dhirajmalakar19@gmail.com",
      icon: Mail,
      type: "email",
    },
    {
      title: "GitHub",
      label: "Explore my work",
      value: "github.com/Offical-Dhiraj",
      href: "https://github.com/Offical-Dhiraj",
      icon: FaGithub,
      type: "social",
    },
    {
      title: "LinkedIn",
      label: "Let's connect",
      value: "linkedin.com/in/officail-dhirajkr",
      href: "https://www.linkedin.com/in/officail-dhirajkr/",
      icon: FaLinkedinIn,
      type: "social",
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#0D1220]
        py-24
        sm:py-28
        lg:py-32
        scroll-mt-20
      "
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-indigo-600/[0.07]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-10
            h-96
            w-96
            rounded-full
            bg-violet-600/[0.06]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-64
            w-64
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/[0.025]
            blur-[120px]
          "
        />
      </div>

      {/* Background Grid */}
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
        {/* Header */}
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
          <SectionBadge>Contact</SectionBadge>

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
            Let's connect and
            <span className="gradient-text"> build.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
            "
          >
            Have an opportunity, project idea or simply want to connect? Find me
            through any of the platforms below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-5xl
            gap-5
            md:grid-cols-3
          "
        >
          {contactLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.type === "social" ? "_blank" : undefined}
                rel={item.type === "social" ? "noopener noreferrer" : undefined}
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-[#0F1524]
                  p-7
                  transition-all
                  duration-300
                  hover:border-indigo-400/20
                  hover:bg-[#121A2B]
                "
              >
                {/* Hover Top Line */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-indigo-400
                    via-violet-400
                    to-cyan-400
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.035]
                    text-indigo-300
                    transition-all
                    duration-300
                    group-hover:border-indigo-400/20
                    group-hover:bg-indigo-500/10
                    group-hover:text-indigo-200
                  "
                >
                  <Icon size={24} />
                </div>

                {/* Label */}
                <p
                  className="
                    mt-7
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-indigo-400
                  "
                >
                  {item.title}
                </p>

                {/* Heading */}
                <h3
                  className="
                    mt-2
                    text-xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  {item.label}
                </h3>

                {/* Value */}
                <p
                  className="
                    mt-3
                    truncate
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    group-hover:text-slate-400
                  "
                >
                  {item.value}
                </p>

                {/* Bottom */}
                <div
                  className="
                    mt-7
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
                      text-xs
                      font-semibold
                      text-slate-600
                      transition-colors
                      duration-300
                      group-hover:text-indigo-400
                    "
                  >
                    Open profile
                  </span>

                  <ArrowUpRight
                    size={17}
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
              </motion.a>
            );
          })}
        </div>

        {/* Main CTA */}
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
            delay: 0.15,
          }}
          className="
            relative
            mx-auto
            mt-10
            max-w-5xl
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.08]
            bg-gradient-to-r
            from-[#111827]
            via-[#12182A]
            to-[#111827]
            px-6
            py-8
            sm:px-9
          "
        >
          {/* CTA Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-indigo-500/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  text-slate-300
                "
              >
                Open to opportunities
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500
                "
              >
                Software Development · Full Stack · MERN
              </p>
            </div>

            <a
              href="mailto:dhirajmalakar19@gmail.com"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
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
                shadow-lg
                shadow-indigo-500/15
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-indigo-500/30
              "
            >
              <Mail size={17} />
              Send me an email
              <ExternalLink size={15} />
            </a>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
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
            delay: 0.2,
          }}
          className="
            mt-10
            text-center
            text-xs
            text-slate-600
          "
        >
          Always open to interesting projects, collaborations and opportunities.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
