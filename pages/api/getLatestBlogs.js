import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
 

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    await dbConnect();

    try {
      await dbConnect();
      const blogs = await Blog.find({})
        .sort({ createdAt: -1 }) // Sort by latest
        .limit(10) // Limit results
        .select("title author createdAt content"); // Fetch only necessary fields

      return res.status(200).json(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
