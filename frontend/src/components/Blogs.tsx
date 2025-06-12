import React, { useState, useEffect } from "react";
import { getBlogs } from "../services/api";
import { Blog } from "../types/api";
import Loader from "./common/Loader";

const Blogs: React.FC = () => {
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
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 p-4"
              style={{ aspectRatio: '3 / 4' }} // Make card taller than wide
            >
              {/* Thumbnail */}
              {blog.thumbnailUrl && (
                <img
                  src={blog.thumbnailUrl}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="flex flex-col justify-between flex-grow mt-2">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">{blog.description}</p>
                </div>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition-colors text-center"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;