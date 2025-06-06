import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    ArrowLeft,
    User,
    Hotel,
    Leaf,
    Wifi,
    Coffee
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { rooms } from '@/data/rooms.ts';

const RoomDetailPage = () => {
    const { id } = useParams();
    const roomId = parseInt(id || '0');

    const room = rooms.find(room => room.id === roomId);

    if (!room) {
        return (
            <div className="min-h-screen bg-background">
                <Navigation />
                <div className="container mx-auto px-4 py-20">
                    <Link to="/rooms">
                        <Button variant="ghost" className="mb-6 pl-0">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Rooms
                        </Button>
                    </Link>
                    <div className="text-center py-20">
                        <h1 className="text-3xl font-bold text-fauna-800 mb-4">Room Not Found</h1>
                        <p className="text-fauna-600 mb-8">The room you are looking for does not exist.</p>
                        <Button asChild>
                            <Link to="/rooms">View All Rooms</Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // Additional details for the expanded room view
    const amenities = [
        { icon: <Wifi className="h-5 w-5" />, name: "Free High-Speed WiFi" },
        { icon: <Coffee className="h-5 w-5" />, name: "Coffee Machine" },
        { icon: <Leaf className="h-5 w-5" />, name: "Eco-Friendly Toiletries" },
    ];

    const highlights = [
        "Soundproofed rooms for perfect tranquility",
        "Organic cotton linens and towels",
        "Natural wood furnishings",
        "Panoramic views of the surrounding landscape",
        "Daily housekeeping service"
    ];

    const handleBookRoom = () => {
        console.log(`Booking room ${room.id}`);
        // This would open the booking process
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="container mx-auto px-4 py-8">
                <Link to="/rooms">
                    <Button variant="ghost" className="mb-6 pl-0">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Rooms
                    </Button>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Room Image Gallery (main image and thumbnails) */}
                    <div className="lg:col-span-2">
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src={room.image}
                                alt={room.name}
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            <div className="rounded-lg overflow-hidden">
                                <img src={room.image} alt="Room view 1" className="w-full h-24 object-cover" />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <img src={room.image} alt="Room view 2" className="w-full h-24 object-cover" />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <img src={room.image} alt="Room view 3" className="w-full h-24 object-cover" />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <img src={room.image} alt="Room view 4" className="w-full h-24 object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Room Details & Booking */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between items-start">
                                <h1 className="text-3xl font-bold text-fauna-800">{room.name}</h1>
                                <Badge className="bg-fauna-500 text-white text-lg">
                                    ${room.price}/night
                                </Badge>
                            </div>

                            <div className="flex items-center space-x-4 mt-3 text-fauna-600">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  Up to {room.capacity} guests
                </span>
                                <span className="flex items-center">
                  <Hotel className="w-4 h-4 mr-1" />
                                    {room.size}
                </span>
                            </div>
                        </div>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-fauna-800 mb-4">Book This Room</h3>
                                <div className="mb-4">
                                    <p className="mb-2 text-fauna-600">Price for 1 night</p>
                                    <div className="flex items-end">
                                        <span className="text-2xl font-bold text-fauna-700">${room.price}</span>
                                        <span className="text-fauna-600 ml-1">/night</span>
                                    </div>
                                    <p className="text-sm text-fauna-500 mt-1">Excluding taxes and fees</p>
                                </div>

                                <Button
                                    onClick={handleBookRoom}
                                    className="w-full bg-fauna-500 hover:bg-fauna-600 text-white py-6 text-lg"
                                >
                                    Book Now
                                </Button>
                                <p className="text-center text-sm text-fauna-600 mt-3">
                                    Free cancellation up to 24 hours before check-in
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Description and Features */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-fauna-800 mb-4">Description</h2>
                            <p className="text-fauna-600">{room.description}</p>
                            <p className="text-fauna-600 mt-4">
                                Immerse yourself in the tranquil beauty of nature with panoramic views from your private balcony.
                                Each element of this room has been carefully selected to create a harmonious blend of comfort and
                                natural aesthetics, using sustainable materials and incorporating elements of the surrounding landscape.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-fauna-800 mb-4">Room Features</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {room.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center text-fauna-600">
                                        <div className="w-2 h-2 bg-fauna-400 rounded-full mr-2"></div>
                                        {feature}
                                    </div>
                                ))}
                                {highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-center text-fauna-600">
                                        <div className="w-2 h-2 bg-fauna-400 rounded-full mr-2"></div>
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-fauna-800 mb-4">Amenities</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {amenities.map((amenity, idx) => (
                                    <div key={idx} className="flex flex-col items-center p-4 bg-fauna-50 rounded-lg text-center">
                                        <div className="w-12 h-12 bg-fauna-100 rounded-full flex items-center justify-center mb-3">
                                            {amenity.icon}
                                        </div>
                                        <span className="text-fauna-700">{amenity.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-fauna-800 mb-4">Policies</h2>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <div>
                                    <h3 className="font-semibold text-fauna-800">Check-in</h3>
                                    <p className="text-fauna-600">From 3:00 PM</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-fauna-800">Check-out</h3>
                                    <p className="text-fauna-600">Until 12:00 PM</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-fauna-800">Cancellation</h3>
                                    <p className="text-fauna-600">Free cancellation up to 24 hours before check-in</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-fauna-800">Pets</h3>
                                    <p className="text-fauna-600">Pets are welcome (additional charges may apply)</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-fauna-800">Smoking</h3>
                                    <p className="text-fauna-600">No smoking allowed</p>
                                </div>
                            </CardContent>
                        </Card>
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
                                <li><RouterLink to="/rooms" className="hover:text-white transition-colors">Rooms</RouterLink></li>
                                <li><RouterLink to="/about" className="hover:text-white transition-colors">About Us</RouterLink></li>
                                <li><RouterLink to="/contact" className="hover:text-white transition-colors">Contact</RouterLink></li>
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

export default RoomDetailPage;