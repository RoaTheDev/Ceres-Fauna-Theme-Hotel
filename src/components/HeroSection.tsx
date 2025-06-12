import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Search, Sparkles, Hotel } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
    const [checkIn, setCheckIn] = useState<Date>();
    const [checkOut, setCheckOut] = useState<Date>();
    const [guests, setGuests] = useState('2');

    const handleBookingSearch = () => {
        console.log('Searching for rooms...', { checkIn, checkOut, guests });
        // Backend call
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with nature theme */}
            <div className="absolute inset-0 nature-gradient opacity-90"></div>
            <div className="absolute inset-0 leaf-pattern"></div>

            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-fauna-300 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-32 right-20 w-16 h-16 bg-nature-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 right-10 w-12 h-12 bg-fauna-400 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="text-center mb-12 animate-fade-in">
                    <div className="flex items-center justify-center mb-4">
                        <Sparkles className="w-8 h-8 text-white mr-2" />
                        <span className="text-white/90 text-lg font-medium">Welcome to Nature's Paradise</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Ceres Garden
                        <span className="block text-nature-200">Hotel</span>
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Experience the serenity of nature in our botanical sanctuary. Where comfort meets the wild beauty of Mother Earth.
                    </p>
                </div>

                {/* Booking Form */}
                <Card className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl animate-fade-in">
                    <CardContent className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
                            {/* Check-in Date */}
                            <div className="space-y-2">
                                <Label htmlFor="checkin" className="text-fauna-800 font-medium">Check-in</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !checkIn && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={checkIn}
                                            onSelect={setCheckIn}
                                            className="pointer-events-auto"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Check-out Date */}
                            <div className="space-y-2">
                                <Label htmlFor="checkout" className="text-fauna-800 font-medium">Check-out</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !checkOut && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={checkOut}
                                            onSelect={setCheckOut}
                                            className="pointer-events-auto"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Number of Guests */}
                            <div className="space-y-2">
                                <Label htmlFor="guests" className="text-fauna-800 font-medium">Guests</Label>
                                <Select value={guests} onValueChange={setGuests}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select guests" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1 Guest</SelectItem>
                                        <SelectItem value="2">2 Guests</SelectItem>
                                        <SelectItem value="3">3 Guests</SelectItem>
                                        <SelectItem value="4">4 Guests</SelectItem>
                                        <SelectItem value="5">5+ Guests</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                            </div>

                            {/* Search Button */}
                            <Button
                                onClick={handleBookingSearch}
                                className="bg-fauna-500 hover:bg-fauna-600 text-white h-12 px-8 text-lg font-semibold shadow-lg"
                            >
                                <Search className="w-5 h-5 mr-2" />
                                Search Rooms
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
                    <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Hotel className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Luxury Comfort</h3>
                        <p className="text-white/80">Premium rooms with nature-inspired amenities</p>
                    </div>
                    <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Natural Spa</h3>
                        <p className="text-white/80">Rejuvenating treatments in harmony with nature</p>
                    </div>
                    <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Hotel className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Organic Dining</h3>
                        <p className="text-white/80">Farm-to-table cuisine celebrating local flavors</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;