// pages/api/blogs.js

import dbConnect from "../../utils/dbConnect"; // Assuming you have this function to handle DB connection
import Blog from "../../models/Blog"; // Assuming Blog is your model

export default async function handler(req, res) {
  try {
    await dbConnect(); // Connect to MongoDB

    const blogs = await Blog.find({}); // Get all blogs from the database
    res.status(200).json(blogs); // Send blogs as JSON response
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
}
