import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  onClick?: () => void;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
  onClick
}: ProjectCardProps) {
  return (
    <Card className="group hover-elevate cursor-pointer transition-all duration-300" onClick={onClick}>
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              {demoLink && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="bg-background/80 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Opening demo for ${title}`);
                  }}
                  data-testid={`button-demo-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </Button>
              )}
              {githubLink && (
                <Button 
                  size="sm" 
                  variant="outline"
                  className="bg-background/80 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://github.com/brennankline-cyber/BlashRoyale.git", '_blank');
                  }}
                  data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors" data-testid={`text-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2" data-testid={`text-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="text-xs"
                data-testid={`badge-tech-${tech.toLowerCase()}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}