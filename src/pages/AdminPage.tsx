import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Hotel, User, Calendar, Settings, BarChart3, Users } from 'lucide-react';
import {bookings} from "@/data/adminData.ts";
const AdminPage = () => {
    const [selectedRoom, setSelectedRoom] = useState<number | null>(null);


    const rooms = [
        { id: 1, name: "Garden View Suite", status: "available", price: 299, lastCleaned: "2024-01-14" },
        { id: 2, name: "Forest Retreat Room", status: "occupied", price: 199, lastCleaned: "2024-01-13" },
        { id: 3, name: "Nature's Embrace Family Suite", status: "maintenance", price: 449, lastCleaned: "2024-01-12" },
        { id: 4, name: "Botanical Luxury Villa", status: "available", price: 699, lastCleaned: "2024-01-14" }
    ];

    const getStatusColor = (status: string) => {
        const colors = {
            'available': 'bg-green-100 text-green-800',
            'occupied': 'bg-blue-100 text-blue-800',
            'maintenance': 'bg-yellow-100 text-yellow-800',
            'confirmed': 'bg-green-100 text-green-800',
            'pending': 'bg-yellow-100 text-yellow-800',
            'checked-in': 'bg-blue-100 text-blue-800'
        };
        return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="min-h-screen bg-fauna-50">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-fauna-800 mb-2">Hotel Management Dashboard</h1>
                    <p className="text-fauna-600">Manage your hotel operations and guest experiences</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="border-fauna-200">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-fauna-600">Total Bookings</p>
                                    <p className="text-3xl font-bold text-fauna-800">12</p>
                                </div>
                                <Calendar className="h-8 w-8 text-fauna-500" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-fauna-200">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-fauna-600">Available Rooms</p>
                                    <p className="text-3xl font-bold text-green-600">8</p>
                                </div>
                                <Hotel className="h-8 w-8 text-fauna-500" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-fauna-200">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-fauna-600">Current Guests</p>
                                    <p className="text-3xl font-bold text-blue-600">4</p>
                                </div>
                                <Users className="h-8 w-8 text-fauna-500" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-fauna-200">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-fauna-600">Today's Revenue</p>
                                    <p className="text-3xl font-bold text-fauna-600">$2,840</p>
                                </div>
                                <BarChart3 className="h-8 w-8 text-fauna-500" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="bookings" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4 bg-white border-fauna-200">
                        <TabsTrigger value="bookings" className="data-[state=active]:bg-fauna-100">
                            <Calendar className="h-4 w-4 mr-2" />
                            Bookings
                        </TabsTrigger>
                        <TabsTrigger value="rooms" className="data-[state=active]:bg-fauna-100">
                            <Hotel className="h-4 w-4 mr-2" />
                            Rooms
                        </TabsTrigger>
                        <TabsTrigger value="guests" className="data-[state=active]:bg-fauna-100">
                            <User className="h-4 w-4 mr-2" />
                            Guests
                        </TabsTrigger>
                        <TabsTrigger value="settings" className="data-[state=active]:bg-fauna-100">
                            <Settings className="h-4 w-4 mr-2" />
                            Settings
                        </TabsTrigger>
                    </TabsList>

                    {/* Bookings Management */}
                    <TabsContent value="bookings">
                        <Card className="border-fauna-200">
                            <CardHeader>
                                <CardTitle className="text-fauna-800">Recent Bookings</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Guest</TableHead>
                                            <TableHead>Room</TableHead>
                                            <TableHead>Check-in</TableHead>
                                            <TableHead>Check-out</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {bookings.map((booking) => (
                                            <TableRow key={booking.id}>
                                                <TableCell className="font-medium">{booking.guest}</TableCell>
                                                <TableCell>{booking.room}</TableCell>
                                                <TableCell>{booking.checkIn}</TableCell>
                                                <TableCell>{booking.checkOut}</TableCell>
                                                <TableCell>
                                                    <Badge className={getStatusColor(booking.status)}>
                                                        {booking.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="outline" size="sm" className="border-fauna-300">
                                                        View
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Room Management */}
                    <TabsContent value="rooms">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-fauna-200">
                                <CardHeader>
                                    <CardTitle className="text-fauna-800">Room Status Overview</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Room</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Price</TableHead>
                                                <TableHead>Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {rooms.map((room) => (
                                                <TableRow key={room.id}>
                                                    <TableCell className="font-medium">{room.name}</TableCell>
                                                    <TableCell>
                                                        <Badge className={getStatusColor(room.status)}>
                                                            {room.status}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell>${room.price}/night</TableCell>
                                                    <TableCell>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="border-fauna-300"
                                                            onClick={() => setSelectedRoom(room.id)}
                                                        >
                                                            Edit
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>

                            <Card className="border-fauna-200">
                                <CardHeader>
                                    <CardTitle className="text-fauna-800">Room Management</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {selectedRoom ? (
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <Label htmlFor="roomPrice" className="text-fauna-700">Price per Night</Label>
                                                    <Input id="roomPrice" placeholder="$299" className="border-fauna-200" />
                                                </div>
                                                <div>
                                                    <Label htmlFor="roomStatus" className="text-fauna-700">Status</Label>
                                                    <Select>
                                                        <SelectTrigger className="border-fauna-200">
                                                            <SelectValue placeholder="Select status" />
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
                                                <Label htmlFor="roomNotes" className="text-fauna-700">Maintenance Notes</Label>
                                                <Textarea id="roomNotes" placeholder="Any maintenance notes..." className="border-fauna-200" />
                                            </div>
                                            <Button className="w-full bg-fauna-500 hover:bg-fauna-600 text-white">
                                                Update Room
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="text-center text-fauna-600 py-8">
                                            <Hotel className="h-12 w-12 mx-auto mb-4 text-fauna-400" />
                                            <p>Select a room from the table to manage its details</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Guest Management */}
                    <TabsContent value="guests">
                        <Card className="border-fauna-200">
                            <CardHeader>
                                <CardTitle className="text-fauna-800">Guest Management</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center py-12">
                                    <User className="h-16 w-16 mx-auto mb-4 text-fauna-400" />
                                    <h3 className="text-lg font-semibold text-fauna-800 mb-2">Guest Management</h3>
                                    <p className="text-fauna-600">View and manage guest information, preferences, and history</p>
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
                                        <Input id="hotelName" value="Ceres Garden Hotel" className="border-fauna-200" />
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
                                            <Label htmlFor="checkInTime" className="text-fauna-700">Check-in Time</Label>
                                            <Input id="checkInTime" value="3:00 PM" className="border-fauna-200" />
                                        </div>
                                        <div>
                                            <Label htmlFor="checkOutTime" className="text-fauna-700">Check-out Time</Label>
                                            <Input id="checkOutTime" value="11:00 AM" className="border-fauna-200" />
                                        </div>
                                    </div>
                                    <Button className="bg-fauna-500 hover:bg-fauna-600 text-white ">
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

export default AdminPage;