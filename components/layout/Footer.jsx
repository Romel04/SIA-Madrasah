// components/layout/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const quickLinks = [
        { name: 'Student List', href: '/students' },
        { name: 'Teacher List', href: '/teachers' },
        { name: 'Course Curriculum', href: '/curriculum' },
        { name: 'Academic Calendar', href: '/calendar' },
        { name: 'Rules & Regulations', href: '/rules' },
        { name: 'Notice Board', href: '/notices' },
    ];

    return (
        <footer className="bg-[#08381a] text-white pt-12 pb-6 px-3 sm:px-8">
            <div className="container mx-auto">
                {/* Footer top section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Column 1: Logo and About */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex flex-col items-center mb-4">
                            <Image
                                src="/assets/logo.png"
                                alt="Sirajul Islam Alim Madrasah"
                                width={80}
                                height={80}
                                className="mr-4 w-[60px] h-[60px]"
                            />
                            <h2 className="text-xl font-bold">Sirajul Islam Alim Madrasah</h2>
                        </div>
                        <p className="text-white mb-6 text-center md:text-justify">
                            Sirajul Islam Alim Madrasah is dedicated to providing quality Islamic education along with modern curriculum.
                            Established in 1980, our institution has been serving the community with dedication and excellence.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                                <Facebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                                <Twitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-center md:items-center">
                        <h3 className="text-xl font-semibold mb-6 border-b-2 border-green-600 pb-2 ml-[-40px]">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white hover:text-white hover:underline">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-semibold mb-6 border-b-2 border-green-600 pb-2">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Mail className="mr-3 text-green-300" size={20} />
                                <p>info@sirajulislam-madrasah.edu</p>
                            </div>
                            <div className="flex items-center">
                                <Phone className="mr-3 text-green-300" size={20} />
                                <p>+880 1234 567890</p>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="mr-3 text-green-300" size={20} />
                                <p>123 Islamic Education Road, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer bottom section */}
                <div className="border-t border-green-700 mt-8 pt-6 text-center">
                    <p className="text-white">
                        © {new Date().getFullYear()} Sirajul Islam Alim Madrasah. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}