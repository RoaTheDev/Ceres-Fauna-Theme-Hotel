import Navigation from '@/components/Navigation';
import {  Leaf, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="container mx-auto px-4 py-8">


                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-fauna-800 mb-8">About Ceres Garden Hotel</h1>

                    <div className="prose prose-lg max-w-none text-fauna-700 space-y-6">
                        <p>
                            Nestled among the lush embrace of nature, the Ceres Garden Hotel stands as a testament to the beauty of Mother Earth. Named after the ancient goddess of agriculture and inspired by the gentle guardian of nature, Ceres Fauna, our hotel is a sanctuary where luxury meets sustainability.
                        </p>

                        <div className="bg-fauna-50 rounded-xl p-8 my-8">
                            <h2 className="text-2xl font-bold text-fauna-800 mb-4">Our Story</h2>
                            <p>
                                Founded in 2021, the Ceres Garden Hotel was born from a vision to create a space where guests could reconnect with the natural world while enjoying uncompromised comfort. Our architects and designers worked closely with environmental experts to create a structure that harmonizes with its surroundings rather than imposing upon them.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-fauna-800 mb-4">Our Philosophy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
                            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-fauna-100 rounded-full flex items-center justify-center mb-4">
                                    <Leaf className="w-8 h-8 text-fauna-600" />
                                </div>
                                <h3 className="font-bold text-fauna-800 mb-2">Sustainability</h3>
                                <p className="text-fauna-600">We embrace eco-friendly practices throughout our operations, from energy-efficient systems to organic gardens that supply our kitchens.</p>
                            </div>

                            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-fauna-100 rounded-full flex items-center justify-center mb-4">
                                    <Heart className="w-8 h-8 text-fauna-600" />
                                </div>
                                <h3 className="font-bold text-fauna-800 mb-2">Comfort</h3>
                                <p className="text-fauna-600">Every detail of our accommodations is designed with your comfort in mind, creating spaces that feel like a natural extension of home.</p>
                            </div>

                            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-fauna-100 rounded-full flex items-center justify-center mb-4">
                                    <Sparkles className="w-8 h-8 text-fauna-600" />
                                </div>
                                <h3 className="font-bold text-fauna-800 mb-2">Experience</h3>
                                <p className="text-fauna-600">We create memorable experiences that connect you with nature, from guided forest walks to stargazing evenings.</p>
                            </div>
                        </div>

                        <p>
                            At Ceres Garden Hotel, we believe that true luxury lies in the connection between humanity and nature. Our staff, our facilities, and our ethos are all aligned with this belief, creating a unique haven where you can retreat, recharge, and reconnect.
                        </p>

                        <p>
                            We invite you to experience the Ceres Garden difference — where every stay nourishes not just the body, but the soul.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-fauna-800 text-white py-12 mt-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Ceres Garden Hotel</h3>
                            <p className="text-fauna-200">
                                A nature-inspired sanctuary where luxury meets the tranquil beauty of Mother Earth.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-fauna-200">
                                <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms</Link></li>
                                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-fauna-200">
                                <li>Spa & Wellness</li>
                                <li>Fine Dining</li>
                                <li>Conference Facilities</li>
                                <li>Adventure Tours</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Contact Info</h4>
                            <div className="space-y-2 text-fauna-200">
                                <p>123 Nature's Way</p>
                                <p>Green Valley, NV 89123</p>
                                <p>+1 (555) NATURE-1</p>
                                <p>hello@ceresgarden.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-fauna-700 mt-8 pt-8 text-center text-fauna-200">
                        <p>&copy; 2024 Ceres Garden Hotel. All rights reserved. Inspired by nature, crafted with love.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;