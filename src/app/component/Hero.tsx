'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-[100] h-screen w-full overflow-hidden bg-black bg-[url('/Heros.png')] bg-cover bg-center group"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/20 via-[#111111]/40 to-[#111111]/100 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-full flex flex-col justify-end "
      >
        <div className="px-4 sm:px-8 md:px-16 lg:px-[200px]">
          <p className="text-white text-[0.85rem] pl-6 sm:text-sm md:text-base lg:text-lg font-medium mb-1 sm:mb-2">
            The story moves faster when it's told by
          </p>

          <h1
            className="font-extrabold text-white leading-none"
            style={{
              fontSize: 'clamp(6rem, 20vw + 1rem, 28.5rem)',
              letterSpacing: '-0.1em',
              lineHeight: 0.7,
              textShadow:
                '0 0 0 #fff, 5px 5px 0 #00eaff, -5px -5px 0 #ff00c8',
            }}
          >
            HYPER.
          </h1>
        </div>

        {/* Scroll To Explore Button */}
        <div className="absolute bottom-10 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <motion.button
            whileHover="hover"
            onClick={() => {
              document.getElementById('money-meet')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }}
            className="px-3 py-2 sm:px-4 sm:py-2 border border-white text-white text-xs sm:text-sm font-medium flex items-center gap-2 overflow-hidden relative cursor-pointer"
          >
            Scroll To Explore
            <motion.div
              className="relative w-3 h-3 sm:w-4 sm:h-4 overflow-hidden"
              variants={{
                initial: { y: 0 },
                hover: { y: [0, 20, -20, 0] },
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
