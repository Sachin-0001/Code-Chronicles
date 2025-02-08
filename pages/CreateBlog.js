import React, { useState } from "react";
import { useRouter } from "next/router";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date().toLocaleString());
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
      author,
      date,
    };
    const app_url = process.env.APP_URL || 'http://localhost:3000';
    console.log(blogData);
    try {
      const response = await fetch(`${app_url}/api/createBlog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Blog created:", data);
        router.push("/blogs"); // Redirect to blogs list or home page
      } else {
        console.error("Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold text-center text-blue-400">Create a New Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto mt-8 p-6 bg-gray-800 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-white font-semibold">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
            placeholder="Enter blog title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-white font-semibold">
            Blog Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
            placeholder="Write your blog content here"
            rows="6"
          />
        </div>

        <div className="mb-4 flex justify-between">
          <div className="w-1/2 pr-2">
            <label htmlFor="author" className="block text-white font-semibold">
              Author
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="w-full p-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
              placeholder="Enter author name"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="date" className="block text-white font-semibold">
              Date
            </label>
            <input
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              disabled
              className="w-full p-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
