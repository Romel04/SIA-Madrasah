// components/sections/AffiliatesSection.jsx
"use client";

import { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const affiliates = [
    {
        id: 1,
        name: "Islamic Research Foundation",
        logo: "/api/placeholder/120/120",
        description: "Partner for Islamic research and development",
        socials: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com"
        }
    },
    {
        id: 2,
        name: "Al-Azhar University",
        logo: "/api/placeholder/120/120",
        description: "Academic partnership for curriculum development",
        socials: {
            facebook: "https://facebook.com",
            instagram: "https://instagram.com"
        }
    },
    {
        id: 3,
        name: "Islamic Education Council",
        logo: "/api/placeholder/120/120",
        description: "Regulatory body for Islamic education standards",
        socials: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com"
        }
    },
    {
        id: 4,
        name: "Global Islamic Academy",
        logo: "/api/placeholder/120/120",
        description: "International partner for student exchanges",
        socials: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com"
        }
    },
    {
        id: 5,
        name: "Islamic Scientific Foundation",
        logo: "/api/placeholder/120/120",
        description: "Research partner for scientific initiatives",
        socials: {
            facebook: "https://facebook.com",
            linkedin: "https://linkedin.com"
        }
    }
];

export default function AffiliatesSection() {
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    const SocialIcon = ({ type, url }) => {
        const icons = {
            facebook: Facebook,
            twitter: Twitter,
            linkedin: Linkedin,
            instagram: Instagram
        };

        const Icon = icons[type];

        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className="mr-2 hover:opacity-80">
                <Icon size={18} className="text-gray-600" />
            </a>
        );
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block group" style={{ color: '#08381a' }}>
                        Affiliate Partners
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#08381a] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                        <span className="absolute right-0 -bottom-4 w-full h-1 bg-[#08381a] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right"></span>
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mt-4">
                        We collaborate with various institutions to enhance the quality of education and broaden opportunities for our students.
                    </p>
                </div>

                {/* Shadcn Carousel Implementation */}
                <div className="relative w-full max-w-5xl mx-auto mb-4">
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        plugins={[plugin.current]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {affiliates.map((affiliate) => (
                                <CarouselItem key={affiliate.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="w-full flex-shrink-0">
                                        <Card className="h-full rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                                            <CardContent className="p-6 flex flex-col items-center text-center">
                                                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#08381a]">
                                                    <div
                                                        className="w-full h-full bg-cover bg-center"
                                                        style={{ backgroundImage: `url(${affiliate.logo})` }}
                                                    />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2" style={{ color: '#08381a' }}>
                                                    {affiliate.name}
                                                </h3>
                                                <p className="text-gray-600 mb-4">{affiliate.description}</p>
                                                <div className="flex mt-auto">
                                                    {affiliate.socials && Object.entries(affiliate.socials).map(([type, url]) => (
                                                        <SocialIcon key={type} type={type} url={url} />
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
