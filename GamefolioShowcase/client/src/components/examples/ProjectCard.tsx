import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <div className="max-w-sm">
      <ProjectCard
        title="Space Explorer"
        description="An immersive 3D space exploration game featuring realistic physics and stunning visuals."
        image="/api/placeholder/400/200"
        technologies={["Unity", "C#", "Blender"]}
        demoLink="https://demo.example.com"
        githubLink="https://github.com/example"
        onClick={() => console.log('Project card clicked')}
      />
    </div>
  );
}