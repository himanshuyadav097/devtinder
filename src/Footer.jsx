import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-amber-50 text-accent-content p-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
