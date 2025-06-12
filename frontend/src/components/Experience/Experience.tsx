import React, { useState, useEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import { getExperiences } from "../../services/api";
import { Experience as ExperienceType } from "../../types/api";
import Loader from "../common/Loader";

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences();
        setExperiences(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching experiences:', err);
        setError(err instanceof Error ? err.message : 'Failed to load experiences');
        setLoading(false);
      }
    };
    
    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div id="experience" className="bg-gray-50 sm:px-1 md:px-5 xl:px-20 rounded-lg">
        <div className="container py-20 flex justify-center">
          <Loader size="lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="experience" className="bg-gray-50 sm:px-1 md:px-5 xl:px-20 rounded-lg">
        <div className="container py-10 text-center">
          <h2 className="text-2xl font-light mb-4">Experience</h2>
          <div className="text-red-500">
            Error loading experiences: {error}
          </div>
        </div>
      </div>
    );
  }

  if (!experiences || experiences.length === 0) {
    return (
      <div id="experience" className="bg-gray-50 sm:px-1 md:px-5 xl:px-20 rounded-lg">
        <div className="container py-10 text-center">
          <h2 className="text-2xl font-light mb-4">Experience</h2>
          <div className="text-gray-500">
            No experience data available.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="experience"
      className="bg-gray-50 sm:px-1 md:px-5 xl:px-20 rounded-lg"
    >
      <div className="container py-4">
        <div className="flex flex-col lg:flex-row first-letter">
          <div className="w-full lg:w-1/4">
            <h2 className="text-2xl font-light ml-5 pb-4">Experience</h2>
          </div>

          <div className="w-full lg:w-3/4 flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-row items-stretch">
                {/* Dot */}
                <div className="flex items-center pr-6" style={{ minWidth: '32px' }}>
                  <div className="w-3 h-3 rounded-full bg-gray-400 border-2 border-white shadow z-10 self-center"></div>
                </div>
                {/* Card */}
                <div className="flex-1 flex flex-col justify-center">
                  <ExperienceCard
                    title={exp.title}
                    company={exp.company}
                    location={exp.location}
                    dateRange={exp.dateRange}
                    description={exp.description}
                    logoUrl={exp.logoUrl}
                    websiteUrl={exp.websiteUrl}
                    first={idx === 0}
                    last={idx === experiences.length - 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
