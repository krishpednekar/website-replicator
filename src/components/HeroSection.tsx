import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const text = "I'm Krish, a digital designer based in Goa, India. Currently working as a freelancer, creating meaningful, visually engaging digital experiences.";

  const words = text.split(" ");

  return (
    <section className="px-6 md:px-9 pt-24 md:pt-32 lg:pt-40 pb-8">
      <div className="max-w-[1200px]">
        <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-normal leading-[1.15] tracking-tighter text-foreground">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.5 + i * 0.03,
                ease: "easeOut",
              }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mt-12 md:mt-16 border-t border-border pt-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm md:text-base text-foreground tracking-tight">Selected work</span>
          <ArrowDown className="w-4 h-4 text-foreground" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
