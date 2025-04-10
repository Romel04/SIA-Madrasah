"use client";

import { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from "embla-carousel-autoplay";

const messages = [
    {
        id: 1,
        title: "Message from the Principal",
        content: "At Sirajul Islam Alim Madrasah, we believe in nurturing not just scholars but individuals with strong moral character and values. Our approach combines traditional Islamic teachings with contemporary education to prepare our students for the challenges of the modern world while staying rooted in their faith and culture.",
        image: "/api/placeholder/400/500"
    },
    {
        id: 2,
        title: "Message from the Chairman",
        content: "Our institution has been committed to excellence in education for over four decades. We take pride in our comprehensive curriculum, dedicated faculty, and state-of-the-art facilities. Our aim is to continue this legacy by adapting to the evolving educational landscape while preserving our core values.",
        image: "/api/placeholder/400/500"
    },
    {
        id: 3,
        title: "Message from the Academic Council",
        content: "The academic framework at our madrasah is designed to encourage critical thinking, creativity, and intellectual growth. We emphasize project-based learning, research, and practical applications alongside theoretical knowledge to ensure our graduates are well-equipped for further education and career opportunities.",
        image: "/api/placeholder/400/500"
    }
];

export default function MessageSection() {
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

    return (
        <section className="relative overflow-hidden flex items-center justify-center py-16"style={{ backgroundColor: '#08381a' }}>
            {/* Fixed background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: "url('/assets/bannerBg.png')", }} // Update the path to your background image
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block group" style={{ color: 'white' }}>
                        Messages from Leaders
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-white animate-underline-left"></span>
                        <span className="absolute right-0 -bottom-4 w-full h-1 bg-white animate-underline-right"></span>
                    </h2>
                </div>

                {/* Centered carousel container using shadcn Carousel */}
                <div className="relative w-full max-w-6xl mx-auto">
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        plugins={[plugin.current]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {messages.map((message) => (
                                <CarouselItem key={message.id}>
                                    <Card className="bg-white shadow-lg">
                                        <CardContent className="p-6">
                                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                                <div className="order-2 md:order-1">
                                                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#08381a' }}>
                                                        {message.title}
                                                    </h3>
                                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                                        {message.content}
                                                    </p>
                                                </div>
                                                <div className="order-1 md:order-2 flex justify-center">
                                                    <div className="relative w-64 h-80 overflow-hidden rounded-lg shadow-lg">
                                                        <div
                                                            className="absolute inset-0 bg-cover bg-center"
                                                            style={{ backgroundImage: `url(${message.image})` }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
            

            <style jsx>{`
                @keyframes underline-left {
                    0% {
                        transform: scaleX(0);
                        transform-origin: left;
                    }
                    50% {
                        transform: scaleX(1);
                    }
                    100% {
                        transform: scaleX(0);
                        transform-origin: left;
                    }
                }

                @keyframes underline-right {
                    0% {
                        transform: scaleX(0);
                        transform-origin: right;
                    }
                    50% {
                        transform: scaleX(1);
                    }
                    100% {
                        transform: scaleX(0);
                        transform-origin: right;
                    }
                }

                .animate-underline-left {
                    animation: underline-left 2s infinite;
                }

                .animate-underline-right {
                    animation: underline-right 2s infinite;
                }
            `}</style>
        </section>
    );
}
