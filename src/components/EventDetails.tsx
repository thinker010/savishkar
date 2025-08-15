import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Award, Presentation } from "lucide-react";

const EventDetails = () => {
  const eventSchedule = [
    {
      day: "Day 1",
      date: "August 16, 2025",
      events: [
        { time: "09:00 AM", title: "Registration & Welcome", type: "registration" },
        { time: "10:30 AM", title: "Inauguration Ceremony", type: "ceremony" },
        { time: "02:00 PM", title: "Project Presentations - Tech Track", type: "presentation" },
        { time: "05:00 PM", title: "Innovation Showcase", type: "showcase" }
      ]
    },
    {
      day: "Day 2",
      date: "August 17, 2025",
      events: [
        { time: "09:00 AM", title: "Keynote by Industry Leaders", type: "keynote" },
        { time: "11:00 AM", title: "Research Paper Sessions", type: "presentation" },
        { time: "02:00 PM", title: "Panel Discussion: Future Tech", type: "discussion" },
        { time: "04:00 PM", title: "Innovation Competition", type: "competition" }
      ]
    }
  ];

  const categories = [
    {
      title: "Artificial Intelligence",
      description: "Machine Learning, Deep Learning, Neural Networks",
      color: "border-electric-blue text-electric-blue"
    },
    {
      title: "Biotechnology",
      description: "Genetic Engineering, Biomedical Devices, Pharmaceutical",
      color: "border-cyber-cyan text-cyber-cyan"
    },
    {
      title: "Robotics & Automation",
      description: "Industrial Automation, Smart Systems, IoT",
      color: "border-tech-orange text-tech-orange"
    },
    {
      title: "Sustainable Energy",
      description: "Renewable Energy, Green Technology, Environmental Solutions",
      color: "border-neon-green text-neon-green"
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case "keynote": return <Presentation className="w-4 h-4" />;
      case "ceremony": return <Award className="w-4 h-4" />;
      case "presentation": return <Users className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "keynote": return "text-electric-blue";
      case "ceremony": return "text-tech-orange";
      case "presentation": return "text-cyber-cyan";
      default: return "text-neon-green";
    }
  };

  return (
    <section id="events" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-l from-electric-blue/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-r from-cyber-cyan/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 tech-gradient text-background">Event Details</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-cyber-cyan bg-clip-text text-transparent">
            Two Days of Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us for an intensive two-day journey through the latest advancements in science and technology, featuring presentations, competitions, and networking opportunities.
          </p>
        </div>

        {/* Event Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="card-gradient border-border tech-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-electric-blue" />
                <CardTitle className="text-lg">Date & Duration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-electric-blue mb-1">August 16-17, 2025</div>
              <div className="text-muted-foreground">2 Days of Innovation</div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-border tech-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cyber-cyan" />
                <CardTitle className="text-lg">Venue</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-semibold text-cyber-cyan mb-1">RVCE, Bangalore</div>
              <div className="text-muted-foreground">R.V. College of Engineering</div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-border tech-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-tech-orange" />
                <CardTitle className="text-lg">Registration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-semibold text-tech-orange mb-1">Open Now</div>
              <div className="text-muted-foreground">Limited seats available</div>
              <Button className="mt-3 tech-gradient text-background hover:opacity-90 text-sm">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeM1zIxmvADE_k6EEKsqY-dtXr23_GqLf4iUuiArcej6BSKYQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  Register Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Event Schedule */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            Event Schedule
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {eventSchedule.map((day, dayIndex) => (
              <Card key={dayIndex} className="card-gradient border-border">
                <CardHeader>
                  <div className="text-center">
                    <Badge className="mb-2 tech-gradient text-background">{day.day}</Badge>
                    <CardTitle className="text-electric-blue">{day.date}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                      <div className={`mt-1 ${getEventColor(event.type)}`}>
                        {getEventIcon(event.type)}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{event.title}</div>
                        <div className="text-xs text-muted-foreground">{event.time}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            Competition Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className={`card-gradient border-2 ${category.color} hover:tech-shadow transition-all duration-300 group`}>
                <CardContent className="p-6 text-center">
                  <h4 className={`font-bold text-lg mb-3 ${category.color} group-hover:scale-105 transition-transform`}>
                    {category.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;