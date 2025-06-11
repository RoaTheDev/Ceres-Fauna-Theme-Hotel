import  { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import RoomsSection from '@/components/RoomsSection.tsx';
import RoomSearchFilter, {type FilterOptions } from '@/components/RoomSearchFilter';
import DateRangePicker from '@/components/DateRangePicker';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { rooms } from '@/data/rooms';

const RoomsPage = () => {
    const [filters, setFilters] = useState<FilterOptions>({
        priceRange: '',
        capacity: '',
        features: []
    });

    const filteredRooms = useMemo(() => {
        return rooms.filter(room => {
            let matchesPrice = true;
            if (filters.priceRange) {
                const [min, max] = filters.priceRange.split('-').map(p => p.replace('+', '').replace('$', ''));
                const minPrice = parseInt(min);
                const maxPrice = max ? parseInt(max) : Infinity;
                matchesPrice = room.price >= minPrice && room.price <= maxPrice;
            }

            const matchesCapacity = !filters.capacity || room.capacity <= parseInt(filters.capacity);

            const matchesFeatures = filters.features.length === 0 ||
                filters.features.every(feature => room.features.includes(feature));

            return matchesPrice && matchesCapacity && matchesFeatures;
        });
    }, [filters]);

    const handleFilter = (newFilters: FilterOptions) => {
        setFilters(newFilters);
    };

    const handleClearFilters = () => {
        setFilters({ priceRange: '', capacity: '', features: [] });
    };

    const handleDateChange = (checkIn: Date | undefined, checkOut: Date | undefined) => {
        console.log('Date range selected:', { checkIn, checkOut });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="container mx-auto px-4 py-8">

                <h1 className="text-4xl font-bold text-fauna-800 mb-8">Our Rooms & Suites</h1>
                <p className="text-lg text-fauna-600 mb-8 max-w-3xl">
                    Discover our nature-inspired sanctuaries, each designed to immerse you in tranquility while providing modern comforts and luxurious amenities.
                </p>

                {/* Date Selection */}
                <div className="bg-white rounded-lg border border-fauna-200 p-6 mb-8 shadow-sm">
                    <h2 className="text-xl font-semibold text-fauna-800 mb-4">Select Your Stay</h2>
                    <DateRangePicker onDateChange={handleDateChange} />
                </div>

                <RoomSearchFilter
                    onFilter={handleFilter}
                    onClearFilters={handleClearFilters}
                />

                {filteredRooms.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-fauna-600 mb-4">No rooms match your filter criteria</p>
                        <Button
                            onClick={handleClearFilters}
                            variant="outline"
                            className="border-fauna-300 text-fauna-700 hover:bg-fauna-50"
                        >
                            Clear all filters
                        </Button>
                    </div>
                ) : (
                    <RoomsSection showFullDetails={true} filteredRooms={filteredRooms} />
                )}
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
                                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms</Link></li>
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

export default RoomsPage;