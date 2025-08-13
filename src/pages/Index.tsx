import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EventDetails from "@/components/EventDetails";
import { WebsiteDataCollector } from "@/components/WebsiteDataCollector";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <EventDetails />
      <WebsiteDataCollector />
      <Footer />
    </div>
  );
};

export default Index;
