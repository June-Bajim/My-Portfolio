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
    { label: "Name", value: "June Jebiwott" },
    { label: "Date of birth", value: "June 10, 2003" },
    { label: "Address", value: "Nakuru, Kenya" },
    { label: "Zip code", value: "1000" },
    { label: "Email", value: "junekrotich@gmail.com" },
    { label: "Phone", value: "+254 745 383 037" },
  ];

  const interests = [
    { icon: "🎵", label: "Music" },
    { icon: "✈️", label: "Travel" },
    { icon: "🎬", label: "Movie" },
  ];

  return (
<div className="max-w-7xl mx-auto px-2 py-7 ">
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

    {/* Right side - About Me and Additional Content */}
    <div style={{ flex: '1', maxWidth: '50%', textAlign: 'left', padding: '20px' }}>
      <p className="text-l font-patrick">
        I am a dedicated full-stack developer with strong practical skills across both front-end and back-end technologies, as well as in artificial intelligence and machine learning. My front-end expertise includes HTML, CSS, JavaScript, React.js, and Next.js, while my back-end skills span Node.js, Python, and Flask, enabling me to build dynamic, scalable applications. I have experience developing and training machine learning models in Python to address real-world challenges, with one of my notable projects being the creation of a sentiment analysis model and accompanying website.
      </p>
      <p className="text-l font-patrick mt-6">
        In addition to web development, I am proficient in programming languages such as Java, C, and C++. I possess a solid foundation in database management, computer networking, and cybersecurity and have cultivated a keen interest in data science. My well-rounded skill set allows me to approach problems holistically and develop effective tech solutions.
      </p>
<br />
      {/* <div className="space-y-4 mt-4 text-l font-patrick">
        {details.map((detail, index) => (
          <PersonalDetail
            key={index}
            label={detail.label}
            value={detail.value}
          />
        ))}
      </div>
      <br />
      <div className="mt-8 flex flex-wrap gap-4 text-l font-patrick">
        <h2 className="text-xl font-patrick fontWeight-bold">My Interest:  </h2>
        
        {interests.map((interest, index) => (
          <InterestBadge
            key={index}
            icon={<span className="text-l">{interest.icon}</span>}
            label={interest.label}
          />
        ))}
      </div> */}
    </div>
  </div>
  <br />
</div>



  );
};

export default AboutMe;
