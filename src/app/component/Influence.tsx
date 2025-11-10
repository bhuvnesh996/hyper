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

export default function Influence() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    { 
      title: 'Banking on Modern Influence', 
      description: 'We translated private banking into digital storytelling. From boardrooms to Instagram, Bethmann\'s message met a younger, faster audience.',
      img: '/influncerr1.png'
    },
    { 
      title: 'Turning Trust into Cultural Capital', 
      description: 'A campaign that redefined corporate credibility. We made leadership relatable through finance-first media moments.',
      img: '/influncerr2.png'
    },
    { 
      title: 'When Print Became Power', 
      description: 'Our first physical edition bridged old-money aesthetics with Gen Z humor. Limited-run, high-impact, a collectible that shaped our brand\'s authority.',
      img: '/influncerr3.png'
    }
  ];

  return (
    <section className="my-16 sm:my-24 md:my-32 lg:my-[220px]">
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-[200px]'>
        {/* Header */}
        <div className="flex items-center flex-col mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col items-center">
            <p className="text-base sm:text-lg md:text-xl text-[#38B6FF] text-center">
              Success Stories & Impact
            </p>
            <h2 className="mt-2 sm:mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl text-neutral-300 text-center font-bold px-4">
              Influence Meets Insight
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container - Only height changes on hover */}
              <motion.div 
                className="relative w-full overflow-hidden mb-4 sm:mb-6 border-b-[3px] sm:border-b-[4px] border-blue-500"
                animate={{ 
                  height: hoveredCard === index ? '450px' : '520px'
                }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{
                    scale: hoveredCard === index ? 1 : 1.02
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    priority
                    className="object-fill"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              </motion.div>

              {/* Content */}
              <div>
                <p className="text-lg sm:text-xl font-bold text-white mb-1">
                  {card.title}
                </p>

                {/* Description - Shows on hover */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="text-white text-xs sm:text-sm leading-relaxed"
                    >
                      {card.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}