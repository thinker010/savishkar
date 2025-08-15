import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, FacebookIcon, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
  { name: "About Savishkar", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Registration", href: "https://docs.google.com/forms/d/e/1FAIpQLSfYi8kj_ETuth0ucuSl8my4gMqSDBCE_Vfu3CkiISqeT3KWew/viewform?usp=dialog", external: true }
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/SavishkarIndia", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/savishkarindia", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/savishkar-india-164321232", label: "LinkedIn" }
  ];

  return (
    <footer className="relative mt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
      
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 tech-gradient rounded-xl flex items-center justify-center">
                  <img
                    src="/favicon.ico"
                    alt="Savishkar Logo"
                    className="w-9 h-9 rounded"
                    style={{ background: 'white' }}
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">Savishkar</div>
                  <div className="text-sm text-electric-blue font-semibold">Innovation Unleashed</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Empowering the next generation of scientists and engineers through innovative research, 
                cutting-edge technology, and collaborative learning experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="tech-gradient text-background">Science & Technology</Badge>
                <Badge variant="outline" className="border-electric-blue text-electric-blue">Innovation</Badge>
                <Badge variant="outline" className="border-tech-orange text-tech-orange">Research</Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-electric-blue transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-electric-blue transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-electric-blue mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    RVCE, Bangalore<br />
                    Karnataka, India
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-tech-orange" />
                  <div className="text-sm text-muted-foreground">savishkarkarnataka@gmail.com</div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-electric-blue" />
                  <div className="text-sm text-muted-foreground">+91 80883 86477</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent my-8" />

        {/* Bottom Footer */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2025 Savishkar. All rights reserved. | Organized by RVCE, Bangalore
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground mr-2">Follow Us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-electric-blue hover:text-background transition-all duration-200"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            {/* <Button className="tech-gradient text-background hover:opacity-90 transition-opacity">
              Join Innovation
            </Button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;