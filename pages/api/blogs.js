import dbConnect from "../../utils/dbConnect";
import Blog from "../../models/Blog";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    await dbConnect(); // Connect to MongoDB
    const blogs = await Blog.find({}); // Fetch all blogs
    res.status(200).json(blogs); // Send response
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
}
