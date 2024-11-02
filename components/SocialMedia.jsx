import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn Profile",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter Profile",
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email Me",
    },
  ];

  return (
    <div style={{ writingMode: "vertical-rl" }} className="flex gap-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-green hover:text-white transition-colors duration-300"
        >
          <social.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
