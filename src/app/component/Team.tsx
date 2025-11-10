'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [hoveredTeam, setHoveredTeam] = useState(false);

  const mainTeam = [
    { 
      name: 'Christoph Wieland', 
      role: 'Co-Founder & Editor-in-Chief', 
      description: 'The strategist shaping HYPER\'s editorial direction, merging finance reporting with digital storytelling.',
      img: '/team1.png' 
    },
    { 
      name: 'Niklas Schwab', 
      role: 'Co-Founder & Creative Director', 
      description: 'Niklas brings charisma, irony, and cultural edge to HYPER\'s financial world.',
      img: '/team22.png' 
    },
    { 
      name: 'Lara Stein', 
      role: 'Visual Director', 
      description: 'Crafts the visual language of HYPER, timeless, dark, and unapologetically modern.',
      img: '/team3.png' 
    },
    { 
      name: 'Felix Brandt', 
      role: 'Head of Partnerships', 
      description: 'Connects brands, banks, and ideas. Building collaborations that turn credibility into influence.',
      img: '/team4.png' 
    }
  ];

  return (
    <section className="my-16 sm:my-24 md:my-32 lg:my-[220px]">
      <div className="mx-4 relative z-[25] sm:mx-8 md:mx-16 lg:mx-[200px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-[#38B6FF] text-center mb-3 sm:mb-4"
          >
            Editorial & Creative Minds
          </motion.p>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center font-bold px-4"
          >
            The Minds Behind HYPER
          </motion.h2>
        </motion.div>

        {/* Main Team Grid - Responsive columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12"
        >
          {mainTeam.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group cursor-pointer relative"
              onMouseEnter={() => setHoveredMember(i)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Photo */}
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Dark overlay that slides up on hover */}
                <AnimatePresence>
                  {hoveredMember === i && (
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '100%' }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute inset-0 bg-black/50 z-10"
                    />
                  )}
                </AnimatePresence>

                {/* Name & Role - STAYS IN PLACE */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                  <p className="text-[#38B6FF] text-base sm:text-lg font-bold mb-1">
                    {member.name}
                  </p>
                  <p className="text-white text-xs sm:text-sm mb-2 sm:mb-3">
                    {member.role}
                  </p>

                  {/* Description - Fades in below role */}
                  <AnimatePresence>
                    {hoveredMember === i && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="text-neutral-300 text-xs sm:text-sm leading-relaxed"
                      >
                        {member.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Editorial Team Section - Full Width Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredTeam(true)}
          onMouseLeave={() => setHoveredTeam(false)}
        >
          <Image
            src="/team5.png"
            alt="Editorial Team"
            fill
            className="object-cover grayscale"
            sizes="100vw"
          />
          
          {/* Always visible gradient on right side */}
          <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent z-10"></div>
          
          {/* Dark overlay that slides up on hover - ONLY ON RIGHT SIDE */}
          <AnimatePresence>
            {hoveredTeam && (
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="absolute top-0 right-0 bottom-0 w-full sm:w-[50%] md:w-[40%] lg:w-[30%] bg-black/50 z-15"
              />
            )}
          </AnimatePresence>

          {/* Text - moves up on hover */}
          <motion.div
            animate={{ 
              y: hoveredTeam ? -30 : 0 
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute bottom-6 sm:bottom-8 md:bottom-12 right-6 sm:right-8 md:right-12 text-right z-20"
          >
            <p className="text-[#38B6FF] text-xl sm:text-2xl md:text-3xl font-bold mb-1 leading-tight">
              Editorial Team
            </p>
            <p className="text-white text-xs sm:text-sm mb-2 sm:mb-3">
              Contributors & Creators
            </p>

            {/* Description - Fades in when text moves up */}
            <AnimatePresence>
              {hoveredTeam && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-neutral-300 text-xs leading-relaxed max-w-[200px] sm:max-w-[250px] md:max-w-[280px] ml-auto"
                >
                  A collective of writers, analysts, and creatives shaping how Europe consumes business culture.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}