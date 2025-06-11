import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import RoomsSection from '@/components/RoomsSection.tsx';
import AmenitiesSection from '@/components/AmmenditiesSection';
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <HeroSection />
            <RoomsSection />
            <AmenitiesSection />

            {/* Contact Preview Section */}
            <div className="py-20 bg-fauna-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-fauna-800 mb-6">Get in Touch</h2>
                    <p className="text-xl text-fauna-600 max-w-2xl mx-auto mb-8">
                        Have questions about your stay or need assistance planning your perfect nature retreat? We're here to help.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="/contact" className="bg-fauna-500 hover:bg-fauna-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            Contact Us
                        </a>
                        <a href="/about" className="bg-white border border-fauna-300 text-fauna-700 hover:bg-fauna-50 px-6 py-3 rounded-lg font-medium transition-colors">
                            About Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-fauna-800 text-white py-12">
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

export default Index;
