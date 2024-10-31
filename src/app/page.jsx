import React from "react";
import Link from "next/link";
import Head from "next/head";
import Background from "../../components/Background";

const LandingPage = () => {
  const navItems = [
    "About Me",
    "Skills",
    "Projects",
    "Work",
    "Blog",
    "Contact",
  ];

  return (
    <Background>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Laxent:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center items-center h-screen">
        <div className="min-h-screen w-full">
          {/* Navigation */}
          <nav className="fixed top-0 w-full backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                {/* Moved logo more to the left */}
                <div className="text-2xl font-patrick text-green pl-0">
                  Mugwimi.
                </div>
                <div className="hidden md:flex space-x-16 px-10">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-green hover:text-green transition-colors font-bold"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="relative min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Adjusted grid gap and padding */}
              <div className="grid md:grid-cols-2 gap-4 items-center">
                {/* Left Content - Adjusted spacing */}
                <div className="space-y-4 pr-8">
                  <div className="text-green tracking-wider font-patrick">
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

                  <div className="flex space-x-4 pt-2">
                    <button className="bg-green text-black px-6 py-3 rounded hover:bg-sage-600 transition-colors font-bold">
                      Hire me
                    </button>
                    <button className="border-2 border-green text-sage-500 px-6 py-3 rounded hover:bg-sage-50 transition-colors font-bold">
                      Download CV
                    </button>
                  </div>
                </div>

                {/* Right Image - Adjusted positioning */}
                <div className="hidden md:block md:pl-0">
                  <div className="w-[90%] aspect-square bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="/Chris.jpeg"
                      alt="Professional portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default LandingPage;
