"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > 300); // Show button after scrolling down 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`z-50 fixed bottom-[50px] right-4 p-3 rounded-full bg-black text-white shadow-lg transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ display: isVisible ? 'block' : 'none' }} // Hide when not visible
        >
            <ArrowUp size={24} />
        </button>
    );
}
