// components/layout/LayoutProvider.js
"use client";

import { createContext, useState, useEffect } from 'react';
import { TranslationProvider } from './TranslationContext';

export const LayoutContext = createContext({
  locale: 'en',
  setLocale: () => {},
});

export default function LayoutProvider({ children }) {
  const [locale, setLocale] = useState('en');
  
  // You can add more shared state or functions here
  
  return (
    <LayoutContext.Provider value={{ locale, setLocale }}>
      <TranslationProvider>
        {children}
      </TranslationProvider>
    </LayoutContext.Provider>
  );
}