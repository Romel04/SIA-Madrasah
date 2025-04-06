// app/page.js
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function InitialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative bg-green-50 rounded-lg overflow-hidden mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center p-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Welcome to Sirajul Islam Alim Madrasah
            </h1>
            <p className="text-green-700 text-lg mb-6">
              Providing quality Islamic education blended with modern curriculum since 1980.
              Join us in our journey of nurturing knowledgeable, ethical, and responsible citizens.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Learn More
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                View Courses
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-80">
            <div className="relative w-full h-full">
              {/* Use a placeholder image */}
              <div className="absolute inset-0 bg-green-200/50 flex items-center justify-center rounded-lg">
                <p className="text-center text-green-800">Madrasah Building Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Why Choose Our Madrasah</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Quality Islamic Education",
              description: "Comprehensive Islamic studies taught by qualified scholars and educators."
            },
            {
              title: "Modern Curriculum",
              description: "Balanced approach combining religious studies with modern academic subjects."
            },
            {
              title: "Character Building",
              description: "Focus on developing moral values, ethics, and responsible citizenship."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
              <h3 className="font-bold text-xl mb-3 text-green-700">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Announcement Section */}
      <section className="bg-green-700 text-white p-8 rounded-lg mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Admissions Open for 2025</h2>
          <p className="mb-6">Join our prestigious institution and benefit from our wholesome education system.</p>
          <Button className="bg-white text-green-700 hover:bg-green-100">
            Apply Now
          </Button>
        </div>
      </section>
      
      {/* Events & News Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Latest Events & News</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Annual Sports Day",
              date: "April 15, 2025",
              excerpt: "Join us for our annual sports day celebration featuring various competitions and activities."
            },
            {
              title: "Quran Competition Results",
              date: "March 20, 2025",
              excerpt: "Congratulations to all participants and winners of our annual Quran recitation competition."
            }
          ].map((post, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-green-600 mb-2">{post.date}</p>
              <h3 className="font-bold text-xl mb-3 text-green-800">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link href="#" className="text-green-600 hover:text-green-800 font-medium">
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">What Parents & Students Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              quote: "The balance between Islamic education and modern subjects has greatly benefited my child's overall development.",
              author: "Parent of Class 10 Student"
            },
            {
              quote: "The teachers are highly qualified and create a nurturing environment that encourages learning and personal growth.",
              author: "Graduate of 2023"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
              <p className="text-green-700 font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}