import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userName = localStorage.getItem("userName");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    logout();
    setIsOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 text-transparent bg-clip-text">
            Code Chronicles
          </h1>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          type="button"
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        <div className="hidden md:flex md:w-auto md:order-1">
          <ul className="flex space-x-6 text-gray-300">
            <li>
              <Link href="/" className="hover:text-blue-400" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-blue-400" onClick={handleLinkClick}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="hover:text-blue-400" onClick={handleLinkClick}>
                Feedback
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex md:order-2 space-x-3">
          {!user ? (
            <>
              <Link href="/login">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2" onClick={handleLinkClick}>
                  Get Started
                </button>
              </Link>
            </>
          ) : (
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full text-white"
              >
                {userName ? userName.charAt(0) : "U"}
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg">
                  <div className="py-1">
                    <p className="block px-4 py-2 text-sm text-white">{userName}</p>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5m0 6H3"
                        />
                      </svg>
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col space-y-2 p-4 text-gray-300">
            <li>
              <Link href="/" className="block py-2 hover:text-blue-400" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 hover:text-blue-400" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="block py-2 hover:text-blue-400" onClick={handleLinkClick}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="block py-2 hover:text-blue-400" onClick={handleLinkClick}>
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
