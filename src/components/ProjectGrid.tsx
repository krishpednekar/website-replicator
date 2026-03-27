import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface StarredRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
}

const ProjectGrid = () => {
  const [repos, setRepos] = useState<StarredRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/krishpednekar/starred")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="px-6 md:px-9 pb-20 md:pb-32">
        <p className="text-muted-foreground text-sm">Loading projects...</p>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-9 pb-20 md:pb-32">
      <div className="flex flex-col">
        {repos.map((repo, index) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.6 + index * 0.1, ease: "easeOut" }}
            className="group flex items-center justify-between py-5 border-b border-border transition-colors duration-300 hover:bg-accent/10"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-sm text-muted-foreground tracking-tight font-mono">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg md:text-2xl lg:text-3xl tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
                {repo.name.replace(/-/g, " ")}
              </h3>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-accent" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
