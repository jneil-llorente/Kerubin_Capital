'use client'

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsData = [
  {
    title: "Angel investors share tips on how to grow a startup biz",
    description: "Philstar",
    date: "March 13, 2023",
    image: "/news1.jpg",
    link: "https://www.philstar.com/lifestyle/business-life/2023/03/13/2250752/angel-investors-share-tips-how-grow-startup-biz",
  },
  {
    title: "Women entrepreneurs",
    description: "Manila Standard",
    date: "December 11, 2023",
    image: "/news2.jpg",
    link: "https://manilastandard.net/gallery/news-in-photos/314286550/women-entrepreneurs",
  },
  {
    title: "Tips from angel investors to make your investment soar",
    description: "Business Mirror",
    date: "December 9, 2022",
    image: "/news3.png",
    link: "https://backendnews.net/manila-angel-investors-network-encourages-more-funding-for-women-entrepreneurs/",
  },
  {
    title: "Philippines among world’s fastest growing startup hubs – report",
    description: "Philstar",
    date: "July 14, 2024",
    image: "/news4.jpg",
    link: "https://www.philstar.com/business/2024/07/14/2369948/philippines-among-worlds-fastest-growing-startup-hubs-report",
  },
  {
    title: "PH angel investors partner with Singapore fintech",
    description: "Manila Bulletin",
    date: "July 22, 2022",
    image: "/news5.jpeg",
    link: "https://mb.com.ph/2022/07/20/ph-angel-investors-partner-with-singapore-fintech/?utm_campaign=ph-angel-investors-partner-with-singapore-fintech&utm_medium=rss&utm_source=rss",
  },
  {
    title: "PH has 'healthy', growing startup ecosystem: Angel investor group",
    description: "Philstar",
    date: "July 14, 2024",
    image: "/news6.jpeg",
    link: "https://www.abs-cbn.com/video/business/06/22/22/ph-has-healthy-growing-startup-ecosystem",
  },
  {
    title: "MAIN launches its first Gender Lens Investment forum on women entrepreneurs",
    description: "Manila Times",
    date: "April 6, 2022",
    image: "/news7.png",
    link: "https://www.manilatimes.net/2022/04/06/public-square/main-launches-its-first-gender-lens-investment-forum-on-women-entrepreneurs/1838942",
  },
  {
    title: "MAIN Investment Forum",
    description: "Malaya Business Insight",
    date: "March 29, 2022",
    image: "/news8.jpeg",
    link: "https://malaya.com.ph/business/marketing-board/honda-cars-dealership-singlife-protection-pru-life-uk-donation-main-investment-forum-bpi-aia-recognition-dhl-express-collection-tool-refocus-for-digital-marketing-finis-partners-with-bcda-napo/",
  },
  {
    title: "Top Fintech Influencers in The Philippines",
    description: "Fintech News Philippines",
    date: "March 29, 2022",
    image: "/news9.png",
    link: "https://fintechnews.ph/55547/fintechphilippines/top-fintech-influencers-in-the-philippines/",
  }
];

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length
    );
  };

  return (
    <div className="px-6 md:px-16 mx-auto 2xl:w-4/5 py-16 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Stay Updated with the Latest Industry Insights</h2>
      <p className="text-gray-600 mb-8 md:text-lg">
        Stay ahead of the curve with the latest updates on business trends, investment strategies, and entrepreneurial success stories.
      </p>
      <div className="relative w-full max-w-5xl overflow-hidden">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide} 
          className="p-3 md:p-4 bg-white bg-opacity-80 rounded-full shadow-md hover:bg-gray-200 absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
        </button>
        <button 
          onClick={nextSlide} 
          className="p-3 md:p-4 bg-white bg-opacity-80 rounded-full shadow-md hover:bg-gray-200 absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
        </button>
        {/* News Cards */}
        <div className="flex transition-transform duration-500 ease-in-out space-x-4" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {newsData.map((news, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2">
              <Link href={news.link} target="_blank" rel="noopener noreferrer" className="block bg-white shadow-md rounded-lg overflow-hidden w-full">
                <div className="w-full h-48 md:h-56 relative">
                  <Image src={news.image} layout="fill" objectFit="cover" alt={news.title} />
                </div>
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{news.description}</p>
                  <p className="text-gray-500 text-xs md:text-sm mt-2">{news.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
