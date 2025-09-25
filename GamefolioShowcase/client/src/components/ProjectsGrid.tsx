import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

// TODO: Remove mock data when implementing real projects
const mockProjects = [
  {
    id: 1,
    title: "Blash Croyale",
    description: "A fun, exciting, strategic top down 2D game similar to the popular Game Clash Royale!",
    image: "@assets/generated_images/Screenshot 2025-09-25 110052.png",
    technologies: ["Replit"],
    githubLink: "https://github.com/brennankline-cyber/BlashRoyale.git"
  },
];

const allTechnologies = ["All", "Replit"];

export default function ProjectsGrid() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);

  const handleFilterChange = (technology: string) => {
    setSelectedFilter(technology);
    console.log(`Filtering by: ${technology}`);
    
    if (technology === "All") {
      setFilteredProjects(mockProjects);
    } else {
      const filtered = mockProjects.filter(project => 
        project.technologies.includes(technology)
      );
      setFilteredProjects(filtered);
    }
  };

  const handleProjectClick = (projectId: number) => {
    console.log(`Opening project details for ID: ${projectId}`);
    // TODO: Navigate to project detail page
  };

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-projects-title">
            My Games
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-description">
            Try Out Some of the Games I've Made Using AI!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTechnologies.map((tech) => (
            <Button
              key={tech}
              variant={selectedFilter === tech ? "default" : "outline"}
              onClick={() => handleFilterChange(tech)}
              className="transition-all"
              data-testid={`button-filter-${tech.toLowerCase()}`}
            >
              {tech}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubLink={project.githubLink}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg" data-testid="text-no-projects">
              No projects found for the selected technology.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}