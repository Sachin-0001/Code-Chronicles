// pages/api/blogs/[id].js
import dbConnect from '../../utils/dbConnect';
import Blog from '../../models/Blog';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    // Establish DB connection
    await dbConnect();

    // Fetch the blog by MongoDB _id
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    return res.status(200).json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
