import {AuthContext} from '@/hooks/useAuth';
import React, {type ReactNode, useState} from 'react';

export type UserType = {
    email: string,
    password: string,
    role: string
}

export interface AuthContextType {
    user: UserType | null;
    login: (user: UserType) => void;
    logout: () => void;
    isAuthenticated: boolean;
}
interface AuthProviderProps {
    children: ReactNode;
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<UserType | null>(null);

    const login = (loginUser: UserType ) => {
        setUser(loginUser);
        localStorage.setItem('auth_user', JSON.stringify(user));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth_user');
    };

    const isAuthenticated = !!user;

    React.useEffect(() => {
        const savedUser = localStorage.getItem('auth_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
