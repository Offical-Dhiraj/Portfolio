import { ArrowUpRight } from "lucide-react";

const Button = ({
  children,
  href,
  variant = "primary",
  icon = true,
  className = "",
  ...props
}) => {
  const classes = `
    ${
      variant === "primary"
        ? "primary-button"
        : "secondary-button"
    }
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}

        {icon && <ArrowUpRight size={18} />}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}

      {icon && <ArrowUpRight size={18} />}
    </button>
  );
};

export default Button;