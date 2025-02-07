import React, { useEffect, useState } from "react";
import Link from "next/link";

const blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();

        // Check if the response data is an array
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          setError("Data is not in the expected array format.");
        }
      } catch (err) {
        setError("Failed to fetch blogs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-whi">Loading blogs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="bg-black mt-24">
        <form className="flex items-center max-w-lg mx-auto bg-black p-2 rounded-lg shadow-md">
          <label htmlFor="search" className="sr-only">
            Find blogs
          </label>
          <div className="relative w-full bg-black">
            <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="input"
              id="search"
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search blogs..."
              rnewblogsList
            />
          </div>
        </form>
      </div>

      <div className="bg-black min-h-screen pb-20 sm:p-20">
        <p className="text-3xl font-light text-blue-400 text-center">
          All Blogs
        </p>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-400 mt-4">No blogs found</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-900 rounded-lg p-6 mb-6 shadow-lg border border-gray-700 mt-10"
            >
              <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
              <p className="text-gray-400 mt-2">{blog.content.slice(0,200)}..</p>
              <p className="text-gray-500 text-sm mt-2 text-right">
                Author: {blog.author}
              </p>
              <p className="text-gray-500 text-sm mt-2 text-right">
                Published: {blog.createdAt}
              </p>
              <Link href={`/blogpost/${blog._id}`}>
                <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
                  Read More
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default blogs;
