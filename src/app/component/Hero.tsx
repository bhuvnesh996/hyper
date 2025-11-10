'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative z-[100] h-screen w-full overflow-hidden bg-black bg-[url('/Heros.png')] bg-cover bg-center group"
    >
      {/* Gradient overlay - darker at bottom, transparent at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/20 via-[#111111]/40 to-[#111111]/100 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-full w-full flex flex-col justify-end"
      >
        <div className="w-full px-4 sm:px-24 md:px-16 lg:px-[200px]">
          <div className="p-2">
            <p className="text-white text-sm sm:text-base md:text-lg font-medium mb-0">
              The story moves faster when it's told by
            </p>
          </div>
          <h1
            className="w-full font-extrabold leading-none text-white pointer-events-none block"
            style={{
              fontSize: 'clamp(80px, 22vw, 22vw)',
              letterSpacing: '-0.11em',
              lineHeight: 0.87,
              textShadow: '0 0 0 #fff, clamp(4px, 8px, 8px) clamp(4px, 8px, 8px) 0 #00eaff, clamp(-4px, -8px, -8px) clamp(-4px, -8px, -8px) 0 #ff00c8',
              transform: 'translateY(10%)'
            }}
          >
            HYPER.
          </h1>
        </div>

        {/* Scroll To Explore Button */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <motion.button
            whileHover="hover"
            initial="initial"
            onClick={() => {
              document.getElementById('money-meet')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="px-3 py-2 sm:px-4 sm:py-2 border border-white text-white text-xs sm:text-sm font-medium flex items-center gap-2 overflow-hidden relative cursor-pointer"
          >
            Scroll To Explore
            <div className="relative w-3 h-3 sm:w-4 sm:h-4 overflow-hidden">
              <motion.div
                variants={{
                  initial: { y: 0 },
                  hover: { y: [0, 20, -20, 0] }
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.div>
            </div>
          </motion.button>
        </div>

      </motion.div>
    </section>
  );
}