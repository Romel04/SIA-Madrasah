"use client";

import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const counters = [
    {
        id: 1,
        title: "Total Students",
        endValue: 1200,
        icon: "👨‍🎓"
    },
    {
        id: 2,
        title: "Qualified Teachers",
        endValue: 45,
        icon: "👨‍🏫"
    },
    {
        id: 3,
        title: "Classes Offered",
        endValue: 25,
        icon: "📚"
    },
    {
        id: 4,
        title: "Departments",
        endValue: 6,
        icon: "🏛️"
    }
];

export default function CounterSection() {
    const [inView, setInView] = useState(false);
    const [counts, setCounts] = useState(counters.map(() => 0));
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        if (!inView) return;

        const duration = 2000; // 2 seconds for animation
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);

        let frame = 0;

        const timer = setInterval(() => {
            frame++;

            const progress = frame / totalFrames;
            const updatedCounts = counters.map((counter, index) => {
                return Math.floor(counter.endValue * Math.min(progress, 1));
            });

            setCounts(updatedCounts);

            if (frame === totalFrames) {
                clearInterval(timer);
            }
        }, frameDuration);

        return () => clearInterval(timer);
    }, [inView]);

    return (
        <section ref={sectionRef} className="relative overflow-hidden py-16"style={{ backgroundColor: '#08381a' }}>
            {/* Fixed background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: "url('/assets/bannerBg.png')" }} // Use the same background image
            />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block group" style={{ color: 'white' }}>
                        Our Achievement
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-[white] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                        <span className="absolute right-0 -bottom-4 w-full h-1 bg-[white] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right"></span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {counters.map((counter, index) => (
                        <Card key={counter.id} className="bg-white shadow-lg">
                            <CardContent className="p-6 text-center">
                                <div className="text-4xl mb-3" aria-hidden="true">
                                    {counter.icon}
                                </div>
                                <div className="text-4xl font-bold mb-2" style={{ color: '#08381a' }}>
                                    {counts[index].toLocaleString()}+
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {counter.title}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
