import React from "react";
import { Code, Shield, Cpu, Monitor } from "lucide-react"; // Import suitable icons from lucide-react

const PersonalDetail = ({ label, value }) => (
  <div className="flex items-center gap-8 py-2">
    <span className="font-medium text-gray-900 w-32">{label}:</span>
    <span className="text-gray-600">{value}</span>
  </div>
);

const SkillBadge = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-100 w-24 text-blue-800">
    {icon}
    <span className="text-sm font-medium text-blue-800">{label}</span>
  </div>
);

const AboutMe = () => {
  const details = [
    { label: "Name", value: "June Jebiwott" },
    { label: "Date of birth", value: "June 10, 2003" },
    { label: "Address", value: "Nakuru, Kenya" },
    { label: "Zip code", value: "1000" },
    { label: "Email", value: "junekrotich@gmail.com" },
    { label: "Phone", value: "+254 745 383 037" },
  ];

  const skills = [
    { icon: <Monitor size={32} />, label: "Web Development" },
    { icon: <Code size={32} />, label: "Front-End" },
    { icon: <Shield size={32} />, label: "Cybersecurity" },
    { icon: <Cpu size={32} />, label: "Machine Learning" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-2 py-7">
      <h1 className="text-3xl font-bold mb-8 font-patrick text-center">About Me</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '60vh', gap: '10px' }}>
        
        {/* Left side - Image Section */}
        <div style={{ flex: '1', maxWidth: '50%', padding: '20px', marginTop:'4' }}>
          <img
            src="/download (2).jpeg"  // Replace with the actual image path or URL
            alt="About Me Image"
            style={{ width: '100%', height: '60vh', borderRadius: '8px' }}  // Adjust as needed
          />
        </div>

        {/* Right side - Skills and Additional Content */}
        <div style={{ flex: '1', maxWidth: '50%', textAlign: 'left', padding: '20px' }}>
          <h2 className="text-xl font-bold mb-4">Services</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} icon={skill.icon} label={skill.label} />
            ))}
          </div>

          {/* Additional Details */}
          <div className="space-y-4 mt-4 mb-8">
            {details.map((detail, index) => (
              <PersonalDetail key={index} label={detail.label} value={detail.value} />
            ))}
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default AboutMe;
