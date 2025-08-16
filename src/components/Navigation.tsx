import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Atom, Calendar, Users, Trophy, Info } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
  { name: "About", href: "/about", icon: Info },
  { name: "Speakers", href: "/speakers", icon: Users },
  { name: "Events", href: "#events", icon: Calendar },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/favicon.ico"
              alt="Savishkar Logo"
              className="w-10 h-10"
              style={{ display: 'block' }}
            />
            <div>
              <div className="font-bold text-lg text-foreground">Savishkar</div>
              <div className="text-xs text-electric-blue font-semibold">2025</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors duration-200"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Badge variant="outline" className="border-electric-blue text-electric-blue">
              Registration Open
            </Badge>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYi8kj_ETuth0ucuSl8my4gMqSDBCE_Vfu3CkiISqeT3KWew/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="tech-gradient text-background hover:opacity-90 transition-opacity">
                Register
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-2 text-muted-foreground hover:text-electric-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <div className="px-4 pt-4 border-t border-border">
                <Badge variant="outline" className="border-electric-blue text-electric-blue mb-3">
                  Registration Open
                </Badge>
                <Button className="w-full tech-gradient text-background">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfYi8kj_ETuth0ucuSl8my4gMqSDBCE_Vfu3CkiISqeT3KWew/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    Register Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;