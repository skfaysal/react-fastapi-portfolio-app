import React from "react";

// Example blog data (replace with your own or fetch dynamically)
const blogs = [
  {
    title: "Serve Machine Learning models using Django REST API Part 1",
    url: "https://www.linkedin.com/pulse/serve-machine-learning-models-using-django-rest-api-part-md-faysal/?trackingId=BHRBhJDKQuuF4V3okBUoLg%3D%3D",
    description: "This series shows hands-on steps for productionizing ML models: 1. Train a Machine Learning model 2. Create a REST API using Django 3. Dockerize and deploy the REST API.",
    thumbnailUrl: "/blog1-thumbnail.jpg" // Replace with actual thumbnail URL
  }
];

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Blogs</h2>
        {/* Adjust grid for potentially one item or use different layout */}
        <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
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