import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Hotel, User } from 'lucide-react';

const ContactSection = () => {
    const handleSubmit = () => {
        console.log('Contact form submitted');
        // Backend request
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-fauna-50 to-fauna-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-fauna-800 mb-6">
                        Connect with Nature
                    </h2>
                    <p className="text-xl text-fauna-600 max-w-3xl mx-auto">
                        Have questions about your stay or need assistance planning your perfect nature retreat? We're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <Card className="border-fauna-200 shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-2xl text-fauna-800">Send us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-fauna-700">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Your full name"
                                        className="border-fauna-200 focus:border-fauna-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-fauna-700">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="border-fauna-200 focus:border-fauna-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-fauna-700">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your plans or questions..."
                                        rows={4}
                                        className="border-fauna-200 focus:border-fauna-500"
                                    />
                                </div>

                                <Button
                                    onClick={handleSubmit}
                                    className="w-full bg-fauna-500 hover:bg-fauna-600 text-white py-3 text-lg"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <Card className="border-fauna-200 shadow-xl">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-fauna-800 mb-6">Visit Us</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-fauna-700 mb-2">Address</h4>
                                        <p className="text-fauna-600">
                                            123 Nature's Way<br />
                                            Botanical Gardens District<br />
                                            Green Valley, NV 89123
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-fauna-700 mb-2">Phone</h4>
                                        <p className="text-fauna-600">+1 (555) NATURE-1</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-fauna-700 mb-2">Email</h4>
                                        <p className="text-fauna-600">hello@ceresgarden.com</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-fauna-700 mb-2">Hours</h4>
                                        <p className="text-fauna-600">
                                            Reception: 24/7<br />
                                            Concierge: 6:00 AM - 11:00 PM
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-fauna-200 shadow-xl">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-fauna-800 mb-6">Quick Actions</h3>
                                <div className="space-y-4">
                                    <Button className="w-full bg-fauna-500 hover:bg-fauna-600 text-white justify-start" size="lg">
                                        <Hotel className="w-5 h-5 mr-3" />
                                        Make a Reservation
                                    </Button>
                                    <Button variant="outline" className="w-full border-fauna-300 text-fauna-700 hover:bg-fauna-50 justify-start" size="lg">
                                        <User className="w-5 h-5 mr-3" />
                                        Manage Booking
                                    </Button>
                                    <Button variant="outline" className="w-full border-fauna-300 text-fauna-700 hover:bg-fauna-50 justify-start" size="lg">
                                        <Hotel className="w-5 h-5 mr-3" />
                                        Special Requests
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;