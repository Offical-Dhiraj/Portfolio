import { useRef } from "react";

const useMouseTilt = (maxRotation = 8) => {
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    const rotateX =
      (0.5 - y) * maxRotation;

    const rotateY =
      (x - 0.5) * maxRotation;

    element.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
    `;
  };

  const handleMouseLeave = () => {
    const element = ref.current;

    if (!element) return;

    element.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  };

  return {
    ref,
    handleMouseMove,
    handleMouseLeave,
  };
};

export default useMouseTilt;