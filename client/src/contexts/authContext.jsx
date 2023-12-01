import { createContext } from 'react';
import usePersistedState from '../hooks/usePersistedState.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = usePersistedState('Authorization', {});

    const updateAuth = (obj) => {
        setAuth(obj);
    }

    const values = {
        userId: auth.id,
        username: auth.username,
        email: auth.email,
        token: auth.token,
        isAuthenticated: !!auth.token,
        updateAuth,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
