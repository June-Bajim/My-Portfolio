import React from "react";
import Image from "next/image";
import { Music, Briefcase, Film, Trophy } from "lucide-react";

const AboutMe = () => {
  const interests = [
    { icon: <Music className="w-6 h-6" />, text: "Music" },
    { icon: <Briefcase className="w-6 h-6" />, text: "Travelling" },
    { icon: <Film className="w-6 h-6" />, text: "Technology" },
    { icon: <Trophy className="w-6 h-6" />, text: "Sports" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image Section */}
          <div className="w-full relative">
            <div className="relative">
              <div className="absolute inset-0 z-10"></div>
              <Image
                src="/Chris.jpeg"
                alt="Profile"
                className="object-cover"
                width={550}
                height={550}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full flex flex-col justify-center">
            <div>
              <h2 className="text-3xl font-patrick text-green">About Me</h2>
              <br />
              <div className="text-white mb-8 font-patrick">
                <p>
                  Experienced in blending the art of design with the skill of
                  programming to deliver immersive and engaging user
                  experiences. I have strong proficiency in JavaScript and a
                  thorough understanding of React.js and its core principles.
                </p>{" "}
                <br />
                <p>
                  Additionally, I have completed several data science projects,
                  showcasing my proficiency in analyzing and interpreting
                  complex datasets. I am also skilled in computer
                  troubleshooting and networking.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  ["Location:", "Nyeri, Kenya"],
                  ["Email:", " chrismugwimi01@gmail.com"],
                  ["Phone:", " +254-757-961-791"],
                ].map(([label, value]) => (
                  <div key={label} className="flex">
                    <span className="w-32 font-patrick text-green mr-4">
                      {label}
                    </span>
                    <span className="text-white font-patrick">{value}</span>
                  </div>
                ))}
              </div>

              {/* Interests Section */}
              <div className="">
                <h3 className="text-3xl font-patrick text-green mb-6">
                  My Interests
                </h3>
                <br />
                <div className="flex flex-wrap gap-8">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-green">
                        {interest.icon}
                      </div>

                      <span className="font-patrick">{interest.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
