import { Separator } from "@/components/ui/separator";
import Navbar from "../navbar";
import Brands from "./brands";
import Image from "next/image";
import Process from "./process";
import Impact from "./impact";
import Industries from "./industries";
import Footer from "../footer";

const services = [
  {
    title: "Invest",
    description: `We source, screen, and co-invest in high-potential, women-led startups through our network of angel investors, venture capital funds, government entities, and corporate partners.`,
    benefits: [
      "Growth Opportunities",
      "Expert Screening",
      "Impact Investing",
      "Strong Network",
      "Diversified Portfolio",
      "Exclusive Deals",
    ],
    image: "/invest.jpg",
  },

  {
    title: "Connect ",
    description: `We link female founders with industry leaders, mentors, and partners across the startup and innovation ecosystem to help them grow and scale. `,
    benefits: [
      "Founder Support",
      "Mentorship Access",
      "Industry Connections",
      "Growth Partnerships",
      "Scaling Guidance",
      "Ecosystem Network",
    ],
    image: "/connect.jpg",
  },
  {
    title: "Build",
    description: `We engage with  investors on the financial and social impact of gender-lens investing—helping to create a future where women receive equal opportunities to access capital.   We also support initiatives that increase the number of female investors, ensuring a more diverse and inclusive investment landscape.
  `,
    benefits: [
      "Capital Access",
      "Gender Equity",
      "Inclusive Investing",
      "Diverse Network",
      "Impact Growth",
      "Investor Support",
    ],
    image: "/build.jpg",
  },
];

const Services = () => {
  return (
    <div className="md:min-h-screen bg-white">
      <Navbar />

      {/* hero section */}

      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto flex items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
              Turning Vision into Action 
            </h1>
            <p className="text-xl text-neutral-500">
            We’re not just talking about change—we’re making it happen.  Through a powerful mix of investment, mentorship, and strategic business connections, we help female founders break through barriers and secure the funding they deserve.  By collaborating with MAIN and our global partners, we provide not just capital, but the right network and expertise to help women-led startups succeed.
            </p>
          </div>
        </div>
      </div>

      <Brands />
      <Separator className="my-16" />

      {/* services section */}

      <div className="md:py-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <h2 className="text-xl font-bold text-[#7b7b7b] mb-10">
          / Invest with Purpose
        </h2>

        <div className="space-y-16 md:space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {/* image section */}
              <div className="w-full">
                <Image
                  priority
                  width={1200}
                  height={675}
                  src={service.image}
                  alt="image"
                  className="shadow-lg md:w-[640px] h-[400px] object-cover"
                />
              </div>

              {/* content section */}
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-8">{service.title}</h2>
                <p className="text-[#7b7b7b] mb-12">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div
                      className="flex items-center space-x-2"
                      key={benefitIndex}
                    >
                      <span className="text-[#7b7b7b]">/ {benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Process />
      <Impact />
      <Industries />
      <Footer />

      
    </div>
  );
};

export default Services;
