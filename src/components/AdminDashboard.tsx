import {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Badge} from '@/components/ui/badge';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Hotel, User} from 'lucide-react';
import {amenities,bookings,rooms} from '@/data/adminData'
const AdminDashboard = () => {
    const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

    const getStatusColor = (status: string) => {
        const colors = {
            'available': 'bg-green-100 text-green-800',
            'occupied': 'bg-blue-100 text-blue-800',
            'maintenance': 'bg-yellow-100 text-yellow-800',
            'confirmed': 'bg-green-100 text-green-800',
            'pending': 'bg-yellow-100 text-yellow-800',
            'checked-in': 'bg-blue-100 text-blue-800',
            'open': 'bg-green-100 text-green-800'
        };
        return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="min-h-screen bg-fauna-50 py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-fauna-800 mb-2">Admin Dashboard</h1>
                    <p className="text-fauna-600">Manage your hotel operations and guest experiences</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="border-fauna-200">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-fauna-600 mb-2">12</div>
                            <div className="text-sm text-fauna-500">Total Bookings</div>
                        </CardContent>
                    </Card>
                    <Card className="border-fauna-200">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                            <div className="text-sm text-fauna-500">Available Rooms</div>
                        </CardContent>
                    </Card>
                    <Card className="border-fauna-200">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                            <div className="text-sm text-fauna-500">Current Guests</div>
                        </CardContent>
                    </Card>
                    <Card className="border-fauna-200">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-fauna-600 mb-2">$2,840</div>
                            <div className="text-sm text-fauna-500">Today's Revenue</div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="bookings" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4 bg-white border-fauna-200">
                        <TabsTrigger value="bookings"
                                     className="data-[state=active]:bg-fauna-100">Bookings</TabsTrigger>
                        <TabsTrigger value="rooms" className="data-[state=active]:bg-fauna-100">Rooms</TabsTrigger>
                        <TabsTrigger value="amenities"
                                     className="data-[state=active]:bg-fauna-100">Amenities</TabsTrigger>
                        <TabsTrigger value="settings"
                                     className="data-[state=active]:bg-fauna-100">Settings</TabsTrigger>
                    </TabsList>

                    {/* Bookings Management */}
                    <TabsContent value="bookings">
                        <Card className="border-fauna-200">
                            <CardHeader>
                                <CardTitle className="text-fauna-800">Booking Management</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {bookings.map((booking) => (
                                        <div key={booking.id}
                                             className="flex items-center justify-between p-4 bg-white rounded-lg border border-fauna-200">
                                            <div className="flex items-center space-x-4">
                                                <User className="w-10 h-10 text-fauna-500"/>
                                                <div>
                                                    <h3 className="font-semibold text-fauna-800">{booking.guest}</h3>
                                                    <p className="text-sm text-fauna-600">{booking.room}</p>
                                                    <p className="text-xs text-fauna-500">{booking.checkIn} to {booking.checkOut}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Badge className={getStatusColor(booking.status)}>
                                                    {booking.status}
                                                </Badge>
                                                <Button variant="outline" size="sm" className="border-fauna-300">
                                                    View Details
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Room Management */}
                    <TabsContent value="rooms">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-fauna-200">
                                <CardHeader>
                                    <CardTitle className="text-fauna-800">Room Status</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {rooms.map((room) => (
                                            <div key={room.id}
                                                 className="flex items-center justify-between p-4 bg-white rounded-lg border border-fauna-200">
                                                <div className="flex items-center space-x-4">
                                                    <Hotel className="w-8 h-8 text-fauna-500"/>
                                                    <div>
                                                        <h3 className="font-semibold text-fauna-800">{room.name}</h3>
                                                        <p className="text-sm text-fauna-600">${room.price}/night</p>
                                                        <p className="text-xs text-fauna-500">Last
                                                            cleaned: {room.lastCleaned}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <Badge className={getStatusColor(room.status)}>
                                                        {room.status}
                                                    </Badge>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="border-fauna-300"
                                                        onClick={() => setSelectedRoom(room.id)}
                                                    >
                                                        Manage
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-fauna-200">
                                <CardHeader>
                                    <CardTitle className="text-fauna-800">Room Details</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {selectedRoom ? (
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <Label htmlFor="roomPrice" className="text-fauna-700">Price per
                                                        Night</Label>
                                                    <Input id="roomPrice" placeholder="$299"
                                                           className="border-fauna-200"/>
                                                </div>
                                                <div>
                                                    <Label htmlFor="roomStatus"
                                                           className="text-fauna-700">Status</Label>
                                                    <Select>
                                                        <SelectTrigger className="border-fauna-200">
                                                            <SelectValue placeholder="Select status"/>
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="available">Available</SelectItem>
                                                            <SelectItem value="occupied">Occupied</SelectItem>
                                                            <SelectItem value="maintenance">Maintenance</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div>
                                                <Label htmlFor="roomNotes" className="text-fauna-700">Maintenance
                                                    Notes</Label>
                                                <Textarea id="roomNotes" placeholder="Any maintenance notes..."
                                                          className="border-fauna-200"/>
                                            </div>
                                            <Button className="w-full bg-fauna-500 hover:bg-fauna-600 text-white">
                                                Update Room
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="text-center text-fauna-600 py-8">
                                            Select a room to view and edit details
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Amenities Management */}
                    <TabsContent value="amenities">
                        <Card className="border-fauna-200">
                            <CardHeader>
                                <CardTitle className="text-fauna-800">Amenities Management</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {amenities.map((amenity) => (
                                        <div key={amenity.id}
                                             className="flex items-center justify-between p-4 bg-white rounded-lg border border-fauna-200">
                                            <div className="flex items-center space-x-4">
                                                <Hotel className="w-10 h-10 text-fauna-500"/>
                                                <div>
                                                    <h3 className="font-semibold text-fauna-800">{amenity.name}</h3>
                                                    <p className="text-sm text-fauna-600">Capacity: {amenity.capacity} guests</p>
                                                    <p className="text-xs text-fauna-500">Current: {amenity.currentGuests} guests</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Badge className={getStatusColor(amenity.status)}>
                                                    {amenity.status}
                                                </Badge>
                                                <Button variant="outline" size="sm" className="border-fauna-300">
                                                    Manage
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Settings */}
                    <TabsContent value="settings">
                        <Card className="border-fauna-200">
                            <CardHeader>
                                <CardTitle className="text-fauna-800">Hotel Settings</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="hotelName" className="text-fauna-700">Hotel Name</Label>
                                        <Input id="hotelName" value="Ceres Garden Hotel" className="border-fauna-200"/>
                                    </div>
                                    <div>
                                        <Label htmlFor="description" className="text-fauna-700">Description</Label>
                                        <Textarea
                                            id="description"
                                            value="Experience the serenity of nature in our botanical sanctuary. Where comfort meets the wild beauty of Mother Earth."
                                            className="border-fauna-200"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="checkInTime" className="text-fauna-700">Check-in
                                                Time</Label>
                                            <Input id="checkInTime" value="3:00 PM" className="border-fauna-200"/>
                                        </div>
                                        <div>
                                            <Label htmlFor="checkOutTime" className="text-fauna-700">Check-out
                                                Time</Label>
                                            <Input id="checkOutTime" value="11:00 AM" className="border-fauna-200"/>
                                        </div>
                                    </div>
                                    <Button className="bg-fauna-500 hover:bg-fauna-600 text-white">
                                        Save Settings
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default AdminDashboard;