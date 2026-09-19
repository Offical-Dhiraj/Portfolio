import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop =
        window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(
        (scrollTop / documentHeight) * 100
      );
    };

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    updateProgress();

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );
    };
  }, []);

  return (
    <div className="
      fixed
      left-0
      top-0
      z-[100]
      h-1
      bg-indigo-500
      transition-[width]
      duration-100
    "
      style={{
        width: `${progress}%`,
      }}
    />
  );
};

export default ScrollProgress;