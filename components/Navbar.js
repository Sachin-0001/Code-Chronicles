import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 text-transparent bg-clip-text">
          Code Chronicles
          </h1>
        </Link>
        <div className="flex md:order-2 space-x-3">
          <Link href="/CreateBlog">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2">
              Create Blog
            </button>
          </Link>
        </div>
        <div className="hidden md:flex md:w-auto md:order-1">
          <ul className="flex space-x-6 text-gray-300">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-blue-400">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
