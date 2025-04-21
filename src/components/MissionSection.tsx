
import React from "react";
import { Link } from "react-router-dom";

const MissionSection: React.FC = () => {
  return (
    <section className="section-padding bg-radiiant-navy text-white">
      <div className="container-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-10">
            "In a world where African businesses are rewriting the rules of innovation, 
            RADIIANT stands as the digital force behind their growth. From seamless business 
            tools to customer-first marketing systems, we help founders focus on building — 
            while we handle the tech. Simple to start. Powerful as you grow."
          </p>
          <Link to="/request" className="inline-block bg-white text-radiiant-navy px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300">
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
