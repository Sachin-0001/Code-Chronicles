import { ObjectId } from 'mongodb';
import dbConnect from '../../utils/dbConnect';
import Blog from '../../models/Blog';

export async function getServerSideProps({ params }) {
  const { id } = params;

  // Log the id to check if it's being passed correctly
  console.log('Blog ID from URL:', id);

  // Check if the ID is valid
  if (!ObjectId.isValid(id)) {
    return { notFound: true };
  }

  try {
    // Establish DB connection
    await dbConnect();

    // Fetch the blog post from the database
    const blog = await Blog.findById(id);
    
    // Log the result of the database query
    // console.log('Fetched Blog:', blog);

    if (!blog) {
      return { notFound: true }; // Blog not found
    }


    return {
      props: {
        blog: JSON.parse(JSON.stringify(blog)) },
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return { props: { blog: null } };
  }
}

export default function BlogPost({ blog }) {
    if (!blog) {
      return <div className="text-center text-white py-10">Blog not found</div>;
  }
  const formattedDate = new Date(blog.createdAt).toISOString();
  
    return (
      <div className="w-full max-w-3xl mx-auto mt-24 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-4 text-center">{blog.title}</h1>
        <div className="text-xl text-gray-300 mb-6 mt-16" style={{ whiteSpace: "pre-wrap" }} >{blog.content}</div>
        <div className="flex justify-between text-gray-400 text-sm">
          <p>Written by: {blog.author}</p>
          <p>{formattedDate}</p>
        </div>
      </div>
    );
  }