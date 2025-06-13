import React from 'react';
import { BlogItemProps } from './types';

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  description,
  url,
  thumbnailUrl,
  date
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 p-4"
      style={{ aspectRatio: '3 / 4' }}
    >
      {/* Thumbnail */}
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="flex flex-col justify-between flex-grow mt-2">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">{title}</h3>
          {date && <p className="text-gray-400 text-xs mb-1">{date}</p>}
          <p className="text-gray-500 text-sm mb-4 line-clamp-3">{description}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition-colors text-center"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
