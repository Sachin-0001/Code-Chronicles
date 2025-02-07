import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const blogs = await Blog.find({})
      .sort({ createdAt: -1 })  // Index on `createdAt` can speed up sorting
      .limit(10)  // Limit results for faster response
      .select("title author createdAt");  // Only return necessary fields

    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
