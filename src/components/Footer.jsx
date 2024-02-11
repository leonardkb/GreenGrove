import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">
            &copy; 2024 Green Grove. All rights reserved.
          </p>
        </div>
        <div>
          <a href="/about" className="text-sm mx-2">
            About Us
          </a>
          <a href="/contact" className="text-sm mx-2">
            Contact Us
          </a>
        </div>
        <div>
          <p className="text-sm">Email: info@greengrove.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
