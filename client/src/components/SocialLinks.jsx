import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const SocialLinks = ({
  github = "https://github.com/Offical-Dhiraj",
  linkedin = "#",
  email = "mailto:dhirajkumar@example.com",
}) => {
  const links = [
    {
      name: "GitHub",
      href: github,
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: linkedin,
      icon: Linkedin,
    },
    {
      name: "Email",
      href: email,
      icon: Mail,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.name}
            href={link.href}
            target={
              link.name === "Email"
                ? undefined
                : "_blank"
            }
            rel={
              link.name === "Email"
                ? undefined
                : "noopener noreferrer"
            }
            aria-label={link.name}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-600
              transition
              hover:-translate-y-1
              hover:border-indigo-200
              hover:bg-indigo-50
              hover:text-indigo-600
            "
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;