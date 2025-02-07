import slugify from 'slugify';
import Blog from '../../models/Blog';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content, author } = req.body;

    try {
      // Generate the slug
      const slug = slugify(title, { lower: true, strict: true });
      console.log('Generated Slug:', slug);  // Debugging log

      // Create the blog entry with the generated slug
      const newBlog = await Blog.create({
        title,
        content,
        author,
        slug,  // Save the generated slug
      });

      return res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
    } catch (error) {
      console.error('Error creating blog:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
