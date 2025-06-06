import React from "react";
import SkillGroup from "./SkillGroup";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="">
      <div className="container mx-auto py-4">
        <div className="text-center">
          <h1 className="text-2xl font-light pb-4">Skills</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <SkillGroup
            title="Languages"
            skills={[
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                iconAlt: "Python Logo",
                name: "Python",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
                iconAlt: "Go Logo",
                name: "Go",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
                iconAlt: "Rust Logo",
                name: "Rust",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                iconAlt: "Typescript Logo",
                name: "Typescript",
              },
            ]}
          />
          <SkillGroup
            title="ML/DL"
            skills={[
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
                iconAlt: "PyTorch Logo",
                name: "PyTorch",
              },
              {
                iconSrc: "/lightning.png",
                iconAlt: "Lightning Logo",
                name: "Lightning",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
                iconAlt: "ScikitLearn Logo",
                name: "SciKit Learn",
              },
              {
                iconSrc: "/polars.png",
                iconAlt: "Polars Logo",
                name: "Polars",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
                iconAlt: "NumPy Logo",
                name: "NumPy",
              },
            ]}
          />
          <SkillGroup
            title="Databases"
            skills={[
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
                iconAlt: "SQL Database Logo",
                name: "SQL",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                iconAlt: "PostgreSQL Logo",
                name: "Postgres",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
                iconAlt: "MongoDB Logo",
                name: "MongoDB",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
                iconAlt: "Redis Logo",
                name: "Redis",
              },
            ]}
          />
          <SkillGroup
            title="DevOps"
            skills={[
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
                iconAlt: "Docker Logo",
                name: "Docker",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                iconAlt: "Git Logo",
                name: "Git",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
                iconAlt: "CICD Logo",
                name: "CI",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
                iconAlt: "Linux Logo",
                name: "Linux",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                iconAlt: "AWS Logo",
                name: "AWS",
              },
            ]}
          />
          <SkillGroup
            title="WebDev"
            skills={[
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                iconAlt: "React Logo",
                name: "React",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                iconAlt: "Next.js Logo",
                name: "Next.js",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                iconAlt: "Tailwind Logo",
                name: "Tailwind",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
                iconAlt: "Bootstrap Logo",
                name: "Bootstrap",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
