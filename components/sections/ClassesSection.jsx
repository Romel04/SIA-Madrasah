"use client";

import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay";

const classes = [
    {
        id: 1,
        name: "আলেম আলেমা দাওরায় হাদিস (মাস্টার্স) একাডেমিক ক্লাস",
        image: "/assets/classes/1.webp",
        level: "Intermediate",
        seats: 40
    },
    {
        id: 2,
        name: "জুনিয়র স্কুল আলেম আলেমা একাডেমিক ক্লাস (৫ম - ৮ম শ্রেনী)",
        image: "/assets/classes/2.webp",
        level: "Beginner to Advanced",
        seats: 35
    },
    {
        id: 3,
        name: " প্রি-আলেম আলেমা একাডেমিক ক্লাস (৩ বছর)",
        image: "/assets/classes/3.webp",
        level: "All Levels",
        seats: 30
    },
    {
        id: 4,
        name: "প্রি-হিফজ / নাজেরা ক্লাস",
        image: "/assets/classes/4.webp",
        level: "Advanced",
        seats: 25
    },
    {
        id: 5,
        name: "পূর্ণাঙ্গ হিফজুল কুরআন ক্লাস",
        image: "/assets/classes/5.webp",
        level: "Intermediate to Advanced",
        seats: 30
    },
    {
        id: 6,
        name: "ইজরা নাহু সরফ ক্লাস",
        image: "/assets/classes/6.webp",
        level: "All Levels",
        seats: 45
    }
];

export default function ClassesSection() {
    const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

    return (
        <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
            />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block group" style={{ color: '#08381a' }}>
                        Our Classes
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#08381a] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                        <span className="absolute right-0 -bottom-4 w-full h-1 bg-[#08381a] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right"></span>
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mt-4">
                        Explore our diverse range of classes designed to provide comprehensive Islamic education along with modern academic subjects.
                    </p>
                </div>

                {/* Shadcn Carousel Implementation */}
                <div className="relative w-full max-w-5xl mx-auto">
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        plugins={[plugin.current]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {classes.map((classItem) => (
                                <CarouselItem key={classItem.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="w-full md:w-full flex-shrink-0 px-2">
                                        <Card className="overflow-hidden h-96">
                                            <div className="relative h-52 w-full overflow-hidden">
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center"
                                                    style={{ backgroundImage: `url(${classItem.image})` }}
                                                />
                                            </div>
                                            <CardContent className="pt-6 h-24">
                                                <h3 
                                                    className="text-xl font-bold mb-2 line-clamp-2 overflow-hidden text-ellipsis" 
                                                    style={{ color: '#08381a' }}
                                                    title={classItem.name} // Shows full text on hover
                                                >
                                                    {classItem.name}
                                                </h3>
                                            </CardContent>
                                            <CardFooter className="flex justify-between pt-0">
                                                <Button variant="outline" style={{ borderColor: '#08381a', color: '#08381a' }}>
                                                    Class Details
                                                </Button>
                                                <Button style={{ backgroundColor: '#08381a' }}>
                                                    Register
                                                </Button>
                                            </CardFooter>
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