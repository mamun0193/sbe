import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Society for Biological Engineers, UIET Chandigarh. All rights reserved.</p>
        <div className="mt-2 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
