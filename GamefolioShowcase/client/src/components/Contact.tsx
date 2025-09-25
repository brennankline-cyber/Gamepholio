import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/brennankline-cyber",
    color: "text-gray-700 dark:text-gray-300"
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon."
    });
    // TODO: Implement actual form submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-title">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
              Let's discuss your next gaming project or collaboration opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      data-testid="input-message"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" data-testid="button-send-message">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4" data-testid="text-lets-connect">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-connect-description">
                  I'm always interested in discussing new projects, creative ideas, or opportunities 
                  to create amazing gaming experiences. Whether you're a fellow developer, studio, 
                  or just want to chat about games, feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg mb-4" data-testid="text-find-me">
                  Find me on
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <Button
                        key={link.name}
                        variant="outline"
                        className="justify-start p-4 h-auto hover-elevate"
                        onClick={() => {
                          window.open(link.href, '_blank');
                          // TODO: Open actual links
                        }}
                        data-testid={`button-social-${link.name.toLowerCase()}`}
                      >
                        <IconComponent className={`h-5 w-5 mr-3 ${link.color}`} />
                        <span>{link.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3" data-testid="text-quick-info">
                    Quick Info
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p data-testid="text-location">📍 Available for remote work worldwide</p>
                    <p data-testid="text-response-time">⚡ Usually responds within 24 hours</p>
                    <p data-testid="text-timezone">🌍 Timezone: UTC-5 (EST)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}