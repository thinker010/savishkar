import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Rocket, Award, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Showcase cutting-edge research and breakthrough technologies that shape the future",
      color: "text-electric-blue"
    },
    {
      icon: Rocket,
      title: "Future Technology",
      description: "Explore emerging technologies and futuristic approaches in science and engineering",
      color: "text-cyber-cyan"
    },
    {
      icon: Award,
      title: "Excellence Recognition",
      description: "Celebrate outstanding achievements and recognize the best innovative projects",
      color: "text-tech-orange"
    },
    {
      icon: Globe,
      title: "Global Platform",
      description: "Connect with brilliant minds from 200+ premier institutes across the nation",
      color: "text-neon-green"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 tech-gradient text-background">About </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-cyber-cyan bg-clip-text text-transparent">
            Where Innovation Meets Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Savishkar is more than just an exhibition – it's a revolutionary platform where the brightest minds in science and technology come together to shape the future through innovation and collaboration.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Empowering Tomorrow's Innovators
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At R.V. College of Engineering (RVCE), Bangalore, we host this prestigious two-day national symposium that brings together graduate and postgraduate students from across India. This platform enables emerging scientists and engineers to present their groundbreaking research and innovations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-electric-blue rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground">Research Excellence</h4>
                  <p className="text-sm text-muted-foreground">Cutting-edge research presentations from top-tier institutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-cyan rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground">Innovation Showcase</h4>
                  <p className="text-sm text-muted-foreground">Live demonstrations of breakthrough technologies and solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-tech-orange rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground">Networking Opportunities</h4>
                  <p className="text-sm text-muted-foreground">Connect with industry leaders, researchers, and fellow innovators</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="card-gradient rounded-2xl p-8 tech-shadow">
            <h4 className="text-xl font-bold text-center mb-6 text-electric-blue">Event Impact</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-cyan mb-2">2000+</div>
                <div className="text-sm text-muted-foreground">Participating Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-orange mb-2">400+</div>
                <div className="text-sm text-muted-foreground">Innovation Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Premier Institutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-blue mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Research Categories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="card-gradient border-border hover:tech-shadow transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;