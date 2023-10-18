import { createContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState('');

    useEffect(() => {
        const getUser = async () => {
            try {
                const currentUser = await SecureStore.getItemAsync('user');
                if (currentUser) {
                    setUser(currentUser);
                    setIsAuthenticated(true);
                }
            } catch (e) {
                console.log(e);
            }
        };
        getUser();
    }, []);

    const handleLogin = async (username, password) => {
        if (username === 'Gonzalo' && password === '12345') {
            setUser(username);
            await SecureStore.setItemAsync('user', username);
            setIsAuthenticated(true);
            return true;
        }
        return false;
    }

    const handleLogout = async () => {
        setUser('');
        setIsAuthenticated(false);
        await SecureStore.deleteItemAsync('user');
    }

    const values = {
        user,
        isAuthenticated,
        handleLogin,
        handleLogout
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
