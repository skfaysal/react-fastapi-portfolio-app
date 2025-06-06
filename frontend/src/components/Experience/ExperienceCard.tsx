import React, { useState } from "react";
import { ExperienceCardProps } from "./types";

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  dateRange,
  description,
  logoUrl,
  websiteUrl,
  first,
  last,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex items-start pb-4 max-w-3xl transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Job Details Section */}
      <div className="ml-4 w-full bg-white p-4 rounded-xl shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center mb-4">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 sm:mb-0 sm:mr-4 flex-shrink-0 flex justify-center items-center"
          >
            <img src={logoUrl} alt={`${company} Logo`} className="h-8 md:h-12 w-auto" />
          </a>

          <div>
            <h5 className="text-sm sm:text-base md:text-xl font-light">{title}</h5>
            <h6 className="text-xs md:text-sm text-gray-500">{company}</h6>
            <p className="text-xs md:text-sm text-gray-400">
              {dateRange} · {location}
            </p>
          </div>
        </div>

        {/* Job Description List */}
        <ul className="list-disc ml-6 text-gray-600">
          {description.map((item, index) => (
            <li key={index} className="text-xs md:text-sm mt-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
