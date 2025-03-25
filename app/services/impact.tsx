'use client'

import React from "react";
import { motion } from "framer-motion";

interface ImpactCardProps {
  title: string;
  subtitle: string;
  value: string;
  description: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  title,
  subtitle,
  value,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-8 border-l border-black h-80 divide-y divide-gray-200
       flex flex-col"
    >
      <div className="flex flex-col h-full justify-between ">
        <div className="space-y-6">
          <h3 className="text-xl font-medium ">{title}</h3>
          <p className="text-gray-500 text-sm ">{subtitle}</p>
        </div>

        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl md:text-7xl font-normal "
        >
          {value}
        </motion.div>

        <div className="">
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Impact = () => {
  const impactData = [
    {
      title: "Women in Leadership",
      subtitle: "Board & Leadership Representation",
      value: "31%",
      description:
        "Female representation at MAIN’S Board and Leadership.",
    },
    {
      title: "Women Membership",
      subtitle: "Female Investor Community",
      value: "22%",
      description:
        "Percentage of women members at MAIN ",
    },
    {
      title: "Event Participation",
      subtitle: "Women Engaged Since 2019",
      value: "-5200",
      description:
        "No. of female who participated at MAIN's events and activities since 2019",
    },
    {
      title: "Female Investors",
      subtitle: "Women-Led Investments",
      value: "40%",
      description:
        "of which are female investors, based on the number of women who have participated in MAIN's events and activities since 2019.",
    },
    {
      title: "Job Creation",
      subtitle: "Opportunities Generated",
      value: "1000+",
      description:
        "No. of jobs created.",
    },
    {
      title: "Women Employment",
      subtitle: "Diversity in Unicorns",
      value: "500+",
      description:
        "No. of females employed.",
    },
  ];

  return (
    <div className="2xl:w-4/5 md:mx-auto md:px-16 px-6 py-16 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 space-y-2"
      >
        <h2 className="text-4xl font-bold
         text-gray-900 mb-4">Our Impact</h2>
        <p className="text-[#7b7b7b] text-lg">
        Through our initiatives supported by Investing in Women, we increased the quantum of female participation at the board level, in membership, investing and activities at Manila Angel Investors Network.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {impactData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ImpactCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
