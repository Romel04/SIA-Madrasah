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
    const requestRef = useRef(null);
    const manualScroll = useRef(false);
    const manualScrollTimeout = useRef(null);

    // Auto scroll functionality
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;
        
        const autoScroll = () => {
            if (isPaused || manualScroll.current) {
                requestRef.current = requestAnimationFrame(autoScroll);
                return;
            }
            
            // Check if we've reached the bottom
            if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 5) {
                // We've reached the bottom, reset to top with a slight delay
                setTimeout(() => {
                    if (scrollContainer) {
                        scrollContainer.scrollTop = 0;
                    }
                }, 500);
            } else {
                // Continue scrolling
                scrollContainer.scrollTop += 0.5;
            }
            
            requestRef.current = requestAnimationFrame(autoScroll);
        };
        
        requestRef.current = requestAnimationFrame(autoScroll);
        
        return () => {
            cancelAnimationFrame(requestRef.current);
            if (manualScrollTimeout.current) {
                clearTimeout(manualScrollTimeout.current);
            }
        };
    }, [isPaused]);

    // Handle manual scrolling
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const handleScrollStart = () => {
            manualScroll.current = true;
            if (manualScrollTimeout.current) {
                clearTimeout(manualScrollTimeout.current);
            }
        };

        const handleScrollEnd = () => {
            if (manualScrollTimeout.current) {
                clearTimeout(manualScrollTimeout.current);
            }
            
            manualScrollTimeout.current = setTimeout(() => {
                manualScroll.current = false;
            }, 1000);
        };

        scrollContainer.addEventListener('mousedown', handleScrollStart);
        scrollContainer.addEventListener('touchstart', handleScrollStart);
        scrollContainer.addEventListener('wheel', handleScrollStart);
        scrollContainer.addEventListener('mouseup', handleScrollEnd);
        scrollContainer.addEventListener('touchend', handleScrollEnd);
        scrollContainer.addEventListener('mouseleave', handleScrollEnd);
        
        return () => {
            scrollContainer.removeEventListener('mousedown', handleScrollStart);
            scrollContainer.removeEventListener('touchstart', handleScrollStart);
            scrollContainer.removeEventListener('wheel', handleScrollStart);
            scrollContainer.removeEventListener('mouseup', handleScrollEnd);
            scrollContainer.removeEventListener('touchend', handleScrollEnd);
            scrollContainer.removeEventListener('mouseleave', handleScrollEnd);
            
            if (manualScrollTimeout.current) {
                clearTimeout(manualScrollTimeout.current);
            }
        };
    }, []);

    return (
        <section className="relative overflow-hidden py-16" style={{ backgroundColor: '#08381a' }}>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: "url('/assets/bannerBg.png')" }}
            />
            <div className="container mx-auto px-4 sm:px-12 relative z-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block group" style={{ color: 'white' }}>
                        Notice Board
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-white animate-underline-left"></span>
                        <span className="absolute right-0 -bottom-4 w-full h-1 bg-white animate-underline-right"></span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-4">
                    {/* Latest Notices on top for mobile view only */}
                    <div className="order-1 md:order-2">
                        <h3 className="text-xl font-bold mb-6" style={{ color: 'white' }}>
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
                                    {/* Add invisible spacer to ensure clear detection of bottom */}
                                    <div className="h-1"></div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Links */}
                    <div className="order-2 md:order-1">
                        <h3 className="text-xl font-bold mb-6" style={{ color: 'white' }}>
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