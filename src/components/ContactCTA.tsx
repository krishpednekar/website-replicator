import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section className="px-6 md:px-9 py-16 md:py-24 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-muted-foreground text-lg md:text-2xl lg:text-3xl tracking-tight"
      >
        Interested in working together?
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 flex flex-col items-center gap-2"
      >
        <a
          href="mailto:krshpednekar@gmail.com"
          className="text-lg md:text-2xl lg:text-3xl text-foreground tracking-tight hover:opacity-70 transition-opacity"
        >
          me@krishped.design
        </a>
        <a
          href="https://www.instagram.com/krshped?igsh=Z3JneDNhcm93bG1r&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-2xl lg:text-3xl text-foreground tracking-tight hover:opacity-70 transition-opacity"
        >
          @krshped
        </a>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
