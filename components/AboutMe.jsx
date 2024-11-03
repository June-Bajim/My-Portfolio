import React from "react";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const PersonalDetail = ({ label, value }) => (
  <div className="flex items-center gap-8 py-2">
    <span className="font-medium text-gray-900 w-32">{label}:</span>
    <span className="text-gray-600">{value}</span>
  </div>
);

const InterestBadge = ({ icon, label }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const AboutMe = () => {
  const details = [
    { label: "Name", value: "Your Name" },
    { label: "Date of birth", value: "January 01, 1990" },
    { label: "Address", value: "San Francisco CA USA" },
    { label: "Zip code", value: "1000" },
    { label: "Email", value: "email@example.com" },
    { label: "Phone", value: "+1-234-567-890" },
  ];

  const interests = [
    { icon: "🎵", label: "Music" },
    { icon: "✈️", label: "Travel" },
    { icon: "🎬", label: "Movie" },
    { icon: "⚽", label: "Sports" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          MY INTRO
        </h2>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-gray-600 text-lg mb-8">
          A brief introduction about yourself and your background. Share what
          makes you unique and what you&aposre passionate about.
        </p>
      </div>

      <div className="space-y-4">
        {details.map((detail, index) => (
          <PersonalDetail
            key={index}
            label={detail.label}
            value={detail.value}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {interests.map((interest, index) => (
          <InterestBadge
            key={index}
            icon={<span className="text-xl">{interest.icon}</span>}
            label={interest.label}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
