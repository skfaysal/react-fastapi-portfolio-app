import React, { useState, useEffect } from "react";
import { getBlogs } from "../../services/api";
import { Blog } from "./types";
import BlogItem from "./BlogItem";
import Loader from "../common/Loader";

const BlogsList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blogs');
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);

  // If loading, show a loader
  if (loading) {
    return (
      <section id="blogs" className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-8">Blogs</h2>
          <div className="flex justify-center">
            <Loader size="lg" />
          </div>
        </div>
      </section>
    );
  }

  // If no blogs or error, don't render the section
  if (!blogs || blogs.length === 0 || error) {
    return null;
  }

  return (
    <section id="blogs" className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Blogs</h2>
        {/* Adjust grid for potentially one item or use different layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((blog, idx) => (
            <BlogItem
              key={idx}
              title={blog.title}
              description={blog.description}
              url={blog.url}
              thumbnailUrl={blog.thumbnailUrl}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsList;
