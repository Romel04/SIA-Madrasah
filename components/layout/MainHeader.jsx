// components/layout/MainHeader.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from './TranslationContext';

export default function MainHeader() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { name: t('home'), key: 'home', href: '/', hasDropdown: false },
    { 
      name: t('classes'), 
      key: 'classes',
      href: '/classes',
      hasDropdown: true,
      dropdownItems: [
        { name: t('islamic_studies'), key: 'islamic_studies', href: '/classes/islamic-studies' },
        { name: t('arabic_language'), key: 'arabic_language', href: '/classes/arabic-language' },
        { name: t('general_education'), key: 'general_education', href: '/classes/general-education' },
      ]
    },
    { 
      name: t('results'), 
      key: 'results',
      href: '/results',
      hasDropdown: true,
      dropdownItems: [
        { name: t('annual_results'), key: 'annual_results', href: '/results/annual' },
        { name: t('semester_results'), key: 'semester_results', href: '/results/semester' },
        { name: t('previous_years'), key: 'previous_years', href: '/results/previous-years' },
      ]
    },
    { 
      name: t('more'), 
      key: 'more',
      href: '/more',
      hasDropdown: true,
      dropdownItems: [
        { name: t('about_us'), key: 'about_us', href: '/more/about' },
        { name: t('events'), key: 'events', href: '/more/events' },
        { name: t('gallery'), key: 'gallery', href: '/more/gallery' },
        { name: t('faq'), key: 'faq', href: '/more/faq' },
      ]
    },
  ];

  return (
    <div className="w-full bg-[#08381a] text-white py-2 px-4 md:px-6 lg:px-8 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between">
        
      <div className="hidden md:flex w-[130px]"></div>
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav className="flex space-x-6">
            {menuItems.map((item) => (
              <div key={item.key} className="relative group">
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-white hover:text-green-200 focus:outline-none">
                        {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white">
                      {item.dropdownItems.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.key}>
                          <Link href={dropdownItem.href} className="w-full text-green-800 hover:text-green-600">
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={item.href} className="text-white hover:text-green-200">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`absolute top-full left-0 w-full bg-green-600 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col p-4">
            {menuItems.map((item) => (
              <div key={item.key} className="py-2">
                {item.hasDropdown ? (
                  <div>
                    <button className="flex items-center text-white hover:text-green-200 w-full justify-between focus:outline-none">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="pl-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link 
                          key={dropdownItem.key} 
                          href={dropdownItem.href}
                          className="block text-green-200 hover:text-white"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className="text-white hover:text-green-200">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            className="bg-green-600 text-white hover:bg-green-700 hover:text-white"
          >
            {t('login')}
          </Button>
          <Button 
            className="bg-white border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            {t('donate')}
          </Button>
        </div>
      </div>
    </div>
  );
}