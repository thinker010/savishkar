import React from "react";

interface Convenor {
  name: string;
  role: string;
  image: string;
  description: string;
}

const convenors: Convenor[] = [
  {
    name: "Dr. A. P. Sharma",
    role: "National Convenor",
    image: "/placeholder.svg", // Replace with actual image path
    description: "Dr. Sharma leads Savishkar with a vision to unite innovators and educators across India. He has over 20 years of experience in science outreach and academic leadership."
  },
  {
    name: "Prof. S. K. Rao",
    role: "Co-Convenor",
    image: "/placeholder.svg", // Replace with actual image path
    description: "Prof. Rao is passionate about student empowerment and has mentored numerous national-level projects."
  },
  {
    name: "Dr. Meera Nair",
    role: "Co-Convenor",
    image: "/placeholder.svg", // Replace with actual image path
    description: "Dr. Nair brings expertise in technology and innovation, fostering collaboration among young scientists."
  }
];

export default convenors;
