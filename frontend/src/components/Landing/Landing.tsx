import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Loader from '../common/Loader';
import { Certification, Education } from '../../types/api';

const Landing: React.FC = () => {
  const { portfolioData, loading, error } = usePortfolio();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">
        <p>Error loading portfolio data: {error}</p>
      </div>
    );
  }

  if (!portfolioData || !portfolioData.personalInfo) {
    return (
      <div className="text-center text-gray-500 py-10">
        <p>No personal information available.</p>
      </div>
    );
  }

  const { personalInfo, education, certifications } = portfolioData;

  return (
    <div>
      <div id="home" className="container mx-auto first-section py-5 xl:px-40">
        <div className="flex flex-col md:flex-row justify-start items-start pt-5 xl:space-x-16 flex-nowrap">
          
          {/* Profile Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 text-center profile-section mb-10 sm:mb-0 mr-4">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-64 h-64 object-cover rounded-full mx-auto"
            />
            <h1 className="mt-2 text-3xl font-light">{personalInfo.name}</h1>
            <p className="text-gray-500 text-lg font-light">
              {personalInfo.title}
              <br />
              {personalInfo.location}
            </p>
            <div className="mt-4">
              {personalInfo.socialLinks?.github && (
                <a href={personalInfo.socialLinks.github} className="text-2xl mx-2 text-gray-600 hover:text-gray-600">
                  <i className="fab fa-github hover:scale-110"></i>
                </a>
              )}
              {personalInfo.socialLinks?.linkedin && (
                <a
                  href={personalInfo.socialLinks.linkedin}
                  className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
                >
                  <i className="fab fa-linkedin hover:scale-110"></i>
                </a>
              )}
              {personalInfo.socialLinks?.cv && (
                <a
                  href={personalInfo.socialLinks.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
                >
                  <i className="ai ai-cv hover:scale-110"></i>
                </a>
              )}
              {personalInfo.socialLinks?.email && (
                <a
                  href={personalInfo.socialLinks.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
                >
                  <i className="fas fa-envelope hover:scale-110"></i>
                </a>
              )}
            </div>
          </div>

          {/* Biography Section */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex-grow">
            <h2 className="text-xl md:text-2xl font-light">About Me</h2>
            <p className="text-sm sm:text-base md:text-lg mt-2 font-light">
              {personalInfo.bio}
            </p>

            {/* Sections for Education and Certifications */}
            <div className="flex flex-col md:flex-row md:space-x-8 mt-8 space-y-8 md:space-y-0">

              {/* Education Section */}
              <div className="w-full md:w-1/2 mb-8 p-4 rounded-2xl shadow-xl bg-gradient-to-tr from-white via-gray-50 to-gray-100 border border-gray-100 transition-transform duration-300 hover:scale-105">
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-700">Education</h3>
                <hr className="my-2 border-gray-300" />
                
                {!education || education.length === 0 ? (
                  <div className="text-gray-500 text-sm py-2">No education data available.</div>
                ) : (
                  education.map((edu: Education, index: number) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-center mb-2">
                        <i className="fas fa-graduation-cap text-blue-600 text-base md:text-lg mr-2"></i>
                        <span className="text-sm md:text-base font-semibold text-gray-800">{edu.degree}</span>
                      </div>
                      <div className="text-xs md:text-sm text-gray-700 font-medium mb-1">{edu.institution}</div>
                      <div className="text-xs md:text-sm text-gray-500">{edu.startDate} – {edu.endDate}</div>
                      <div className="text-xs md:text-sm text-gray-500 mb-2">{edu.location}</div>
                      {edu.thesis && (
                        <div className="flex items-center mt-2">
                          <i className="fas fa-lightbulb text-green-600 text-xs md:text-sm mr-2"></i>
                          <span className="text-xs md:text-sm text-gray-700 italic">
                            Thesis: "{edu.thesis}"
                          </span>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Certifications Section */}
              <div className="w-full md:w-1/2 mb-8 p-6 rounded-2xl shadow-xl bg-gradient-to-tr from-white via-gray-100 to-gray-200 border border-gray-200 transition-transform duration-300 hover:scale-105">
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">Certifications</h3>
                <hr className="my-2 border-gray-300" />
                
                {!certifications || certifications.length === 0 ? (
                  <div className="text-gray-500 text-sm py-2">No certifications available.</div>
                ) : (
                  <ul className="list-none mt-2 space-y-2">
                    {certifications.map((cert: Certification, index: number) => (
                      <li key={index} className="text-xs md:text-sm flex items-center gap-2">
                        <img src={cert.iconUrl} alt={cert.issuer} className="h-5 w-5 object-contain shrink-0" />
                        {cert.url ? (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 no-underline hover:underline"
                          >
                            {cert.title}
                          </a>
                        ) : (
                          <span className="text-gray-700">{cert.title}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
