import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const userName = localStorage.getItem('userName'); // Retrieve the user's name from local storage

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        // Fetch all blogs from your backend or database
        const response = await fetch('/api/blogs'); // Adjust the endpoint as needed
        const allBlogs = await response.json();

        // Filter blogs to only include those created by the current user
        const userBlogs = allBlogs.filter(blog => blog.author === userName);
        setBlogs(userBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBlogs();
  }, [userName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-black min-h-screen pb-20 sm:p-20 mt-10">
      <p className="text-3xl font-light text-blue-400 text-center">
        Your Blogs
      </p>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-400 mt-4">You haven't created any blogs yet.</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-900 rounded-lg p-6 mb-6 shadow-lg border border-gray-700 mt-10"
          >
            <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
            <p className="text-gray-400 mt-2">{blog.content.slice(0, 200)}...</p>
            <p className="text-gray-500 text-sm mt-2 text-right">
              Created on: {blog.createdAt}
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
  );
};

export default UserBlogs;
