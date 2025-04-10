"use client";
import { useTranslation } from '@/components/layout/TranslationContext';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
    const { t } = useTranslation();

    return (
        <section 
            className="py-16 relative overflow-hidden" 
            style={{ backgroundColor: '#f8f9fa' }} // Fallback background color
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/bg2.jpg')" }} // Set your background image here
            />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block group" style={{ color: '#08381a' }}>
                        About Us
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#08381a] animate-underline-left"></span>
                        <span className="absolute right-0 -bottom-4 w-full h-1 bg-[#08381a] animate-underline-right"></span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gray-700 mb-6">
                        We teach students using advanced learning materials and ensure a congenial learning environment for connective practice, regular tests, systematic and most importantly science-based activities in the classrooms targeting the academic calendar published for each year under the guidance of the Ministry of Education, Sylhet Education Board. As a result, this institution has been establishing its superiority both in curricular and co-curricular activities.
                    </p>
                    <p className="text-gray-700 mb-8">
                        This institution has been able to acquire appraisal in the field of inter-school & college debate, cultural competition, essay competition, and educational co-curricular activities. With the combining effects of students, teachers, guidance, and most importantly for the skilled management of the Governing Body.
                    </p>

                    <p className="text-gray-700 mb-8">
                        We are determined to shape it as the best educational institution of Sylhet as well as Bangladesh, maintaining consistency in the acquired result and reputation.
                    </p>
                    {/* <Button
                        className="text-white"
                        style={{ backgroundColor: '#08381a', borderColor: '#08381a' }}
                    >
                        Learn More About Us
                    </Button> */}
                </div>
            </div>
            

            <style jsx>{`
                @keyframes underline-left {
                    0% {
                        transform: scaleX(0);
                        transform-origin: left;
                    }
                    50% {
                        transform: scaleX(1);
                    }
                    100% {
                        transform: scaleX(0);
                        transform-origin: left;
                    }
                }

                @keyframes underline-right {
                    0% {
                        transform: scaleX(0);
                        transform-origin: right;
                    }
                    50% {
                        transform: scaleX(1);
                    }
                    100% {
                        transform: scaleX(0);
                        transform-origin: right;
                    }
                }

                .animate-underline-left {
                    animation: underline-left 2s infinite;
                }

                .animate-underline-right {
                    animation: underline-right 2s infinite;
                }
            `}</style>
        </section>
    );
}
