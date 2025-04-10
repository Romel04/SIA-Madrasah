// components/layout/TopHeader.js
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Globe } from 'lucide-react';
import { useTranslation } from './TranslationContext';

export default function TopHeader() {
  const { locale, setLocale } = useTranslation();
  
  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'bn' : 'en');
  };
  
  return (
    <div className="w-full bg-white py-1 px-4 md:px-6 lg:px-8 border-b">
      <div className="container mx-auto flex sm:flex-col md:flex-row items-center justify-between gap-x-8">
        <div className="flex items-center mb-4 md:mb-0">
          <Image 
            src="/assets/logo.png" 
            alt="Sirajul Islam Alim Madrasah" 
            width={80} 
            height={80} 
            className="mr-4 w-[60px] h-[60px]"
          />
          <div className="text-center md:text-left hidden md:block">
            <h1 className="text-2xl font-bold text-green-800">Sirajul Islam Alim Madrasah</h1>
            <p className="text-green-600">P.O-Sunatula-3100, Upazila-Sadar, Dist-Sylhet</p>
          </div>
        </div>
        
        <div className="flex sm:flex-col md:flex-row items-center gap-4">
          <div className="flex space-x-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
              <Instagram size={24} />
            </a>
          </div>

          <div className='flex flex-col md:flex-row sm:gap-4 gap-2'>

          <Button 
            variant="outline" 
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            onClick={toggleLanguage}
          >
            <Globe className="mr-2 h-4 w-4" />
            {locale === 'en' ? 'বাংলা' : 'English'}
          </Button>
          
          <Button 
            className="bg-green-600 text-white hover:bg-green-700"
          >
            {locale === 'en' ? 'Online Apply' : 'অনলাইন আবেদন'}
          </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}