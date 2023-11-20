import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('authToken') || null);
    const [loggedUser, setLoggedUser] = useState({});

    const updateToken = (newToken) => {
        if (newToken) {
            setToken(newToken);
            localStorage.setItem('authToken', newToken);
        } else {
            setToken(null);
            localStorage.removeItem('authToken');
        }
    };

    const updateUser = (obj) => {
        setLoggedUser({
            _id: obj.id,
            username: obj.username,
            email: obj.email,
        })
    }

    return (
        <AuthContext.Provider value={{ token, updateToken, loggedUser, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
