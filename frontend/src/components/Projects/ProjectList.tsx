import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { getProjects } from "../../services/api";
import { Project } from "../../types/api";
import Loader from "../common/Loader";

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err instanceof Error ? err.message : 'Failed to load projects');
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div id="projects" className="project-section bg-gray-100 rounded-lg py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-light mb-6">Projects</h1>
          <div className="flex justify-center">
            <Loader size="lg" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="projects" className="project-section bg-gray-100 rounded-lg py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-light mb-6">Projects</h1>
          <div className="text-red-500">
            Error loading projects: {error}
          </div>
        </div>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div id="projects" className="project-section bg-gray-100 rounded-lg py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-light mb-6">Projects</h1>
          <div className="text-gray-500">
            No projects available.
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div id="projects" className="project-section bg-gray-100 rounded-lg py-4">
      <div className="container mx-auto">
        <div className="text-center mb-2">
          <h1 className="text-2xl font-light mb-0">Projects</h1>
        </div>
        {/* Add justify-center to center items when there's only one column */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">
          
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              websiteUrl={project.websiteUrl}
              githubUrl={project.githubUrl}
              reportUrl={project.reportUrl}
              listItems={project.listItems}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
