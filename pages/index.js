import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Loader from "@/components/Loader";
export default function Home() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const response = await fetch("/api/getLatestBlogs");
        const data = await response.json();
        if (response.ok) {
          setLatestBlogs(data); 
        } else {
          console.error("Failed to fetch blogs:", data.error);
        }
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
      } finally {
        setisLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>Code Chronicles</title>
        <meta name="description" content="A blog for coders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black min-h-screen p-8 pb-20 sm:p-20">
        <main className="flex flex-col items-center gap-8 mt-10">
          <h1 className="text-3xl font-bold text-blue-400 text-center animate-pulse">
          📜 Code Chronicles – Unravel. Innovate. Dominate. 📜
          </h1>

          {/* Latest Blogs Section */}
          <div className="w-full max-w-2xl mt-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Latest Blogs
            </h2>

            {latestBlogs.length > 0 ? (
              latestBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-gray-900 rounded-lg p-6 mb-6 shadow-lg border border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
                  <p className="text-gray-400 mt-2">
                    {blog.content.slice(0,100)}...
                  </p>
                  <p className="text-gray-500 text-sm mt-2 text-right">
                    Author: {blog.author || "Unknown"}
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
            ) : (
              <p className="text-gray-400">No blogs available yet.</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

