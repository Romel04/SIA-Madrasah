// components/sections/TeachersSection.jsx
"use client";

import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from "embla-carousel-autoplay";

const teachers = [
    {
        id: 1,
        name: "Dr. Mohammad Abdullah",
        designation: "Principal & Professor of Islamic Studies",
        image: "/assets/demoUser.jpg"
    },
    {
        id: 2,
        name: "Ustadh Ahmed Rahman",
        designation: "Vice Principal & Arabic Language Expert",
        image: "/assets/demoUser.jpg"
    },
    {
        id: 3,
        name: "Hafiz Ismail Ibrahim",
        designation: "Head of Quran Department",
        image: "/assets/demoUser.jpg"
    },
    {
        id: 4,
        name: "Dr. Sara Jahan",
        designation: "Professor of Islamic Jurisprudence",
        image: "/assets/demoUser.jpg"
    },
    {
        id: 5,
        name: "Maulana Abdul Hamid",
        designation: "Senior Lecturer in Hadith Sciences",
        image: "/assets/demoUser.jpg"
    },
    {
        id: 6,
        name: "Dr. Fatima Zahra",
        designation: "Professor of Islamic History",
        image: "/assets/demoUser.jpg"
    }
];

export default function TeachersSection() {
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    return (
        <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/bg2.jpg')" }} // Set your background image here
        />
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block group" style={{ color: '#08381a' }}>
                        Our Teachers
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#08381a] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                        <span className="absolute right-0 -bottom-4 w-full h-1 bg-[#08381a] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right"></span>
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mt-4">
                        Meet our team of qualified scholars and educators dedicated to nurturing the next generation
                        of Islamic scholars and responsible citizens.
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
                            {teachers.map((teacher) => (
                                <CarouselItem key={teacher.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="w-full flex-shrink-0 px-2">
                                        <Card className="overflow-hidden text-center h-full">
                                            <CardContent className="p-0">
                                                <div className="relative pb-square overflow-hidden">
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center"
                                                        style={{ backgroundImage: `url(${teacher.image})` }}
                                                    />
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-xl font-bold mb-1" style={{ color: '#08381a' }}>
                                                        {teacher.name}
                                                    </h3>
                                                    <p className="text-gray-600">{teacher.designation}</p>
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
