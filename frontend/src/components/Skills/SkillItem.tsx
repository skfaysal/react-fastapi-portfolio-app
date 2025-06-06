import React from 'react';
import { SkillItemProps } from './types';

const SkillItem: React.FC<SkillItemProps> = ({ iconSrc, iconAlt, name }) => {
    return (
      <div className="flex items-center mb-3 bg-white/80 rounded-full shadow-sm px-3 py-1 transition duration-200 hover:bg-gray-100">
        <span className="inline-block w-6 h-6 md:w-8 md:h-8">
          <img src={iconSrc} alt={iconAlt} className="w-full h-full object-contain" />
        </span>
        <span className="ml-2.5 text-gray-700 text-xs md:text-base font-medium">{name}</span>
      </div>
    );
  };

export default SkillItem;