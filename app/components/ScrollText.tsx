"use client";

import { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import image1 from '../../public/image1.jpg';
import image2 from '../../public/image2.png';
import image3 from '../../public/image3.jpg'; 

type Section = {
  text: string;
  description: string;
  image: StaticImageData; 
}

const sections: Section[] = [
  {
    text: "Personalized job recs",
    description: "Get recommendations for relevant jobs, opportunities, and events based on your profile, interests, and what's best for you.",
    image: image1,
  },
  {
    text: "Inspiring career content",
    description: "Get career inspiration with posts, videos, and articles on success stories, career paths, and opportunities you might not otherwise have considered.",
    image: image2,
  },
  {
    text: "Build your network",
    description: "Connect with professionals and grow your network to discover more opportunities in your field.",
    image: image3,
  },
];

const ScrollingTextWithImage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = textContainerRef.current;
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
        let newSection = Math.floor(scrollPercentage * sections.length);
        newSection = Math.max(0,Math.min(newSection, sections.length - 1))
        if (newSection !== currentSection) {
          setCurrentSection(newSection);
        }
      }
    };

    const container = textContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentSection]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-7xl w-full h-screen flex flex-col md:flex-row items-center justify-between p-8">
        <div className="md:w-1/2 h-2/3 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative"
            >
              <Image
                src={sections[currentSection].image}
                alt={sections[currentSection].text}
                fill={true}
                className="rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div 
          ref={textContainerRef}
          className="md:w-2/3 h-full overflow-y-scroll pl-8 scrollbar-hide"
        >
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              className="min-h-screen flex flex-col justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold mb-4 py-2">{section.text}</h1>
              <p className="text-xl">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTextWithImage;
