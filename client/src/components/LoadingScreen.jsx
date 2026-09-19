import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-[#070b14]
    ">
      <div className="text-center">
        <div className="
          mx-auto
          h-12
          w-12
          animate-spin
          rounded-full
          border-4
          border-white/10
          border-t-indigo-400
        " />

        <p className="mt-5 text-sm font-medium text-white/70">
          Loading portfolio...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;