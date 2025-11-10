'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TrustedBy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const industries = ['Media', 'Culture', 'Finance'];

  const logos = [
    '/trusted1.png',
    '/trusted2.png',
    '/trusted3.png',
    '/trusted4.png',
    '/trusted5.png',
    '/trusted6.png',
  ];

  // Rotate text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // React Slick settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="my-16 sm:my-24 md:my-32 lg:my-[220px] overflow-hidden">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-[200px]">
        <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-base sm:text-lg md:text-xl text-[#38B6FF] text-center">
            Our Partners & Clients
          </p>
          <h2 className="mt-2 sm:mt-3 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-300 text-center font-bold px-4">
            Trusted By Leaders In{' '}
            <span className="inline-block w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] text-left relative align-middle">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="inline-block text-[#38B6FF]"
                >
                  {industries[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
        </div>
      </div>

      {/* React Slick Carousel */}
      <div className="relative w-full mt-12 sm:mt-16 md:mt-16 lg:mt-20">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2 sm:px-3 md:px-4">
              <div className="w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[120px] md:h-[110px] lg:w-[130px] lg:h-[120px] relative mx-auto">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  className="object-contain"
                  quality={75}
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 120px, 130px"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}