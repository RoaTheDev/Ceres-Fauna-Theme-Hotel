
import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, User, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import LoginDialog from './LoginDialog';
import { toast } from 'sonner';

const Navigation = () => {
    const location = useLocation();
    const { user, login, logout, isAuthenticated } = useAuth();
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    const handleLogout = () => {
        logout();
        toast.success('Logged out successfully');
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Rooms', path: '/rooms' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav className="bg-white/90 backdrop-blur-md shadow-sm border-b border-fauna-100 sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-fauna-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">CG</span>
                            </div>
                            <span className="text-xl font-bold text-fauna-800">Ceres Garden</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`text-sm font-medium transition-colors hover:text-fauna-600 ${
                                        isActive(item.path)
                                            ? 'text-fauna-600 border-b-2 border-fauna-600 pb-1'
                                            : 'text-fauna-700'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Auth Section */}
                        <div className="hidden md:flex items-center space-x-4">
                            {isAuthenticated ? (
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-2 text-fauna-700">
                                        <User className="h-4 w-4" />
                                        <span className="text-sm font-medium">{user}</span>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleLogout}
                                        className="border-fauna-300 text-fauna-700 hover:bg-fauna-50"
                                    >
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Logout
                                    </Button>
                                </div>
                            ) : (
                                <Button
                                    onClick={() => setIsLoginOpen(true)}
                                    className="bg-fauna-500 hover:bg-fauna-600 text-white"
                                >
                                    Login
                                </Button>
                            )}
                        </div>

                        {/* Mobile Navigation */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <div className="flex flex-col space-y-6 mt-8">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className={`text-lg font-medium transition-colors hover:text-fauna-600 ${
                                                isActive(item.path) ? 'text-fauna-600' : 'text-fauna-700'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}

                                    <div className="pt-6 border-t border-fauna-200">
                                        {isAuthenticated ? (
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-2 text-fauna-700">
                                                    <User className="h-4 w-4" />
                                                    <span className="text-sm font-medium">{user}</span>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    onClick={handleLogout}
                                                    className="w-full border-fauna-300 text-fauna-700 hover:bg-fauna-50"
                                                >
                                                    <LogOut className="h-4 w-4 mr-2" />
                                                    Logout
                                                </Button>
                                            </div>
                                        ) : (
                                            <Button
                                                onClick={() => setIsLoginOpen(true)}
                                                className="w-full bg-fauna-500 hover:bg-fauna-600 text-white"
                                            >
                                                Login
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>

            <LoginDialog
                open={isLoginOpen}
                onOpenChange={setIsLoginOpen}
                onLogin={login}
            />
        </>
    );
};

export default Navigation;