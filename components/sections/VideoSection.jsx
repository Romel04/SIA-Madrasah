// components/sections/VideoSection.jsx
"use client";

import { useRef, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
//thumbnail - https://img.youtube.com/vi/youtube-video-id/maxresdefault.jpg
const videos = [
    {
        id: 1,
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        title: "Campus Tour",
        description: "Take a tour of our beautiful campus and facilities",
        embedId: "dQw4w9WgXcQ" // Placeholder YouTube ID
    },
    {
        id: 2,
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        title: "Principal's Message",
        description: "A message from our principal about our vision and mission",
        embedId: "dQw4w9WgXcQ" // Placeholder YouTube ID
    },
    {
        id: 3,
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        title: "Student Activities",
        description: "Highlights from our extracurricular activities and events",
        embedId: "dQw4w9WgXcQ" // Placeholder YouTube ID
    },
    {
        id: 4,
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        title: "Academic Excellence",
        description: "Learn about our academic curriculum and achievements",
        embedId: "dQw4w9WgXcQ" // Placeholder YouTube ID
    }
];

export default function VideoSection() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const plugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: true }));

    const openVideo = (video) => {
        setSelectedVideo(video);
        setShowModal(true);
    };

    return (
        <section className="py-16" style={{ backgroundColor: '#08381a' }}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block group" style={{ color: 'white' }}>
                        Videos
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-[white] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                        <span className="absolute right-0 -bottom-4 w-full h-1 bg-[white] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right"></span>
                    </h2>
                    <p className="text-white max-w-2xl mx-auto mt-4">
                        Watch videos about our madrasah, activities, and educational programs.
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
                            {videos.map((video) => (
                                <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="w-full flex-shrink-0 px-2">
                                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                            <div
                                                className="relative aspect-video group cursor-pointer"
                                                onClick={() => openVideo(video)}
                                            >
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center"
                                                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                                                />
                                                <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="w-16 h-16 rounded-full bg-black/70 flex items-center justify-center">
                                                        <Play size={32} className="text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-bold text-lg mb-1" style={{ color: '#08381a' }}>{video.title}</h3>
                                                <p className="text-gray-600 text-sm">{video.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogHeader></DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                        {selectedVideo && (
                            <>
                                <div className="aspect-video">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${selectedVideo.embedId}`}
                                        title={selectedVideo.title}
                                        allowFullScreen
                                        className="border-0"
                                    ></iframe>
                                </div>
                                <div className="p-4 bg-white">
                                    <h3 className="font-bold text-xl mb-2" style={{ color: '#08381a' }}>{selectedVideo.title}</h3>
                                    <p className="text-gray-700">{selectedVideo.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}
