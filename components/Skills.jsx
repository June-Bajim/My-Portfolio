import React from "react";

const SkillCircle = ({ skill, percentage }) => {
  const circumference = 2 * Math.PI * 47; // Circle radius of 47 units
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex-1 max-w-xs">
      {/* Skill name at the top */}
      <h3 className="text-xl font-bold text-center mb-4">{skill}</h3>

      {/* Circle with percentage inside */}
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="47"
            stroke="#e6e6e6"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="64"
            cy="64"
            r="47"
            stroke="green"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Percentage text centered inside the circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-2xl font-bold">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

const SkillsDisplay = () => {
  const skills = [
    { name: "CSS", percentage: 95 },
    { name: "HTML", percentage: 98 },
    { name: "jQuery", percentage: 68 },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-gray-600">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className="flex flex-row gap-8 justify-center">
        {skills.map((skill) => (
          <SkillCircle
            key={skill.name}
            skill={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsDisplay;
