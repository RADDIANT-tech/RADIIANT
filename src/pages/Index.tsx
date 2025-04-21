
import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseSection from "../components/WhyChooseSection";
import MissionSection from "../components/MissionSection";

const Index: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <MissionSection />
    </Layout>
  );
};

export default Index;
