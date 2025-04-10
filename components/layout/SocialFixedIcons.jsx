"use client";

import { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function SocialFixedIcons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const footer = document.getElementById('footer'); // Make sure your footer has this ID
      const footerPosition = footer ? footer.getBoundingClientRect().top : Infinity;

      // Show icons after scrolling down 200px and hide when footer is visible
      setIsVisible(scrollPosition > 200);
      setIsFooterVisible(footerPosition < window.innerHeight);
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
      className={`fixed right-4 hidden sm:block top-1/2 transform -translate-y-1/2 z-50 transition-opacity duration-300 ${
        isVisible && !isFooterVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col space-y-3">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
            style={{ backgroundColor: social.color }}
          >
            <social.icon size={24} className="text-white" />
          </a>
        ))}
      </div>
    </div>
  );
}
