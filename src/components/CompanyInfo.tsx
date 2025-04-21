
import React from "react";

const CompanyInfo: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-radiiant-navy">About RADIIANT</h3>
      <p className="text-gray-700 mb-6">
        RADIIANT is a leading provider of digital solutions for African businesses, 
        from startups to enterprises. We specialize in creating tools that help businesses 
        manage operations, engage customers, and track performance effectively.
      </p>
      
      <h4 className="text-lg font-semibold mb-2 text-radiiant-navy">Our Office</h4>
      <p className="text-gray-700 mb-2">
        Tech Park Tower, 5th Floor<br />
        123 Innovation Avenue<br />
        Lagos, Nigeria
      </p>
      
      <h4 className="text-lg font-semibold mb-2 mt-6 text-radiiant-navy">Contact Information</h4>
      <p className="text-gray-700 mb-1">
        <span className="font-medium">Email:</span> info@radiiant.com
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-medium">Phone:</span> +234 123 456 7890
      </p>
      <p className="text-gray-700 mb-6">
        <span className="font-medium">Hours:</span> Monday-Friday, 9AM-5PM WAT
      </p>
      
      <h4 className="text-lg font-semibold mb-4 text-radiiant-navy">Connect With Us</h4>
      <div className="flex space-x-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-radiiant-navy text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-radiiant-navy text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-radiiant-navy text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <a
          href="/media-kit.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-tertiary"
        >
          Download Media Kit
        </a>
      </div>
    </div>
  );
};

export default CompanyInfo;
