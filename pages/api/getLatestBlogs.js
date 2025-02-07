// pages/api/getLatestBlogs.js
import dbConnect from "../../utils/dbConnect";
import Blog from "../../models/Blog";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const latestBlogs = await Blog.find({})
      .sort({ createdAt: -1 }) // Sort by creation date in descending order
      .limit(3); // Limit to 3 latest blogs

    return res.status(200).json(latestBlogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return res.status(500).json({ error: "Error fetching latest blogs" });
  }
}
