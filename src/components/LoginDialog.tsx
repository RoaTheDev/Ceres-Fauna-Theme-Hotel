import React, {useState} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {toast} from 'sonner';
import {useNavigate} from "react-router-dom";
import type {UserType} from "@/stores/AuthContext.tsx";

interface LoginDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onLogin: (user: UserType) => void;
}
const dummyUsers = [
    { email: 'admin@ceresgarden.com', password: 'admin123', role: 'admin' },
    { email: 'user@example.com', password: 'user123', role: 'user' },
];

const LoginDialog = ({ open, onOpenChange, onLogin }: LoginDialogProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            const user = dummyUsers.find(u => u.email === email && u.password === password);

            if (user) {
                onLogin(user);
                onOpenChange(false);
                toast.success(`Welcome back! Logged in as ${user.role}`);
                setEmail('');
                setPassword('');
                if (user.role === 'admin') {
                    navigate('/admin');
                }
            } else {
                toast.error('Invalid email or password');
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-fauna-800 text-center">
                        Welcome Back
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-fauna-700">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border-fauna-200 focus:border-fauna-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-fauna-700">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border-fauna-200 focus:border-fauna-400"
                        />
                    </div>

                    <div className="bg-fauna-50 p-3 rounded-md text-sm text-fauna-600">
                        <p className="font-medium mb-1">Demo Accounts:</p>
                        <p>Admin: admin@ceresgarden.com / admin123</p>
                        <p>User: user@example.com / user123</p>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-fauna-500 hover:bg-fauna-600 text-white"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default LoginDialog;