
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Hotel, User, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const location = useLocation();

    const toggleMode = () => {
        const newMode = !isAdmin;
        setIsAdmin(newMode);

        const url = new URL(window.location.href);
        if (newMode) {
            url.searchParams.set('admin', 'true');
        } else {
            url.searchParams.delete('admin');
        }
        window.history.pushState({}, '', url);
    };

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-fauna-200 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-fauna-500 rounded-full flex items-center justify-center">
                            <Hotel className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-fauna-800">Ceres Garden Hotel</h1>
                            <p className="text-xs text-fauna-600">Nature's Embrace</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {!isAdmin ? (
                            <>
                                <Link to="/" className={`${location.pathname === '/' ? 'text-fauna-900 font-medium' : 'text-fauna-700'} hover:text-fauna-900 transition-colors`}>Home</Link>
                                <Link to="/rooms" className={`${location.pathname.includes('/rooms') ? 'text-fauna-900 font-medium' : 'text-fauna-700'} hover:text-fauna-900 transition-colors`}>Rooms</Link>
                                <Link to="/about" className={`${location.pathname === '/about' ? 'text-fauna-900 font-medium' : 'text-fauna-700'} hover:text-fauna-900 transition-colors`}>About</Link>
                                <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-fauna-900 font-medium' : 'text-fauna-700'} hover:text-fauna-900 transition-colors`}>Contact</Link>
                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={toggleMode}
                            className="border-fauna-300 text-fauna-700 hover:bg-fauna-50"
                        >
                            {isAdmin ? <User className="w-4 h-4 mr-2" /> : <Settings className="w-4 h-4 mr-2" />}
                            {isAdmin ? 'Guest View' : 'Admin Panel'}
                        </Button>

                        {/* Mobile Menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="sm" className="md:hidden">
                                    <Menu className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] bg-white">
                                <div className="flex flex-col space-y-4 mt-8">
                                    {!isAdmin ? (
                                        <>
                                            <Link to="/" className={`${location.pathname === '/' ? 'bg-fauna-50 text-fauna-900' : 'text-fauna-700'} p-2 rounded-lg hover:bg-fauna-50 hover:text-fauna-900`}>Home</Link>
                                            <Link to="/rooms" className={`${location.pathname.includes('/rooms') ? 'bg-fauna-50 text-fauna-900' : 'text-fauna-700'} p-2 rounded-lg hover:bg-fauna-50 hover:text-fauna-900`}>Rooms</Link>
                                            <Link to="/about" className={`${location.pathname === '/about' ? 'bg-fauna-50 text-fauna-900' : 'text-fauna-700'} p-2 rounded-lg hover:bg-fauna-50 hover:text-fauna-900`}>About</Link>
                                            <Link to="/contact" className={`${location.pathname === '/contact' ? 'bg-fauna-50 text-fauna-900' : 'text-fauna-700'} p-2 rounded-lg hover:bg-fauna-50 hover:text-fauna-900`}>Contact</Link>
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
