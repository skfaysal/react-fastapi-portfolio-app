import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Sr. Machine Learning Engineer",
    company: "IQVIA",
    location: "Dhaka",
    dateRange: "03/2024 to present",
    description: [
      "Migrated ML algorithms from Kubeflow to SageMaker Pipeline with MLflow integration for enhanced model management.",
      "Implemented Multi-Agentic AI for data augmentation and created synthetic data to fine-tune LLM, enhancing its accuracy and robustness.",
      "Developed GitLab CI/CD pipelines and unit tests to improve code quality and deployment processes."
    ],
    logoUrl: "/iqvia-logo.png",
    websiteUrl: "#"
  },
  {
    title: "Lead Data Scientist",
    company: "SELISE Digital Platforms ltd.",
    location: "Dhaka, Bangladesh",
    dateRange: "04/2022 – 03/2024",
    description: [
      "Implemented Deep Learning techniques to identify various in-game events in FIFAe game streams/videos.",
      "Led a project converting 16:9 footage to mobile-friendly 9:16 with intelligent motion tracking for scene relevance and signal processing for seamless transitions.",
      "Video stream embedding extraction through OpenAI's CLIP and VIT. Completed the 1st version, incorporating clustering to group similar scenes across all stream chunks.",
      "Integrated MLflow, Airflow throughout training and production pipelines for comprehensive machine learning lifecycle management."
    ],
    logoUrl: "/selise-logo.png",
    websiteUrl: "#"
  },
  {
    title: "Machine Learning Engineer",
    company: "Smart Retina Ltd.",
    location: "Dhaka, Bangladesh",
    dateRange: "11/2020 – 02/2022",
    description: [
      "Attained 92% sensitivity in Diabetic Retinopathy classification from fundus images.",
      "Employed GradCam for precise model interpretation, pinpointing fundus image ROIs to aid ophthalmologists.",
      "Demonstrated a 3.2% accuracy boost in DR classification through Ensemble methods.",
      "Achieved 98% accuracy in classifying Left/Right fundus images.",
      "Image clustering based on learned model features."
    ],
    logoUrl: "/smart-retina-logo.png",
    websiteUrl: "#"
  },
  {
    title: "Machine Learning Engineer",
    company: "Daffodil Software Ltd.",
    location: "Dhaka, Bangladesh",
    dateRange: "10/2019 – 10/2020",
    description: [
      "Led a pilot project under the ICT Ministry of Bangladesh achieving 96% sensitivity in detecting Covid-19 and Pneumonia from chest X-rays and CT scans.",
      "Attained 98% accuracy in predicting student dropouts, resulting in a 2% reduction in retention rate over 2 semesters.",
      "Created a sentiment analysis model achieving 90% accuracy in evaluating mentor feedback to students."
    ],
    logoUrl: "/daffodil-logo.png",
    websiteUrl: "#"
  }
];

const Experience: React.FC = () => {
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
