// components/layout/TranslationContext.js
"use client";

import { createContext, useState, useContext, useEffect } from 'react';

// Define translations for common UI elements
const translations = {
  en: {
    // Navigation
    "home": "Home",
    "classes": "Classes",
    "results": "Results",
    "more": "More",
    "login": "Log In",
    "donate": "Donate Now",
    "apply": "Online Apply",
    
    // Classes dropdown
    "islamic_studies": "Islamic Studies",
    "arabic_language": "Arabic Language",
    "general_education": "General Education",
    
    // Results dropdown
    "annual_results": "Annual Results",
    "semester_results": "Semester Results",
    "previous_years": "Previous Years",
    
    // More dropdown
    "about_us": "About Us",
    "events": "Events",
    "gallery": "Gallery",
    "faq": "FAQ",
    
    // Footer
    "quick_links": "Quick Links",
    "student_list": "Student List",
    "teacher_list": "Teacher List",
    "curriculum": "Course Curriculum",
    "calendar": "Academic Calendar",
    "rules": "Rules & Regulations",
    "notices": "Notice Board",
    "contact_us": "Contact Us",
    
    // Home page
    "welcome": "Welcome to Sirajul Islam Alim Madrasah",
    "welcome_text": "Providing quality Islamic education blended with modern curriculum since 1980. Join us in our journey of nurturing knowledgeable, ethical, and responsible citizens.",
    "learn_more": "Learn More",
    "view_courses": "View Courses",
    "why_choose": "Why Choose Our Madrasah",
    
    // ...add more as needed
  },
  bn: {
    // Navigation
    "home": "হোম",
    "classes": "ক্লাস",
    "results": "ফলাফল",
    "more": "আরও",
    "login": "লগইন",
    "donate": "দান করুন",
    "apply": "অনলাইন আবেদন",
    
    // Classes dropdown
    "islamic_studies": "ইসলামি শিক্ষা",
    "arabic_language": "আরবি ভাষা",
    "general_education": "সাধারণ শিক্ষা",
    
    // Results dropdown
    "annual_results": "বার্ষিক ফলাফল",
    "semester_results": "সেমিস্টার ফলাফল",
    "previous_years": "আগের বছরগুলি",
    
    // More dropdown
    "about_us": "আমাদের সম্পর্কে",
    "events": "অনুষ্ঠান",
    "gallery": "গ্যালারি",
    "faq": "সাধারণ প্রশ্ন",
    
    // Footer
    "quick_links": "দ্রুত লিঙ্ক",
    "student_list": "ছাত্র তালিকা",
    "teacher_list": "শিক্ষক তালিকা",
    "curriculum": "কোর্স কারিকুলাম",
    "calendar": "একাডেমিক ক্যালেন্ডার",
    "rules": "নিয়ম ও প্রবিধান",
    "notices": "নোটিশ বোর্ড",
    "contact_us": "যোগাযোগ করুন",
    
    // Home page
    "welcome": "সিরাজুল ইসলাম আলিম মাদ্রাসায় স্বাগতম",
    "welcome_text": "১৯৮০ সাল থেকে আধুনিক পাঠ্যক্রমের সাথে মানসম্পন্ন ইসলামি শিক্ষা প্রদান করে আসছি। জ্ঞানী, নৈতিক এবং দায়িত্বশীল নাগরিক গড়ে তোলার যাত্রায় আমাদের সাথে যোগ দিন।",
    "learn_more": "আরও জানুন",
    "view_courses": "কোর্স দেখুন",
    "why_choose": "আমাদের মাদ্রাসা কেন বেছে নেবেন",
    
    // ...add more as needed
  }
};

// Create context
export const TranslationContext = createContext({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
});

// Provider component
export function TranslationProvider({ children }) {
  const [locale, setLocale] = useState('en');
  
  // Function to translate text
  const t = (key) => {
    return translations[locale]?.[key] || key;
  };
  
  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Custom hook to use the translation context
export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}