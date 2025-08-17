import React from "react";

interface Convenor {
  name: string;
  role: string;
  image: string;
  description: string;
}

const convenors: Convenor[] = [
    {
        name: "Nisarga Rathod",
        role: "National Convenor Savishkar, Gujarat",
        image: "/nisarga-rathod.jpg",
        description: "Nisarga Rathod leads Savishkar initiatives in Gujarat, inspiring innovation and leadership."
    },
    {
        name: "Bhagyavant",
        role: "National Co-Convenor, Bengaluru",
        image: "/bhagyavant.jpg",
        description: "Bhagyavant is dedicated to empowering youth and fostering innovation in Bengaluru and beyond."
    },
    {
        name: "Diskha Yadava",
        role: "National Co-Convenor, Malwa",
        image: "/diskha-yadava.jpg",
        description: "Diskha Yadava is committed to advancing scientific spirit and collaboration in the Malwa region."
    },
    {
        name: "Deepak Sharma",
        role: "National Co-Convenor, Konkan",
        image: "/deepak-sharma.jpg",
        description: "Deepak Sharma is passionate about empowering youth and promoting technology in the Konkan region."
    }
];

export default convenors;
