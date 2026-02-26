import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const InfoBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const denverTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/Denver",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(denverTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.05, delayChildren: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 px-6 md:px-9 mt-2"
    >
      {/* Digital Designer */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <a href="/" className="text-muted-foreground text-sm md:text-base leading-tight tracking-tight hover:text-foreground transition-colors">
          <span className="block">Digital</span>
          <span className="block">Designer</span>
        </a>
      </motion.div>

      {/* Availability */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="space-y-2">
        <p className="text-muted-foreground text-sm md:text-base tracking-tight">Availability</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
          <span className="text-sm md:text-base text-foreground tracking-tight">Open to freelance</span>
        </div>
        <a
          href="mailto:me@connormurphy.design"
          className="flex items-center gap-1.5 text-sm md:text-base text-foreground tracking-tight hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Reach out
        </a>
      </motion.div>

      {/* Location */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="space-y-1">
        <p className="text-muted-foreground text-sm md:text-base tracking-tight">Location</p>
        <p className="text-sm md:text-base text-foreground tracking-tight">Denver, CO</p>
        <p className="text-sm md:text-base text-foreground tracking-tight">39.7392° N, 104.9903° W</p>
        <p className="text-sm md:text-base text-foreground tracking-tight tabular-nums">{time}</p>
      </motion.div>

      {/* Navigation */}
      <motion.nav variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-col items-end gap-1">
        {["About", "Play", "Contact"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-sm md:text-base text-foreground tracking-tight hover:opacity-70 transition-opacity"
          >
            {item}
          </a>
        ))}
      </motion.nav>
    </motion.div>
  );
};

export default InfoBar;
