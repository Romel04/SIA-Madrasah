// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutProvider from '@/components/layout/LayoutProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsSlider from '@/components/layout/NewsSlider';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sirajul Islam Alim Madrasah',
  description: 'Official website of Sirajul Islam Alim Madrasah',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pb-16">{children}</main>
            <ScrollToTopButton />
            <NewsSlider />
            <Footer />
          </div>
        </LayoutProvider>
      </body>
    </html>
  );
}