// components/layout/NewsSlider.js
"use client";

import { useState, useEffect, useRef } from 'react';

export default function NewsSlider() {
  const [newsItems] = useState([
    "Admission open for 2025 academic year",
    "Annual exam results to be published next week",
    "Inter-madrasah competition scheduled for May 15",
    "New library building inauguration on June 10",
    "Special Quran recitation program this Friday"
  ]);
  
  const sliderRef = useRef(null);
  const newsSliderRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;
    
    const animateScroll = () => {
      setTranslateX(prev => {
        const newPosition = prev - 1;
        if (newPosition < -container.scrollWidth / 2) {
          return 0;
        }
        return newPosition;
      });
    };
    
    const interval = setInterval(animateScroll, 30);
    return () => clearInterval(interval);
  }, []);
  
  // Handle slider positioning relative to footer
  useEffect(() => {
    const newsSlider = newsSliderRef.current;
    if (!newsSlider) return;
    
    const updateNewsSliderPosition = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;
      
      const footerRect = footer.getBoundingClientRect();
      
      if (footerRect.top < window.innerHeight) {
        const bottomOffset = window.innerHeight - footerRect.top;
        newsSlider.style.bottom = `${bottomOffset}px`;
      } else {
        newsSlider.style.bottom = '0';
      }
    };
    
    window.addEventListener('scroll', updateNewsSliderPosition);
    window.addEventListener('resize', updateNewsSliderPosition);
    
    // Initial position check
    updateNewsSliderPosition();
    
    return () => {
      window.removeEventListener('scroll', updateNewsSliderPosition);
      window.removeEventListener('resize', updateNewsSliderPosition);
    };
  }, []);
  
  return (
    <div 
      ref={newsSliderRef}
      className="fixed bottom-0 left-0 w-full bg-[#08381a] text-white py-2 z-20"
    >
      <div className="overflow-hidden">
        <div 
          ref={sliderRef}
          className="whitespace-nowrap"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          <span className="inline-block pr-8">
            {newsItems.join(' • ')}
          </span>
          <span className="inline-block pr-8">
            {newsItems.join(' • ')}
          </span>
        </div>
      </div>
    </div>
  );
}