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
      <motion.a
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        href="mailto:me@connormurphy.design"
        className="inline-block mt-4 text-lg md:text-2xl lg:text-3xl text-foreground tracking-tight hover:opacity-70 transition-opacity"
      >
        me@connormurphy.design
      </motion.a>
    </section>
  );
};

export default ContactCTA;
