import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 text-white bg-gray-800">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BizBuddy. All rights reserved.
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="https://github.com/yourgithubusername" className="text-blue-400 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/yourlinkedinusername" className="text-blue-400 hover:underline">LinkedIn</a>
          <a href="https://yourportfolio.com" className="text-blue-400 hover:underline">Portfolio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
