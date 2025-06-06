import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hotel, User } from 'lucide-react';

const amenities = [
    {
        id: 1,
        name: "Botanical Spa & Wellness",
        category: "Wellness",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
        description: "Natural healing treatments using organic botanicals and forest essences",
        hours: "6:00 AM - 10:00 PM",
        features: ["Massage Therapy", "Herbal Baths", "Meditation Garden", "Aromatherapy"]
    },
    {
        id: 2,
        name: "Garden Restaurant",
        category: "Dining",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
        description: "Farm-to-table dining experience with ingredients from our organic garden",
        hours: "7:00 AM - 11:00 PM",
        features: ["Organic Menu", "Garden Views", "Wine Selection", "Private Dining"]
    },
    {
        id: 3,
        name: "Nature Pool & Deck",
        category: "Recreation",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop",
        description: "Infinity pool surrounded by lush greenery and natural stone features",
        hours: "6:00 AM - 9:00 PM",
        features: ["Infinity Pool", "Poolside Bar", "Lounge Area", "Water Features"]
    },
    {
        id: 4,
        name: "Fitness & Yoga Pavilion",
        category: "Fitness",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        description: "Open-air fitness center and yoga pavilion with panoramic nature views",
        hours: "5:00 AM - 11:00 PM",
        features: ["Modern Equipment", "Yoga Classes", "Personal Training", "Nature Views"]
    },
    {
        id: 5,
        name: "Conference Garden",
        category: "Business",
        image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=400&h=300&fit=crop",
        description: "Natural meeting spaces perfect for corporate retreats and events",
        hours: "24/7 Access",
        features: ["Meeting Rooms", "AV Equipment", "Catering Service", "Garden Setting"]
    },
    {
        id: 6,
        name: "Adventure Concierge",
        category: "Activities",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        description: "Guided nature experiences and outdoor adventure coordination",
        hours: "8:00 AM - 6:00 PM",
        features: ["Nature Walks", "Bird Watching", "Hiking Guides", "Photography Tours"]
    }
];

const getCategoryColor = (category: string) => {
    const colors = {
        'Wellness': 'bg-fauna-100 text-fauna-800',
        'Dining': 'bg-nature-100 text-nature-800',
        'Recreation': 'bg-blue-100 text-blue-800',
        'Fitness': 'bg-orange-100 text-orange-800',
        'Business': 'bg-purple-100 text-purple-800',
        'Activities': 'bg-emerald-100 text-emerald-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const AmenitiesSection = () => {
    return (
        <section id="amenities" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-fauna-800 mb-6">
                        Nature's Luxuries
                    </h2>
                    <p className="text-xl text-fauna-600 max-w-3xl mx-auto">
                        Discover our comprehensive amenities designed to enhance your connection with nature while providing modern comfort
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((amenity, index) => (
                        <Card key={amenity.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-fauna-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="relative">
                                <img
                                    src={amenity.image}
                                    alt={amenity.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className={getCategoryColor(amenity.category)}>
                                        {amenity.category}
                                    </Badge>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-fauna-800 mb-2">{amenity.name}</h3>
                                <p className="text-fauna-600 mb-4">{amenity.description}</p>

                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-fauna-700 font-medium">Hours:</span>
                                        <span className="text-fauna-600">{amenity.hours}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-semibold text-fauna-800 text-sm">Features:</h4>
                                    <div className="grid grid-cols-2 gap-1">
                                        {amenity.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-xs text-fauna-600">
                                                <div className="w-1.5 h-1.5 bg-fauna-400 rounded-full mr-2"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-fauna-50 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-fauna-800 mb-4">All Amenities Included</h3>
                        <p className="text-fauna-600 mb-6">
                            Every guest enjoys complimentary access to our full range of amenities. Additional services and premium experiences are available upon request.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="space-y-2">
                                <Hotel className="w-8 h-8 text-fauna-500 mx-auto" />
                                <span className="text-sm font-medium text-fauna-700">Concierge Service</span>
                            </div>
                            <div className="space-y-2">
                                <User className="w-8 h-8 text-fauna-500 mx-auto" />
                                <span className="text-sm font-medium text-fauna-700">24/7 Support</span>
                            </div>
                            <div className="space-y-2">
                                <Hotel className="w-8 h-8 text-fauna-500 mx-auto" />
                                <span className="text-sm font-medium text-fauna-700">Valet Parking</span>
                            </div>
                            <div className="space-y-2">
                                <User className="w-8 h-8 text-fauna-500 mx-auto" />
                                <span className="text-sm font-medium text-fauna-700">Room Service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AmenitiesSection;
