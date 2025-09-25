import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/brennankline-cyber", label: "GitHub" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold" data-testid="text-footer-brand">
              Brennans Games Portfolio
            </h3>
            <p className="text-muted-foreground" data-testid="text-footer-description">
              Making remakes of the Games You May Love!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-quick-links">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {['Home', 'Games', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-footer-${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-connect-footer">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.label}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(link.href, '_blank');
                    }}
                    data-testid={`link-footer-social-${link.label.toLowerCase()}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm" data-testid="text-copyright">
            © {currentYear} Game Developer Portfolio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0" data-testid="text-made-with-love">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for gamers
          </p>
        </div>
      </div>
    </footer>
  );
}