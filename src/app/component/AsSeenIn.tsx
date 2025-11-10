'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AsSeenIn() {
  const mediaItems = [
    {
      logo: '/testi1.png',
      quote: 'How HYPER bridges institutional finance and Gen Z investors with unapologetic speed.',
      tagline: 'The New Face of Finance Media',
    },
    {
      logo: '/testi55.png',
      quote: 'How HYPER bridges institutional finance and Gen Z investors with unapologetic speed.',
      tagline: 'Where Business Meets Culture',
    },
    {
      logo: '/trusted6.png',
      quote: 'How HYPER bridges institutional finance and Gen Z investors with unapologetic speed.',
      tagline: 'Next-Gen Storytelling for Modern Money',
    },
    {
      logo: '/testy3.png',
      quote: 'How HYPER bridges institutional finance and Gen Z investors with unapologetic speed.',
      tagline: 'The New Language of Finance',
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    fade: false,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section className="my-20 md:my-32 lg:my-[260px] overflow-hidden">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-[200px]">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-base sm:text-lg md:text-xl text-[#38B6FF] text-center mb-3 md:mb-4">
            Featured Across Media
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center font-bold px-4">
            As Seen In
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px]">
          <Slider {...settings}>
            {mediaItems.map((item, index) => (
              <div key={index} className="outline-none">
                <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
                  {/* Logo - Responsive sizing */}
                  <div className="relative w-[180px] h-[90px] sm:w-[250px] sm:h-[120px] md:w-[300px] md:h-[150px] mb-6 sm:mb-8 md:mb-12 mx-auto">
                    <Image
                      src={item.logo}
                      alt="Media logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 180px, (max-width: 768px) 250px, 300px"
                      priority={index === 0}
                    />
                  </div>

                  {/* Quote Mark - Responsive sizing */}
                  <div className="text-4xl sm:text-5xl md:text-6xl text-neutral-600 mb-4 sm:mb-5 md:mb-6">"</div>

                  {/* Quote - Responsive text */}
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-[95%] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[700px] leading-relaxed mb-6 sm:mb-7 md:mb-8 mx-auto">
                    {item.quote}
                  </p>

                  {/* Tagline - Responsive text */}
                  <p className="text-neutral-500 text-xs sm:text-sm md:text-base tracking-wider px-4">
                    {item.tagline}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}