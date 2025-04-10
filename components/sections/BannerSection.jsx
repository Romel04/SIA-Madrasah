// components/sections/BannerSection.jsx
"use client";

import { useTranslation } from '@/components/layout/TranslationContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import React from 'react';
import Autoplay from "embla-carousel-autoplay"

const bannerData = [
  {
    id: 1,
    title: "Quality Islamic Education",
    subtitle: "Nurturing minds, enriching souls",
    backgroundImage: "/assets/banner1.jpg"
  },
  {
    id: 2,
    title: "Modern Teaching Methods",
    subtitle: "Balancing tradition with contemporary approaches",
    backgroundImage: "/assets/banner1.jpg"
  },
  {
    id: 3,
    title: "Developing Future Leaders",
    subtitle: "Character building through education",
    backgroundImage: "/assets/banner1.jpg"
  }
];

export default function BannerSection() {
  const { t } = useTranslation();

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  
  return (
    <section className="relative overflow-hidden flex items-center justify-center py-8" 
      style={{ backgroundColor: '#08381a' }}>
      {/* Fixed background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ 
          backgroundImage: "url('/assets/bannerBg.png')",
          // backgroundAttachment: "fixed"
        }}
      />
      
      {/* Centered carousel container using shadcn Carousel */}
      <div className="relative w-full max-w-[1300px] px-4 md:px-8 z-10">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {bannerData.map((slide) => (
              <CarouselItem key={slide.id}>
                <Card className="relative overflow-hidden rounded-lg shadow-2xl border-0 h-[250px] sm:h-[500px]" 
                  style={{ 
                    // height: "500px", 
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)'
                  }}>
                  <div 
                    className="absolute inset-0 bg-cover sm:bg-contain bg-center"
                    style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-6 md:px-12">
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">{t(slide.title)}</h1>
                      <p className="text-lg md:text-2xl">{t(slide.subtitle)}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white" />
          <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white" /> */}
        </Carousel>
      </div>
    </section>
  );
}