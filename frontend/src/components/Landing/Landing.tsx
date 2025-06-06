import React from 'react';

const Landing: React.FC = () => {
  return (
    <div>
      <div id="home" className="container mx-auto first-section py-5 xl:px-40">
        <div className="flex flex-col md:flex-row justify-start items-start pt-5 xl:space-x-16 flex-nowrap">
          
          {/* Profile Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 text-center profile-section mb-10 sm:mb-0 mr-4">
            <img
              src="/my_profile.png"
              alt="Sheikh Md. Faysal"
              className="w-64 h-64 object-cover rounded-full mx-auto"
            />
            <h1 className="mt-2 text-3xl font-light">Sheikh Md. Faysal</h1>
            <p className="text-gray-500 text-lg font-light">
              Senior Machine Learning Engineer
              <br />
              Dhaka, Bangladesh
            </p>
            <div className="mt-4">
              <a href="https://github.com/skfaysal" className="text-2xl mx-2 text-gray-600 hover:text-gray-600">
                <i className="fab fa-github hover:scale-110"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/md-faysal-030800147/"
                className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
              >
                <i className="fab fa-linkedin hover:scale-110"></i>
              </a>
              <a
                href="/CV-SheikhMdFaysal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
              >
                <i className="ai ai-cv hover:scale-110"></i>
              </a>
              <a
                href="mailto:skmdfaysal@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
              >
                <i className="fas fa-envelope hover:scale-110"></i>
              </a>
            </div>
          </div>

          {/* Biography Section */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex-grow">
            <h2 className="text-xl md:text-2xl font-light">About Me</h2>
            <p className="text-sm sm:text-base md:text-lg mt-2 font-light">
              5+ years experienced Data Scientist with a demonstrated ability to deliver valuable insights via data analytics and advanced data-driven methods like Machine Learning and Deep Learning.
            </p>

            {/* Sections for Education and Certifications */}
            <div className="flex flex-col md:flex-row md:space-x-8 mt-8 space-y-8 md:space-y-0">

              {/* Education Section */}
              <div className="w-full md:w-1/2 mb-8 p-4 rounded-2xl shadow-xl bg-gradient-to-tr from-white via-gray-50 to-gray-100 border border-gray-100 transition-transform duration-300 hover:scale-105">
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-700">Education</h3>
                <hr className="my-2 border-gray-300" />
                <div className="flex items-center mb-2">
                  <i className="fas fa-graduation-cap text-blue-600 text-base md:text-lg mr-2"></i>
                  <span className="text-sm md:text-base font-semibold text-gray-800">B.Sc in Computer Science and Engineering</span>
                </div>
                <div className="text-xs md:text-sm text-gray-700 font-medium mb-1">National University of Bangladesh, Dhaka</div>
                <div className="text-xs md:text-sm text-gray-500">04/2016 – 11/2019</div>
                <div className="text-xs md:text-sm text-gray-500 mb-2">Dhaka, Bangladesh</div>
                <div className="flex items-center mt-2">
                  <i className="fas fa-lightbulb text-green-600 text-xs md:text-sm mr-2"></i>
                  <span className="text-xs md:text-sm text-gray-700 italic">
                    Thesis: "An Intelligent Surveillance System For Crime Detection"
                  </span>
                </div>
              </div>

              {/* Certifications Section */}
              <div className="w-full md:w-1/2 mb-8 p-6 rounded-2xl shadow-xl bg-gradient-to-tr from-white via-gray-100 to-gray-200 border border-gray-200 transition-transform duration-300 hover:scale-105">
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">Certifications</h3>
                <hr className="my-2 border-gray-300" />
                <ul className="list-none mt-2 space-y-2">
                  <li className="text-xs md:text-sm flex items-center gap-2">
                    <img src="/aws-icon.png" alt="AWS" className="h-5 w-5 object-contain shrink-0" />
                    <a
                      href="https://www.credly.com/badges/b0923177-7e0d-4d14-be6c-513831224178/linked_in?t=so52rt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 no-underline hover:underline"
                    >
                      AWS Certified AI Practitioner
                    </a>
                  </li>
                  <li className="text-xs md:text-sm flex items-center gap-2">
                    <img src="/coursera-icon.png" alt="Coursera" className="h-5 w-5 object-contain shrink-0" />
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/XLAYXDPDN9TQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 no-underline hover:underline"
                    >
                      Introduction to Machine Learning in Production
                    </a>
                  </li>
                  <li className="text-xs md:text-sm flex items-center gap-2">
                    <img src="/coursera-icon.png" alt="Coursera" className="h-5 w-5 object-contain shrink-0" />
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/ZTR6LQSXLWTR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 no-underline hover:underline"
                    >
                      Mathematics for Machine Learning: Linear Algebra
                    </a>
                  </li>
                  <li className="text-xs md:text-sm flex items-center gap-2">
                    <img src="/coursera-icon.png" alt="Coursera" className="h-5 w-5 object-contain shrink-0" />
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/E6CHPMWUUJDB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 no-underline hover:underline"
                    >
                      NLP with Classification and Vector Spaces
                    </a>
                  </li>
                  <li className="text-xs md:text-sm flex items-center gap-2">
                    <img src="/buet-icon.png" alt="University" className="h-5 w-5 object-contain shrink-0" />
                    <span className="text-gray-700">Introduction to Data Science with Python – BUET</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
