import React, {createContext, useContext, useEffect, useState} from 'react';
import axiosInstance from "../utils/axiosInstance";

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


        const verify = async () => {
            try {
                const response = await axiosInstance.post("/user/verify", {
                    headers: {
                        token: localStorage.getItem('jwt')
                    }
                });

                if (response.status === 200) {
                    setIsAuthenticated(true)
                    setUser({id: response.data.user.id,
                        username: response.data.user.username})
                } else {
                    setIsAuthenticated(false)
                    logout();
                }
            } catch (error) {
                console.error("Error in JWT verification:", error.message);
            }

        }

        useEffect(() => {
            verify();
        }, []);

        return (
            <AuthContext.Provider value={{isAuthenticated, user, login, logout, verify}}>
                {children}
            </AuthContext.Provider>
        );
    }
;

export const useAuth = () => useContext(AuthContext);
