import React from "react";
import Link from "next/link";
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleCreateBlogNavigationS = () => {
    const userName = localStorage.getItem('userName'); // Retrieve the name from local storage
    router.push({
      pathname: '/CreateBlog',
      query: { name: userName } // Pass the name as a query parameter
    });
  };

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 text-transparent bg-clip-text">
          Code Chronicles
          </h1>
        </Link>
        <div className="flex md:order-2 space-x-3">
          {!user ? (
            <>
              <Link href="/login">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2">
                  Login
                </button>
              </Link>
              <Link href="/signUp">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-sm px-4 py-2"
            >
              Logout
            </button>
          )}
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
              <button
                onClick={handleCreateBlogNavigationS}
                className="hover:text-blue-400 text-white"
              >
                Create Blog
              </button>
            </li>
            <li>
              <Link href="/userBlogs" className="hover:text-blue-400">
                My BLogs
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="hover:text-blue-400">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
