import dbConnect from "../../utils/dbConnect"; // Ensure database connection
import slugify from "slugify";
import Blog from "../../models/Blog";

export default async function handler(req, res) {
  // Set CORS headers to allow frontend access
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    const { title, content, author } = req.body;

    try {
      await dbConnect(); // Ensure DB is connected

      // Generate a slug from the title
      const slug = slugify(title, { lower: true, strict: true });
      console.log("Generated Slug:", slug); // Debugging log

      // Check if a blog with the same slug exists
      const existingBlog = await Blog.findOne({ slug });
      if (existingBlog) {
        return res.status(400).json({ message: "A blog with this title already exists" });
      }

      // Create the new blog entry
      const newBlog = await Blog.create({
        title,
        content,
        author,
        slug, // Save the generated slug
      });

      return res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
      console.error("Error creating blog:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
