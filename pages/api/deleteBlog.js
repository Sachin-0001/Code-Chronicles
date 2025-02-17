import dbConnect from "../../utils/dbConnect"; // Ensure database connection
import Blog from "../../models/Blog";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.setHeader("Access-Control-Allow-Methods", "DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "DELETE") {
    const { id } = req.query; 

    try {
      await dbConnect(); 

      
      const deletedBlog = await Blog.findByIdAndDelete(id);

      if (!deletedBlog) {
        return res.status(404).json({ message: "Blog post not found" });
      }

      return res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
      console.error("Error deleting blog:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
