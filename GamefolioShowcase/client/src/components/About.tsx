import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Gamepad2, Palette, Zap } from "lucide-react";

const skills = [
  {
    category: "Game Engines",
    items: ["Replit"],
    icon: Gamepad2,
    color: "text-blue-500"
  },
  {
    category: "Programming",
    items: ["JavaScript", "Python", "HLSL"],
    icon: Code,
    color: "text-green-500"
  },
  {
    category: "Technologies",
    items: ["WebGL"],
    icon: Zap,
    color: "text-yellow-500"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-title">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-description">
              Game developer who brings entertainment to the community!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4" data-testid="text-journey-title">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-journey-paragraph-1">
                I've been in the realm of Game Development for several years now, using Javascript, HTML, CSS, C# and Python.
                I have made several games and pushed them onto itch.io using the Unity Game Engine. I have competed in several
                game jams before and have dealt with many complex systems of code and have learned to debug.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-journey-paragraph-2">
                I have made several different Genres of games such as survival, horror, roleplay, etc. and I am now taking my game dev to AI.
                One of my first AI projects is using the AI App Generator Replit. 
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-journey-paragraph-3">
                I beleive in hard work and want to make games for people to enjoy and learn from and even use to apply to their own lives.
                Games can bring people together when played in moderation and are a fun activity to do. I loved playing games
                growing up and thats how I made several connections and decided I wanted to make my own game.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center mb-8" data-testid="text-skills-title">
              Skills & Technologies
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup) => {
                const IconComponent = skillGroup.icon;
                return (
                  <Card key={skillGroup.category} className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent className={`h-6 w-6 ${skillGroup.color}`} />
                        <h4 className="font-semibold" data-testid={`text-skill-category-${skillGroup.category.toLowerCase().replace(/\s+/g, '-')}`}>
                          {skillGroup.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="text-xs"
                            data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}