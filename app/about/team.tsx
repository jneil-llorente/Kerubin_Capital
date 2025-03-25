"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PiLinkedinLogo, PiTwitterLogo } from "react-icons/pi";

interface StatItemProps {
  label: string;
  value: string;
}

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  website?: string;
}

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
  social: SocialLinks;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, value }) => (
  <div
    className="flex flex-col items-center border-b md:border-b-0 
    md:border-l border-gray-200 px-4 py-6 first:border-l-0 
    flex-1 text-center"
  >
    <h3 className="text-[#7b7b7b] text-base mb-4">{label}</h3>
    <span className="text-4xl md:text-5xl lg:text-6xl font-light">{value}</span>
  </div>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({
  href,
  icon,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    {icon}
  </Link>
);

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  description,
  social,
}) => (
  <motion.div className="flex flex-col h-full">
    <div className="relative overflow-hidden group ">
      <motion.div transition={{ duration: 0.4 }} className="h-full">
        <Image
          height={10000}
          width={10000}
          src={image}
          alt={name}
          className="object-cover 
            h-[300px] 
            
            w-full "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black bg-opacity-20"
      />
    </div>
    <div className="pt-6 space-y-3 flex-1">
      <h3 className="font-medium text-xl">{name}</h3>
      <p className="text-gray-600 font-medium">{role}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      <div className="flex gap-4 pt-4">
        {social.linkedin && (
          <SocialIcon
            href={social.linkedin}
            icon={<PiLinkedinLogo size={20} />}
          />
        )}
        {social.twitter && (
          <SocialIcon
            href={social.twitter}
            icon={<PiTwitterLogo size={20} />}
          />
        )}
      </div>
    </div>
  </motion.div>
);

const stats: StatItemProps[] = [
  { label: "Team Size", value: "6" },
  { label: "Research", value: "1" },
  { label: "Engineers", value: "2" },
  { label: "Data Science", value: "1" },
  { label: "Strategy", value: "1" },
  { label: "Entrepreneurs", value: "1" },
];

const teamMembers: Omit<TeamMemberProps, "index">[] = [
  {
    name: "John smith",
    role: " Software Engineer",
    image: "/john-smith.jpg",
    description: "I like to code stuff",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      website: "https://website.com",
    },
  },
  {
    name: "John smith",
    role: " Software Engineer",
    image: "/john-smith.jpg",
    description: "I like to code stuff",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      website: "https://website.com",
    },
  },
  {
    name: "John smith",
    role: " Software Engineer",
    image: "/john-smith.jpg",
    description: "I like to code stuff",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      website: "https://website.com",
    },
  },
  {
    name: "John smith",
    role: " Software Engineer",
    image: "/john-smith.jpg",
    description: "I like to code stuff",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      website: "https://website.com",
    },
  },
  {
    name: "John smith",
    role: " Software Engineer",
    image: "/john-smith.jpg",
    description: "I like to code stuff",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      website: "https://website.com",
    },
  },
  {
    name: "John smith",
    role: " Software Engineer",
    image: "/john-smith.jpg",
    description: "I like to code stuff",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
      website: "https://website.com",
    },
  },

];

const Team = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
            /Team
          </p>
          <p
            className="text-[#7b7b7b]
           max-w-3xl text-lg"
          >
            Our team consists of dedicated professionals with diverse expertise
            in healthcare, technology, and innovation. Together, we work to
            create meaningful impact through cutting-edge solutions.
          </p>
        </motion.div>

        <div className="flex flex-col
         md:flex-row flex-wrap md:flex-nowrap 
         justify-between w-full mb-20">
          {stats.map((stat, index) => (
            <StatItem key={index} label={stat.label} 
            value={stat.value} />
          ))}
        </div>

        <div className="grid grid-cols-1
         md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>


      </div>
    </div>
  );
};

export default Team;
