// components/sections/AboutSection.jsx
"use client"
import { useTranslation } from '@/components/layout/TranslationContext';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
    const { t } = useTranslation();

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block group" style={{ color: '#08381a' }}>
                        About Us
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#08381a] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                        <span className="absolute right-0 -bottom-4 w-full h-1 bg-[#08381a] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right"></span>
                    </h2>
                    {/* <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#08381a' }}></div> */}
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
                    <Button
                        className="text-white"
                        style={{ backgroundColor: '#08381a', borderColor: '#08381a' }}
                    >
                        Learn More About Us
                    </Button>
                </div>
            </div>
        </section>
    );
}
