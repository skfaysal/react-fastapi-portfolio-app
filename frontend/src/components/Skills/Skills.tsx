import React, { useState, useEffect } from "react";
import SkillGroup from "./SkillGroup";
import { getSkillGroups } from "../../services/api";
import { SkillGroup as SkillGroupType } from "../../types/api";
import Loader from "../common/Loader";

const Skills: React.FC = () => {
  const [skillGroups, setSkillGroups] = useState<SkillGroupType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkillGroups = async () => {
      try {
        const data = await getSkillGroups();
        setSkillGroups(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching skill groups:', err);
        setError(err instanceof Error ? err.message : 'Failed to load skills');
        setLoading(false);
      }
    };
    
    fetchSkillGroups();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-light pb-4">Skills</h1>
          <div className="flex justify-center">
            <Loader size="lg" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="skills" className="py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-light pb-4">Skills</h1>
          <div className="text-red-500">
            Error loading skills: {error}
          </div>
        </div>
      </section>
    );
  }

  if (!skillGroups || skillGroups.length === 0) {
    return (
      <section id="skills" className="py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-light pb-4">Skills</h1>
          <div className="text-gray-500">
            No skills data available.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="">
      <div className="container mx-auto py-4">
        <div className="text-center">
          <h1 className="text-2xl font-light pb-4">Skills</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={index}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
