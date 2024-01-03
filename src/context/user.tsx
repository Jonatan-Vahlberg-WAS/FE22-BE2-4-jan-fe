"use client";

import AxiosInstance from "@/utils/axios";
import { createContext, useContext, useEffect, useState } from "react";

// Defines the user Context state type
interface UserContextType {
    user: User | null;
    token?: string;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    login: (email: string, password: string, onSuccess?: () => void, onError?: (error: string) => void) => void;
    register: (email: string, password: string, firstName: string, lastName: string, onSuccess?: () => void, onError?: (error: string) => void) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
    login: () => {},
    register: () => {},
    logout: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | undefined>(undefined);

    useEffect(() => {
        if(!token){
            let _token = localStorage.getItem("@AUTH_TOKEN");
            if(_token) {
                setToken(_token);
            }
        }
    }, []);

    useEffect(() => {
        if(token) {
            AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            fetchUser();
        }
    }, [token]);

    const fetchUser = () => {
        console.log("fetching user", AxiosInstance.defaults.headers.common);
        // sets the data type for the response to known type AuthResponse
        AxiosInstance.get<AuthResponse>("/user/profile")
            .then((res) => {
                setUser(res.data.user);
            })
            .catch((err) => {
                console.log(err, err.response);
            });
    };

    const login: UserContextType["login"] = async (email, password, onSuccess, onError) => {
        // sets the data type for the response to known type AuthResponse
        AxiosInstance.post<AuthResponse>("/auth/login", {
            email,
            password,
        })
            .then((res) => {
                const { user, token } = res.data;
                setUser(user);
                setToken(token);
                localStorage.setItem("@AUTH_TOKEN", token);
                AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                onSuccess && onSuccess();
            })
            .catch((err) => {
                console.log(err, err.response);
                const data: ErrorResponse = err?.response?.data; // type casting / type assertion
                onError && onError(data.message);
            });
    };

    const register: UserContextType["register"] = async (email, password, firstName, lastName, onSuccess, onError) => {
        //TODO: implement register
    };

    const logout: UserContextType["logout"] = () => {
        setUser(null);
        setToken(undefined);
        localStorage.removeItem("@AUTH_TOKEN");
        delete AxiosInstance.defaults.headers.common["Authorization"];
    };

    return (
        <UserContext.Provider value={{ 
            user,
            token, 
            setUser,
            login,
            register,
            logout, 
        }}>
            {children}
        </UserContext.Provider>
    );
}

const useUser = () => {
    const context = useContext(UserContext);
    if(context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

export { UserContext, UserProvider, useUser };