
import React, { createContext,  useState, type ReactNode  } from 'react';

export interface AuthContextType {
    user: string | null;
    login: (email: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}
interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<string | null>(null);

    const login = (email: string) => {
        setUser(email);
        localStorage.setItem('auth_user', email);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth_user');
    };

    const isAuthenticated = !!user;

    React.useEffect(() => {
        const savedUser = localStorage.getItem('auth_user');
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};