import { motion } from "framer-motion";

const HeaderInitials = () => {
  return (
    <div className="flex justify-between items-start px-6 md:px-9 pt-4 md:pt-6">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[80px] md:text-[120px] lg:text-[160px] font-medium leading-none tracking-tight text-foreground"
      >
        K
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-[80px] md:text-[120px] lg:text-[160px] font-medium leading-none tracking-tight text-foreground"
      >
        H
      </motion.span>
    </div>
  );
};

export default HeaderInitials;
