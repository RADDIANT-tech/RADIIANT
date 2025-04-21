
import React from "react";
import Layout from "../components/Layout";
import RequestForm from "../components/RequestForm";

const Request: React.FC = () => {
  return (
    <Layout>
      <div className="bg-radiiant-lightblue py-16 md:py-24">
        <div className="container-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-radiiant-navy mb-6 text-center">
            Request a Service
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto text-center">
            Select a service, tell us about your specific needs, and we'll get in touch to discuss how RADIIANT can help your business grow.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <RequestForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Request;
