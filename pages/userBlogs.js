import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const userName = localStorage.getItem('userName');
  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const response = await fetch('/api/blogs'); 
        const allBlogs = await response.json();

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

  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`/api/deleteBlog?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBlogs(blogs.filter(blog => blog._id !== id)); // Update state to remove the deleted blog
      } else {
        console.error('Failed to delete the blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-black min-h-screen pb-20 sm:p-20 pt-24">
      <p className="text-3xl font-light text-blue-400 text-center">
        Your Blogs
      </p>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-400 mt-4">You haven't created any blogs yet. Login to view your blogs</p>
        
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
            <button className="mt-4 mx-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg" onClick={() => deleteBlog(blog._id)}>
                  Delete 
                </button>
          </div>
        ))
      )}
    </div>
  );
};

export default UserBlogs;
