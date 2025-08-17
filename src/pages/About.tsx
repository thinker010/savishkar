import React from "react";
import convenors from "@/assets/convenors";

const About = () => (
  <section className="py-20 container mx-auto px-6">
    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-primary">About Savishkar</h1>
    <div className="max-w-3xl mx-auto text-center text-lg text-foreground mb-8">
      Savishkar is a national platform dedicated to fostering innovation, scientific temper, and collaboration among students, educators, and industry leaders. Our mission is to empower the next generation of scientists and engineers through research, technology, and learning experiences.
    </div>
    <div className="max-w-2xl mx-auto text-center text-muted-foreground mb-16">
      We organize workshops, exhibitions, and symposiums that bring together thought leaders, innovators, and young minds to share knowledge, showcase projects, and inspire change. Join us in our journey to build a brighter, more innovative future for India.
    </div>

    {/* Convenors Carousel */}
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-electric-blue">Our Team </h2>
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex gap-8 min-w-[600px] md:min-w-0 px-2" style={{scrollSnapType: 'x mandatory'}}>
        {convenors.map((c) => (
          <div
            key={c.name}
            className="flex-shrink-0 w-80 bg-card-gradient rounded-xl shadow-lg p-6 text-center border border-border transition-transform duration-300 hover:scale-105"
            style={{scrollSnapAlign: 'center'}}
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-electric-blue bg-background"
            />
            <div className="font-bold text-lg text-tech-orange mb-1">{c.name}</div>
            <div className="text-sm text-cyber-cyan mb-2 font-semibold">{c.role}</div>
            <div className="text-muted-foreground text-sm">{c.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
