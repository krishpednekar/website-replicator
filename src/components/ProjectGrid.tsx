import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project3 from "@/assets/project-3.webp";

const projects = [
  { image: project1, title: "Shopify Storefronts", category: "Website", number: "01" },
  { image: project2, title: "Shopify Blog", category: "Website", number: "02" },
  { image: project3, title: "Shopify Homepage", category: "Website", number: "03" },
];

const ProjectGrid = () => {
  return (
    <section className="px-6 md:px-9 pb-20 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
