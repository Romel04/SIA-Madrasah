// components/sections/NoticeSection.jsx
"use client";

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, FileText, Book, Clock } from 'lucide-react';

const quickLinks = [
    {
        id: 1,
        title: "Attendance Sheet",
        icon: Calendar,
        color: "#08381a"
    },
    {
        id: 2,
        title: "Result",
        icon: FileText,
        color: "#08381a"
    },
    {
        id: 3,
        title: "Exam Schedule",
        icon: Clock,
        color: "#08381a"
    },
    {
        id: 4,
        title: "Routine",
        icon: Book,
        color: "#08381a"
    }
];

const notices = [
    {
        id: 1,
        title: "Admission Open for 2025-26 Academic Year",
        date: "April 01, 2025"
    },
    {
        id: 2,
        title: "Annual Sports Day Scheduled for May 15",
        date: "March 29, 2025"
    },
    {
        id: 3,
        title: "Parent-Teacher Meeting on April 12",
        date: "March 25, 2025"
    },
    {
        id: 4,
        title: "Holiday Notice: Eid-ul-Fitr",
        date: "March 20, 2025"
    },
    {
        id: 5,
        title: "Final Exam Schedule Released",
        date: "March 15, 2025"
    },
    {
        id: 6,
        title: "Annual Cultural Program Registration",
        date: "March 10, 2025"
    }
];

export default function NoticeSection() {
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollInterval;

        const startScroll = () => {
            scrollInterval = setInterval(() => {
                if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
                    scrollContainer.scrollTop = 0;
                } else {
                    scrollContainer.scrollTop += 1;
                }
            }, 30);
        };

        if (!isPaused) {
            startScroll();
        }

        return () => {
            if (scrollInterval) {
                clearInterval(scrollInterval);
            }
        };
    }, [isPaused]);

    return (
        <section className="py-16 bg-[#08381a]">
            <div className="container mx-auto px-4 sm:px-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block group" style={{ color: 'white' }}>
                        Notice Board
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-[white] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                        <span className="absolute right-0 -bottom-4 w-full h-1 bg-[white] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right"></span>
                    </h2>
                    <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#08381a' }}></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-6" style={{ color: '#08381a' }}>
                            Quick Links
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {quickLinks.map((link) => (
                                <Card key={link.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6 flex items-center">
                                        <link.icon size={24} style={{ color: link.color }} className="mr-4" />
                                        <span className="font-medium">{link.title}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6" style={{ color: '#08381a' }}>
                            Latest Notices
                        </h3>
                        <Card className="h-64 overflow-hidden">
                            <CardContent className="p-0">
                                <div
                                    ref={scrollRef}
                                    className="h-64 overflow-y-auto p-4"
                                    onMouseEnter={() => setIsPaused(true)}
                                    onMouseLeave={() => setIsPaused(false)}
                                >
                                    {notices.map((notice) => (
                                        <div key={notice.id} className="mb-4 pb-4 border-b last:border-b-0">
                                            <h4 className="font-medium" style={{ color: '#08381a' }}>
                                                {notice.title}
                                            </h4>
                                            <p className="text-sm text-gray-500">{notice.date}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}