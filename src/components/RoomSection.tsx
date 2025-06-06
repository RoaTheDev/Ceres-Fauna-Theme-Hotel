import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Hotel, User} from 'lucide-react';
import {Link} from 'react-router-dom';
import {rooms} from "@/data/rooms.ts";

interface RoomsSectionProps {
    showFullDetails?: boolean;
}

const RoomsSection = ({ showFullDetails = false }: RoomsSectionProps) => {
    const handleBookRoom = (roomId: number) => {
        console.log(`Booking room ${roomId}`);
        // This would open the booking process
    };

    return (
        <section id="rooms" className={showFullDetails ? "" : "py-20 bg-gradient-to-b from-fauna-50 to-white"}>
            <div className="container mx-auto px-4">
                {!showFullDetails && (
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-fauna-800 mb-6">
                            Our Nature Sanctuaries
                        </h2>
                        <p className="text-xl text-fauna-600 max-w-3xl mx-auto">
                            Each room is a carefully crafted sanctuary where modern comfort meets the tranquil beauty of nature
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {rooms.map((room, index) => (
                        <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-fauna-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="relative">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-fauna-500 text-white">
                                        ${room.price}/night
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl text-fauna-800 mb-2">{room.name}</CardTitle>
                                        <div className="flex items-center space-x-4 text-sm text-fauna-600">
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
                                </div>
                            </CardHeader>

                            <CardContent>
                                <p className="text-fauna-700 mb-4">{room.description}</p>

                                <div className="space-y-3 mb-6">
                                    <h4 className="font-semibold text-fauna-800">Room Features:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {room.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-sm text-fauna-600">
                                                <div className="w-2 h-2 bg-fauna-400 rounded-full mr-2"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-2xl font-bold text-fauna-700">${room.price}</span>
                                        <span className="text-fauna-600">/night</span>
                                    </div>
                                    <div className="space-x-2">
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="border-fauna-300 text-fauna-700 hover:bg-fauna-50"
                                        >
                                            <Link to={`/rooms/${room.id}`}>View Details</Link>
                                        </Button>
                                        <Button
                                            onClick={() => handleBookRoom(room.id)}
                                            className="bg-fauna-500 hover:bg-fauna-600 text-white"
                                        >
                                            Book Now
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {!showFullDetails && (
                    <div className="text-center mt-12">
                        <Button asChild className="bg-fauna-600 hover:bg-fauna-700 text-white px-8 py-6 text-lg">
                            <Link to="/rooms">View All Rooms</Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RoomsSection;
