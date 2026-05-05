import React, { useCallback, useMemo, useState } from "react";
import { AuthContext} from "@/auth/authContext";

const storageKey = 'isAuthenticated';

function readStoredSession(): boolean {
    try {
        return sessionStorage.getItem(storageKey) === 'true';
    } catch (error) {
        return false;
    }
}

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(readStoredSession());

    const login = useCallback(() => {
        try {
            sessionStorage.setItem(storageKey, 'true');
        } catch (error) {
            // Handle storage error if needed
        }
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
        try {
            sessionStorage.removeItem(storageKey);
        } catch (error) {
            // Handle storage error if needed
        }
        setIsAuthenticated(false);
    }, []);

    const value = useMemo(() => ({isAuthenticated, login, logout}), [isAuthenticated, login, logout]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}