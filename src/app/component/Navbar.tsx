'use client';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 sm:h-[72px] bg-[#111111]/80 backdrop-blur-md border-b border-white/10 z-[50] shadow-md">
      <div className="h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[200px] flex items-center justify-between sm:justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-24">
        
        {/* Empty left spacer - hidden on mobile */}
        <div className="hidden sm:block sm:w-1/3"></div>
        
        {/* Logo - Centered on desktop, left on mobile */}
        <div className="flex items-center sm:w-1/3 sm:justify-center">
          <Image
            src="/logo.png"
            alt="HYPER Logo"
            width={100}
            height={33}
            className="select-none sm:w-[120px] sm:h-10 md:w-[150px] md:h-[50px]"
            priority
          />
        </div>

        {/* CTA Button */}
        <div className="flex items-center sm:w-1/3 sm:justify-end">
          <div className="relative inline-block p-[2px] bg-transparent">
            <button className="relative px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 text-white text-xs sm:text-sm tracking-widest flex items-center gap-1.5 sm:gap-2">
              {/* Text - hide "Connect With Us" on very small screens, show icon only */}
              <span className="hidden xs:inline sm:inline">Connect With Us</span>
              <span className="xs:hidden sm:hidden">Connect</span>
              
              <svg
                className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>

              {/* Cyan border (top-left) */}
              <span className="absolute top-0 left-0 w-[calc(100%-6px)] sm:w-[calc(100%-8px)] h-[calc(100%-6px)] sm:h-[calc(100%-8px)] border-t-[3px] sm:border-t-[4px] md:border-t-[5px] border-l-[3px] sm:border-l-[4px] md:border-l-[5px] border-cyan-400 pointer-events-none"></span>
              
              {/* Pink border (bottom-right) */}
              <span className="absolute bottom-0 right-0 w-[calc(100%-6px)] sm:w-[calc(100%-8px)] h-[calc(100%-6px)] sm:h-[calc(100%-8px)] border-b-[3px] sm:border-b-[4px] md:border-b-[5px] border-r-[3px] sm:border-r-[4px] md:border-r-[5px] border-pink-500 pointer-events-none"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
