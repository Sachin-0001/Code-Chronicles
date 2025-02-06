import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A blog for coders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-gray-900 dark:bg-gray-100 fixed w-full z-20 top-0 start-0 border-b border-gray-600 dark:border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3">
            <span className="self-center text-2xl font-semibold text-white dark:text-gray-900">
              Hunting Coder
            </span>
          </a>
          <div className="flex md:order-2 space-x-3">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Get Started
            </button>
          </div>
          <div className="hidden md:flex md:w-auto md:order-1">
            <ul className="flex space-x-6 text-white dark:text-gray-900">
              <li>
                <a href="#" className="hover:text-blue-400 dark:hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 dark:hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 dark:hover:text-blue-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 dark:hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="bg-gray-900 dark:bg-gray-100 min-h-screen p-8 pb-20 sm:p-20">
        <main className="flex flex-col items-center gap-8 mt-10">
          <p className="text-3xl font-light text-blue-400 dark:text-blue-700 text-center">
            Hunting Coder is a blogging website for coders, built by a coder.
          </p>

          {/* Latest Blogs Section */}
          <div className="w-full max-w-2xl mt-10">
            <h2 className="text-2xl font-semibold text-white dark:text-gray-900 mb-4">
              Latest Blogs
            </h2>

            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-800 dark:bg-gray-200 rounded-lg p-6 mb-6 shadow-lg">
                <h3 className="text-xl font-semibold text-white dark:text-gray-900">
                  How to learn JavaScript in 2025?
                </h3>
                <p className="text-gray-300 dark:text-gray-700 mt-2">
                  JavaScript is the language used to design logic for the web.
                </p>
                <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg dark:bg-blue-500 dark:hover:bg-blue-600">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
