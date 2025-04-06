// lib/translation.js
"use client";

/**
 * Simple translation utility using LibreTranslate (a free open-source translation API)
 * Note: This uses a public instance which has rate limits
 */

// Cache to store translations
const translationCache = new Map();

// Basic Bangla-English dictionary for common words
const banglaEnglishDictionary = {
  // Common navigation terms
  "Home": "হোম",
  "Classes": "ক্লাস",
  "Results": "ফলাফল",
  "More": "আরও",
  "Login": "লগইন",
  "Donate": "দান করুন",
  "Apply": "আবেদন করুন",
  "About": "সম্পর্কে",
  "Contact": "যোগাযোগ",
  "Students": "শিক্ষার্থীরা",
  "Teachers": "শিক্ষকরা",
  
  // Common website content
  "Madrasah": "মাদ্রাসা",
  "Islamic": "ইসলামি",
  "Education": "শিক্ষা",
  "Welcome": "স্বাগতম",
  "Learn More": "আরও জানুন",
  "News": "সংবাদ",
  "Events": "ইভেন্ট",
  
  // Add more words as needed
};

// English-Bangla dictionary (reverse of the above)
const englishBanglaDictionary = Object.entries(banglaEnglishDictionary).reduce(
  (acc, [eng, ban]) => {
    acc[ban] = eng;
    return acc;
  },
  {}
);

// Function to detect if text appears to be Bangla
export function detectLanguage(text) {
  // Simple detection based on unicode ranges
  const bengaliCharRegex = /[\u0980-\u09FF]/;
  return bengaliCharRegex.test(text) ? 'bn' : 'en';
}

// Function to perform basic dictionary-based translation
function dictionaryTranslate(text, fromLang, toLang) {
  // Choose dictionary based on direction
  const dictionary = fromLang === 'en' ? banglaEnglishDictionary : englishBanglaDictionary;
  
  // Very simple word-by-word replacement
  // This is a simplified approach and won't handle grammar or complex sentences well
  return text.split(' ').map(word => {
    const cleanWord = word.replace(/[.,!?;()"'-]/g, '');
    const translation = dictionary[cleanWord] || cleanWord;
    return word.replace(cleanWord, translation);
  }).join(' ');
}

// Free translation API (with fallback to dictionary)
export async function translateText(text, targetLang, sourceLang = null) {
  // Detect source language if not provided
  if (!sourceLang) {
    sourceLang = detectLanguage(text);
  }
  
  // Don't translate if already in target language
  if (sourceLang === targetLang) {
    return text;
  }
  
  try {
    // Try LibreTranslate API
    const response = await fetch('https://libretranslate.com/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        source: sourceLang === 'bn' ? 'bn' : 'en',
        target: targetLang === 'bn' ? 'bn' : 'en',
        format: 'text',
      }),
      // Add a reasonable timeout
      signal: AbortSignal.timeout(5000)
    });
    
    if (!response.ok) {
      throw new Error('Translation API error');
    }
    
    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.log('Translation service error, falling back to dictionary:', error);
    // Fall back to simple dictionary translation
    return dictionaryTranslate(text, sourceLang, targetLang);
  }
}

// Main translation function with caching
export async function getTranslation(text, targetLang, sourceLang = null) {
  // Check cache first
  const cacheKey = `${text}:${targetLang}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }
  
  // If source language is not specified, detect it
  if (!sourceLang) {
    sourceLang = detectLanguage(text);
  }
  
  // Don't translate if already in target language
  if (sourceLang === targetLang) {
    return text;
  }
  
  try {
    const translated = await translateText(text, targetLang, sourceLang);
    
    // Cache the result
    translationCache.set(cacheKey, translated);
    
    return translated;
  } catch (error) {
    console.error('Translation failed:', error);
    return text; // Return original text if translation fails
  }
}