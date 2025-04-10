"use client";

import { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const galleryImages = [
    {
        id: 1,
        thumbnail: "/assets/demoUser.jpg",
        fullsize: "/assets/demoUser.jpg",
        alt: "Madrasah Building Front View"
    },
    {
        id: 2,
        thumbnail: "/assets/demoUser.jpg",
        fullsize: "/assets/demoUser.jpg",
        alt: "Library"
    },
    {
        id: 3,
        thumbnail: "/assets/demoUser.jpg",
        fullsize: "/assets/demoUser.jpg",
        alt: "Prayer Hall"
    },
    {
        id: 4,
        thumbnail: "/assets/demoUser.jpg",
        fullsize: "/assets/demoUser.jpg",
        alt: "Classroom"
    },
    {
        id: 5,
        thumbnail: "/assets/demoUser.jpg",
        fullsize: "/assets/demoUser.jpg",
        alt: "Computer Lab"
    },
    {
        id: 6,
        thumbnail: "/assets/demoUser.jpg",
        fullsize: "/assets/demoUser.jpg",
        alt: "Sports Ground"
    }
];

export default function GallerySection() {
    const [viewIndex, setViewIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    const openImage = (index) => {
        setViewIndex(index);
        setShowModal(true);
    };

    const nextImage = () => {
        setViewIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setViewIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/bg2.jpg')" }} // Set your background image here
            />
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block group" style={{ color: '#08381a' }}>
                        Gallery
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#08381a] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                        <span className="absolute right-0 -bottom-4 w-full h-1 bg-[#08381a] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right"></span>
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mt-4">
                        Take a visual tour of our institution, facilities, and activities.
                    </p>
                </div>

                {/* Carousel Implementation */}
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
                            {galleryImages.map((image, index) => (
                                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="w-full flex-shrink-0 px-2">
                                        <div
                                            className="aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
                                            onClick={() => openImage(index)}
                                        >
                                            <div
                                                className="w-full h-full bg-cover bg-center"
                                                style={{ backgroundImage: `url(${image.thumbnail})` }}
                                            />
                                        </div>
                                        <p className="mt-2 text-center text-gray-600 text-sm">{image.alt}</p>
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
                <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
                    <div className="relative bg-white rounded-lg shadow-lg">
                        <div className="relative aspect-video">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${galleryImages[viewIndex].fullsize})` }}
                            />
                        </div>
                        <div className="p-4 bg-white">
                            <p className="text-center text-lg font-medium">{galleryImages[viewIndex].alt}</p>
                        </div>
                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={prevImage}
                                className="text-white bg-black/50 hover:bg-black/70 rounded-full"
                            >
                                <ChevronLeft size={24} />
                            </Button>
                        </div>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={nextImage}
                                className="text-white bg-black/50 hover:bg-black/70 rounded-full"
                            >
                                <ChevronRight size={24} />
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}
