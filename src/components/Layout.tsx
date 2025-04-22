
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 bg-white bg-opacity-90 backdrop-blur-md border-b">
        <div className="container-center py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/radiiant-logo.png" 
              alt="RADIIANT Logo" 
              className="h-10" 
            />
            <span className="text-radiiant-navy font-bold text-xl">RADIIANT</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" current={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/request" current={location.pathname === "/request"}>
              Request a Service
            </NavLink>
            <NavLink to="/contact" current={location.pathname === "/contact"}>
              Contact
            </NavLink>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-radiiant-navy"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-radiiant-navy text-white py-12">
        <div className="container-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/public/lovable-uploads/25d343df-9b8a-48a8-8d5c-04d101cc5a2e.png" 
                  alt="RADIIANT Logo" 
                  className="h-10 bg-white rounded-full p-1" 
                />
                <span className="font-bold text-xl">RADIIANT</span>
              </div>
              <p className="text-gray-300 max-w-md">
                Powerful digital tools for startups, SMEs, and enterprises to scale confidently in the African market.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/request" className="hover:underline text-gray-300 hover:text-white transition-colors">
                    Request a Service
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
              <div className="flex items-center gap-4 mb-4">
                <a href="https://www.linkedin.com/company/radiiant" target="_blank" rel="noopener noreferrer" className="hover:text-radiiant-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-radiiant-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-radiiant-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
              <p className="text-gray-300">Email: radiiant.solutions@gmail.com</p>
              <p className="text-gray-300">Phone: +233 54 387 6146</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} RADIIANT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  current: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, current, children }) => {
  return (
    <Link
      to={to}
      className={`font-medium relative px-1 ${
        current
          ? "text-radiiant-navy"
          : "text-gray-600 hover:text-radiiant-navy transition-colors"
      }`}
    >
      {children}
      {current && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-radiiant-navy" />
      )}
    </Link>
  );
};

export default Layout;
