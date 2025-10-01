import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TRANSITION_DURATION = 2.2; // seconds
const VIDEO_COUNT = 7;
const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(1);
  const [next, setNext] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setNext(current === VIDEO_COUNT ? 1 : current + 1);
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev === VIDEO_COUNT ? 1 : prev + 1));
        setNext(null);
      }, TRANSITION_DURATION * 1000);
    }, INTERVAL);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section className="relative pt-18 mt-18 mb-20 bg-transparent w-full min-h-[700px] flex flex-col justify-center items-center text-center px-4 gap-6 overflow-hidden border-b border-primary neon-border">
      {/* Videos Crossfade */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.video
          key={current}
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 1 }}
          animate={{ opacity: next ? 0 : 1 }}
          transition={{ opacity: { duration: TRANSITION_DURATION, ease: "easeInOut" } }}
          className="absolute w-full h-full object-cover"
        >
          <source src={`https://guswebappstorage.blob.core.windows.net/resume-portfolio/hero${current}.mp4`} type="video/mp4" />
        </motion.video>
        {next && (
          <motion.video
            key={next}
            autoPlay 
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ opacity: { duration: TRANSITION_DURATION, ease: "easeInOut" } }}
            className="absolute w-full h-full object-cover"
          >
            <source src={`https://guswebappstorage.blob.core.windows.net/resume-portfolio/hero${next}.mp4`} type="video/mp4" />
          </motion.video>
        )}
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl backdrop-blur-sm p-8 flex flex-col items-center gap-6 relative z-10">
        <img
          src="/me.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-primary border-[#0ff0fc] object-cover"
        />
        <h1 className="text-4xl md:text-4xl break-words glitch-pink text-white">
          Gus Velazquez — Software Engineer
        </h1>
        <p className="mt-4 text-lg max-w-xl neon-text text-white">
          Building scalable apps and pixel-perfect UIs with React, C#, Next Js, and Azure.
        </p>
      </div>
    </section>
  );
}
