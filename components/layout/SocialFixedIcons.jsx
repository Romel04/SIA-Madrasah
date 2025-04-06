// components/layout/SocialFixedIcons.jsx
"use client";

import { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function SocialFixedIcons() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const socialLinks = [
    { id: 1, icon: Facebook, url: "https://facebook.com", color: "#4267B2" },
    { id: 2, icon: Twitter, url: "https://twitter.com", color: "#1DA1F2" },
    { id: 3, icon: Instagram, url: "https://instagram.com", color: "#E1306C" },
    { id: 4, icon: Youtube, url: "https://youtube.com", color: "#FF0000" },
    { id: 5, icon: Mail, url: "mailto:info@example.com", color: "#08381a" }
  ];
  
  return (
    <div 
      className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center text-white mb-2 hover:w-12 transition-all duration-300"
            style={{ backgroundColor: social.color }}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}