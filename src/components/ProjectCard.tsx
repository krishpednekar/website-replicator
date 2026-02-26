import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  number: string;
  index: number;
}

const ProjectCard = ({ image, title, category, number, index }: ProjectCardProps) => {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.6 + index * 0.1, ease: "easeOut" }}
      className="group block"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-lg bg-card mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-base md:text-lg text-foreground tracking-tight leading-tight">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground tracking-tight">{category}</span>
          <span className="text-sm text-muted-foreground tracking-tight">{number}</span>
        </div>
        <div className="h-px bg-border" />
      </div>
    </motion.a>
  );
};

export default ProjectCard;
