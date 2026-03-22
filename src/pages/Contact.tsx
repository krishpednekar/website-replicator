import { motion } from "framer-motion";
import HeaderInitials from "@/components/HeaderInitials";
import Footer from "@/components/Footer";

const Contact = () => {
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
          Get in touch
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-4"
        >
          <a
            href="mailto:krshpednekar@gmail.com"
            className="block text-lg md:text-2xl lg:text-3xl text-foreground tracking-tight hover:opacity-70 transition-opacity"
          >
            me@krishped.design
          </a>
          <p className="text-muted-foreground text-base md:text-lg tracking-tight">
            Goa, India · Open to freelance
          </p>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
