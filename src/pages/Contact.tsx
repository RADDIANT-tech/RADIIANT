
import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import CompanyInfo from "../components/CompanyInfo";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="bg-radiiant-lightblue py-16 md:py-24">
        <div className="container-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-radiiant-navy mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto text-center">
            Have questions or want to learn more about our services? Reach out to our team.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ContactForm />
            <CompanyInfo />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
