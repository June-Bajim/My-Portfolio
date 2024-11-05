"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "../../components/ParticlesBackground";
import SocialMedia from "../../components/SocialMedia";
import StatisticsSection from "../../components/StatisticsSection";
import AboutMe from "../../components/AboutMe";
import Skills from "../../components/Skills";
import Skill from "../../components/Skill";

const LandingPage = () => {
  const navItems = [
    "About Me",
    "Skills",
    "Projects",
    "Work",
    "Blog",
    "Contact",
  ];
  const skills = [
    { name: "React", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "Python", percentage: 70 },
    { name: "CSS", percentage: 85 },
  ];

  return (
    <ParticlesBackground>
      <div className="flex justify-center items-center mx-auto">
        <div className="min-h-screen w-full">
          {/* Navigation */}
          <nav className="fixed top-0 w-full backdrop-blur-sm z-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="text-2xl font-patrick font-bold text-green pl-0">
                  Mugwimi.
                </div>
                <div className="hidden md:flex space-x-16 px-10">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-green hover:text-white transition-colors font-patrick font-bold"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="relative min-h-screen flex items-center mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-4 mr-10 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Left Section - Text Content */}
                <div className="space-y-4 text-center md:text-left">
                  <div className="text-green tracking-wider font-patrick text-xl">
                    Hello, I&apos;m
                  </div>
                  <h1 className="text-5xl md:text-6xl font-patrick tracking-loose">
                    Christopher <br /> Mwangi,
                  </h1>
                  <h2 className="text-3xl md:text-2xl font-patrick leading-tight font-courier">
                    I&apos;m a{" "}
                    <span className="text-blue-600">Software Engineer</span>
                    <span className="text-white">.</span>
                  </h2>

                  {/* Buttons */}
                  <div className="flex space-x-4 pt-2">
                    <button className="bg-green text-black px-6 py-3 rounded hover:border-2 border-green hover:bg-black hover:text-white transition-colors font-patrick font-bold">
                      Talk to me
                    </button>
                    <button className="border-2 border-green px-6 py-3 rounded hover:bg-green hover:text-black transition-colors font-patrick font-bold">
                      Download Resume
                    </button>
                  </div>
                </div>

                {/* Center Section - Image */}
                <div className="flex justify-center">
                  <div className="w-[80%] aspect-square bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src="/Chris.jpeg"
                      alt="Professional portrait"
                      className="w-full h-full object-cover"
                      width={600}
                      height={600}
                    />
                  </div>
                </div>

                {/* Right Section - Social Media */}
                <div className="flex flex-col-4 justify-center md:justify-center ">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <StatisticsSection /> */}
      <AboutMe />

      <div className="w-full max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-patrick mt-8 text-center mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </ParticlesBackground>
  );
};

export default LandingPage;
