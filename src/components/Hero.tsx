import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-poster.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-electric-blue/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyber-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-tech-orange/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="flex relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Event Badge */}
          <Badge className="mb-6 bg-electric-blue text-background font-semibold px-4 py-2 text-sm border-2 border-cyber-cyan shadow-lg">
            National Science & Technology Symposium
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-electric-blue via-tech-orange to-electric-blue bg-clip-text text-transparent leading-tight">
            Savishkar
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-foreground">
            Innovative & Futuristic Approaches in Science & Technology
          </h2>

          {/* Innovation Tagline */}
          <p className="text-lg md:text-xl text-tech-orange font-medium mb-8 animate-pulse-glow">
            Innovation Unleashed
          </p>

          {/* Horizontal Line */}
          <div className="w-32 h-0.5 bg-gradient-to-r from-electric-blue via-tech-orange to-electric-blue mx-auto mb-8 rounded-full" />

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            A two-days National Exhibition and Symposium providing a common platform for budding Scientists & Engineers 
            to showcase their unparalleled talents and innovations to the world.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="card-gradient rounded-lg p-6 tech-shadow">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-electric-blue" />
              </div>
              <div className="text-2xl font-bold text-electric-blue">2000+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="card-gradient rounded-lg p-6 tech-shadow">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="w-8 h-8 text-tech-orange" />
              </div>
              <div className="text-2xl font-bold text-tech-orange">400+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="card-gradient rounded-lg p-6 tech-shadow">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-8 h-8 text-electric-blue" />
              </div>
              <div className="text-2xl font-bold text-electric-blue">200+</div>
              <div className="text-sm text-muted-foreground">Institutes</div>
            </div>
            <div className="card-gradient rounded-lg p-6 tech-shadow">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-8 h-8 text-tech-orange" />
              </div>
              <div className="text-2xl font-bold text-tech-orange">2</div>
              <div className="text-sm text-muted-foreground">Days</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-gradient hover:opacity-90 transition-all duration-300 tech-shadow text-background font-semibold px-8 py-3">
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image - Floating */}
      {/* <div className="absolute bottom-20 right-10 hidden lg:block">
        <div className="w-80 h-48 rounded-lg overflow-hidden tech-shadow animate-float">
          <img 
            src={heroImage} 
            alt="Savishkar Innovation" 
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;