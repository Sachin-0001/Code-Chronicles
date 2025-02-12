import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-4">
      <div className="container mx-auto px-4">
        <hr className="border-gray-200 dark:border-gray-700 mb-4" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="text-sm text-center sm:text-left">
            © 2025{" "}
            <a href="/index" className="hover:underline">
              Code Chronicles™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-2 sm:mt-0">
            <a href="/terms" className="text-sm hover:underline mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
