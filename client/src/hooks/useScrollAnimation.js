import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (options.once !== false) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold: options.threshold || 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.once, options.threshold]);

  return {
    ref,
    isVisible,
  };
};

export default useScrollAnimation;