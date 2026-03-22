import { motion } from "framer-motion";
import HeaderInitials from "@/components/HeaderInitials";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background max-w-[1440px] mx-auto">
      <HeaderInitials />
      <section className="px-6 md:px-9 pt-24 md:pt-32 lg:pt-40 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[28px] md:text-[42px] lg:text-[56px] font-normal leading-[1.15] tracking-tighter text-foreground mb-12"
        >
          About
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-[720px] space-y-6"
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed tracking-tight">
            I'm Krish, a digital designer based in Goa, India. I specialize in creating meaningful, visually engaging digital experiences that connect brands with their audiences.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed tracking-tight">
            With a focus on clean aesthetics and purposeful design, I help businesses and individuals bring their ideas to life through thoughtful UI/UX design, branding, and visual storytelling.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed tracking-tight">
            Currently open to freelance opportunities. Feel free to{" "}
            <a href="mailto:krshpednekar@gmail.com" className="text-foreground hover:opacity-70 transition-opacity">
              reach out
            </a>.
          </p>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
