'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
  {
    id: 1,
    image: '/MagazineCover6.png',
    description: 'The Market but Make it Cultural'
  },
  {
    id: 2,
    image: '/MagazineCover5.png',
    description: 'Searious Finance , Starical spirit'
  },
  {
    id: 3,
    image: '/MagazineCover4.png',
    description: 'Economy, Aesthetics and everything in between'
  },
  {
    id: 4,
    image: '/MagazineCover3.png',
    description: 'The Market but Make it Cultural'
  },
  {
    id: 5,
    image: '/MagazineCover2.png',
    description: 'Searious Finance , Starical spirit'
  },
  {
    id: 6,
    image: '/MagazineCover1.png',
    description: 'Searious Finance , Starical spirit'
  }
];

// Animation variants for container and children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: 100 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

export default function MoneyMeet() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Responsive visible cards: 1 on mobile, 2 on tablet, 4 on desktop
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 4; // Desktop
    }
    return 4;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const cardWidth = 100 / visibleCards;

  // Update visible cards on window resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setVisibleCards(getVisibleCards());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < cards.length - visibleCards;

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && canScrollLeft) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === 'right' && canScrollRight) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canScrollRight) {
      scroll('right');
    }
    if (isRightSwipe && canScrollLeft) {
      scroll('left');
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const firstVisibleCardId = cards[currentIndex]?.id;
  const lastVisibleCardId = cards[currentIndex + visibleCards - 1]?.id;

  const handleCardHover = (cardId: number) => {
    setHoveredCard(cardId);
    
    if (cardId === firstVisibleCardId && canScrollLeft) {
      setShowLeftArrow(true);
    }
    
    if (cardId === lastVisibleCardId && canScrollRight) {
      setShowRightArrow(true);
    }
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
    setShowLeftArrow(false);
    setShowRightArrow(false);
  };

  return (
    <section className="my-16 sm:my-24 md:my-32 lg:my-[220px]" id='money-meet'>
      {/* Header */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-[200px]">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-base sm:text-lg md:text-xl text-[#38B6FF] text-center">
              Print & Digital Editions
            </p>
            <h2 className="mt-2 sm:mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl text-neutral-300 text-center font-bold">
              Old Money Meets Meme
            </h2>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div className="px-4 sm:px-8 md:px-16 lg:px-[200px] relative z-[40]">
          {/* Left Arrow - Hidden on mobile */}
          <AnimatePresence>
            {showLeftArrow && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() => scroll('left')}
                onMouseEnter={() => setShowLeftArrow(true)}
                style={{
                  left: `calc(${window.innerWidth < 640 ? '2rem' : window.innerWidth < 1024 ? '4rem' : '150px'} + ${cardWidth / 2}%)`
                }}
                className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-sm items-center justify-center transition-all duration-300 hover:bg-black/80 hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Right Arrow - Hidden on mobile */}
          <AnimatePresence>
            {showRightArrow && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() => scroll('right')}
                onMouseEnter={() => setShowRightArrow(true)}
                style={{
                  right: `calc(${window.innerWidth < 640 ? '2rem' : window.innerWidth < 1024 ? '4rem' : '150px'} + ${cardWidth / 2}%)`
                }}
                className="hidden sm:flex absolute top-1/2 -translate-y-1/2 translate-x-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/10 backdrop-blur-sm items-center justify-center transition-all duration-300 hover:bg-black/80 hover:scale-110 shadow-lg"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.button>
            )}
          </AnimatePresence>

          <div 
            className="overflow-visible -mx-2 sm:-mx-3" 
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              animate={{
                x: `-${currentIndex * cardWidth}%`
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
            >
              {cards.map((card) => {
                const isFirstVisible = card.id === firstVisibleCardId;
                const isLastVisible = card.id === lastVisibleCardId;
                const showLeftGradient = isFirstVisible && showLeftArrow;
                const showRightGradient = isLastVisible && showRightArrow;

                return (
                  <motion.div
                    key={card.id}
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: `${cardWidth}%` }}
                    variants={cardVariants}
                  >
                    <motion.div
                      className="relative h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden cursor-pointer"
                      onMouseEnter={() => handleCardHover(card.id)}
                      onMouseLeave={handleCardLeave}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={card.image}
                          alt="COVER"
                          fill
                          className={`object-fill transition-all h-auto duration-500 ${
                            hoveredCard === card.id
                              ? 'scale-120 blur-sm'
                              : 'scale-100 blur-0'
                          }`}
                        />
                        <div
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            hoveredCard === card.id ? 'opacity-80' : 'opacity-20'
                          }`}
                        />

                        {showLeftGradient && (
                          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-transparent" />
                        )}
                        {showRightGradient && (
                          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/10 to-transparent" />
                        )}
                      </div>

                      {/* Content Overlay */}
                      <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 text-center">
                        <AnimatePresence mode="wait">
                          {hoveredCard === card.id && (
                            <motion.div
                              key="hovered"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-4"
                            >
                              <p className="text-base sm:text-lg md:text-xl max-w-[150px] sm:max-w-[180px] md:max-w-[200px] text-white leading-relaxed">
                                {card.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Pagination dots for mobile */}
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-[#38B6FF] w-6' : 'bg-neutral-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}