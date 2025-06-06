import React from "react";
import { SkillGroupProps } from "./types";
import SkillItem from "./SkillItem";

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => {
    return (
      <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-md p-4 mb-2 transition-transform duration-300 hover:scale-105">
        <div className="text-sm md:text-xl font-light mb-2.5 border-b-2 border-gray-300 pb-1.5">
          {title}
        </div>
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    );
  };
  
  export default SkillGroup;