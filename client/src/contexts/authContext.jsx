import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('authToken') || null);

    const updateToken = (newToken) => {
        if (newToken) {
            setToken(newToken);
            localStorage.setItem('authToken', newToken);
        } else {
            localStorage.removeItem('authToken')
            setToken();
        }
    };

    return (
        <AuthContext.Provider value={{ token, updateToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
