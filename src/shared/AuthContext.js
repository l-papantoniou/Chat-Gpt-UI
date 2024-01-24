import React, {createContext, useContext, useState} from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('jwt'));
    const [user, setUser] = useState({id: null, username: ''});
    const login = (jwtToken, userId, username) => {
        localStorage.setItem('jwt', jwtToken);
        setUser({id: userId, username});
        setIsAuthenticated(true);

    };

    const logout = () => {
        localStorage.removeItem('jwt');
        setUser({id: null, username: ''});
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
